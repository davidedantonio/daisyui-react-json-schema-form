import React from "react";
import { WidgetProps } from "@rjsf/core";
import { FormLabel } from "../Utils";

const selectValue = (value: any, selected: any, all: any) => {
  const at = all.indexOf(value);
  const updated = selected.slice(0, at).concat(value, selected.slice(at));

  // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order
  return updated.sort((a: any, b: any) => all.indexOf(a) > all.indexOf(b));
};

const deselectValue = (value: any, selected: any) => {
  return selected.filter((v: any) => v !== value);
};

const CheckboxesWidget = ({
  schema,
  label,
  id,
  disabled,
  options,
  value,
  autofocus,
  readonly,
  required,
  onChange,
  onBlur,
  onFocus,
  uiSchema,
  rawErrors
}: WidgetProps) => {
  const { enumOptions, enumDisabled, inline } = options;

  const _onChange = (option: any) => ({
    target: { checked },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const all = (enumOptions as any).map(({ value }: any) => value);

    if (checked) {
      onChange(selectValue(option.value, value, all));
    } else {
      onChange(deselectValue(option.value, value));
    }
  };

  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <>
      <div className="form-control w-full">
        <FormLabel
          label={label}
          uiSchema={uiSchema}
          schema={schema}
          required={required}
          rawErrors={rawErrors}
          id={id}
        />

        <div className={`${inline ? 'flex' : '' }`}>
          {(enumOptions as any).map((option: any, index: number) => {
            const checked = value.indexOf(option.value) !== -1;
            const itemDisabled =
              enumDisabled && (enumDisabled as any).indexOf(option.value) != -1;

            return (
              <div className={`form-control ${inline ? 'mr-5' : 'mb-2' }`} key={index}>
                <label className="cursor-pointer flex justify-start items-center">
                  <input
                    type="checkbox"
                    checked={checked}
                    className="checkbox checkbox-primary"
                    onChange={_onChange(option)}
                    autoFocus={autofocus && index === 0}
                    onBlur={_onBlur}
                    onFocus={_onFocus}
                    id={`${id}_${index}`}
                    required={required}
                    disabled={disabled || itemDisabled || readonly}
                  />
                  <span className="label-text ml-2">{option.label}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CheckboxesWidget;
