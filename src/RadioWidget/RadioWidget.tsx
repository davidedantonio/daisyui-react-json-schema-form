import React from "react";
import { WidgetProps } from "@rjsf/core";

const RadioWidget = ({
  id,
  schema,
  options,
  value,
  required,
  disabled,
  readonly,
  label,
  onChange,
  onBlur,
  onFocus,
  uiSchema,
}: WidgetProps) => {
  const { enumOptions, enumDisabled } = options;

  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(schema.type == "boolean" ? value !== "false" : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  const inline = Boolean(options && options.inline);

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">
          {uiSchema["ui:title"] || schema.title || label}
          {(label || uiSchema["ui:title"] || schema.title) && required ? "*" : null}
        </span>
      </label>
      <div className={`${inline ? 'flex' : '' }`}>
        {(enumOptions as any).map((option: any, index: number) => {
          const checked = value === option.value;
          const itemDisabled =
            enumDisabled && (enumDisabled as any).indexOf(option.value) != -1;

          return (
            <div className={`form-control ${inline ? 'mr-5' : 'mb-2' }`} key={index}>
              <label className="cursor-pointer flex justify-start items-center">
                <input
                  type="radio"
                  className="radio radio-primary"
                  id={option.label}
                  name={id}
                  disabled={disabled || itemDisabled || readonly}
                  checked={checked}
                  required={required}
                  value={option.value}
                  onChange={_onChange}
                  onBlur={_onBlur}
                  onFocus={_onFocus}
                />
                <span className="label-text ml-2">{option.label}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioWidget;
