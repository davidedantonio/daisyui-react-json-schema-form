import React from "react";

import { WidgetProps } from "@rjsf/core";
import { FormLabel } from "./../Utils";

const TextWidget = ({
  id,
  placeholder,
  required,
  readonly,
  disabled,
  type,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
  rawErrors = [],
  uiSchema,

}: WidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);
  const inputType = (type || schema.type) === 'string' ?  'text' : `${type || schema.type}`

  console.log(inputType)
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
      <span className="datepicker-toggle-button">clicca</span>
      <input
        id={id}
        placeholder={placeholder}
        autoFocus={autofocus}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        list={schema.examples ? `examples_${id}` : undefined}
        type={inputType}
        value={value || value === 0 ? value : ""}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        className={`input input-bordered w-full ${rawErrors.length > 0 ? "input-error" : ""}`}
      />
      {schema.examples ? (
        <datalist id={`examples_${id}`}>
          {(schema.examples as string[])
            .concat(schema.default ? ([schema.default] as string[]) : [])
            .map((example: any) => {
              return <option key={example} value={example} />;
            })}
        </datalist>
      ) : null}
    </div>
  );
};

export default TextWidget;
