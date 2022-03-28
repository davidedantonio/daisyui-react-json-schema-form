import React from "react";

import { WidgetProps } from "@rjsf/core";
import { utils } from "@rjsf/core";
import FormLabel from "../Utils/FormLabel";

const { asNumber, guessType } = utils;

const nums = new Set(["number", "integer"]);

const processValue = (schema: any, value: any) => {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  const { type, items } = schema;
  if (value === "") {
    return undefined;
  } else if (type === "array" && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === "boolean") {
    return value === "true";
  } else if (type === "number") {
    return asNumber(value);
  }

  // If type is undefined, but an enum is present, try and infer the type from
  // the enum values
  if (schema.enum) {
    if (schema.enum.every((x: any) => guessType(x) === "number")) {
      return asNumber(value);
    } else if (schema.enum.every((x: any) => guessType(x) === "boolean")) {
      return value === "true";
    }
  }

  return value;
};

const SelectWidget = ({
  schema,
  id,
  options,
  label,
  required,
  disabled,
  value,
  multiple,
  autofocus,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  uiSchema,
  rawErrors = [],
}: WidgetProps) => {
  const { enumOptions, enumDisabled } = options;

  const emptyValue = multiple ? [] : "";

  function getValue(
    event: React.FocusEvent | React.ChangeEvent | any,
    multiple: Boolean
  ) {
    if (multiple) {
      return [].slice
        .call(event.target.options as any)
        .filter((o: any) => o.selected)
        .map((o: any) => o.value);
    } else {
      return event.target.value;
    }
  }

  return (
    <div className="form-control w-full">
      <FormLabel
        label={label}
        uiSchema={uiSchema}
        schema={schema}
        required={required}
        rawErrors={rawErrors}
        id={id}
      />
      <select
        id={id}
        value={typeof value === "undefined" ? emptyValue : value}
        required={required}
        multiple={multiple}
        disabled={disabled}
        autoFocus={autofocus}
        onBlur={
          onBlur &&
          ((event: React.FocusEvent) => {
            const newValue = getValue(event, multiple);
            onBlur(id, processValue(schema, newValue));
          })
        }
        onFocus={
          onFocus &&
          ((event: React.FocusEvent) => {
            const newValue = getValue(event, multiple);
            onFocus(id, processValue(schema, newValue));
          })
        }
        onChange={(event: React.ChangeEvent) => {
          const newValue = getValue(event, multiple);
          onChange(processValue(schema, newValue));
        }}
        className={`${multiple ? 'h-28' : ''} select w-full select-bordered ${rawErrors.length > 0 ? "border-error" : ""}`}
      >
        {!multiple && schema.default === undefined && (
          <option value="">{placeholder}</option>
        )}

        {(enumOptions as any).map(({ value, label }: any, i: number) => {
          const disabled: any =
            Array.isArray(enumDisabled) &&
            (enumDisabled as any).indexOf(value) != -1;
          return (
            <option key={i} id={label} value={value} disabled={disabled}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectWidget;
