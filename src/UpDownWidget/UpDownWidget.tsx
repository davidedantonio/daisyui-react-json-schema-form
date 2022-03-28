import React from "react";
import { WidgetProps } from "@rjsf/core";

const UpDownWidget = ({
  id,
  required,
  readonly,
  disabled,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  schema,
  uiSchema,
  rawErrors = []
}: WidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => onChange(value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <div className="form-control w-full">
      <label className="label font-bold">
        <span className={`label-text ${rawErrors.length > 0 ? "text-error" : ""}`}>
          {uiSchema["ui:title"] || schema.title || label}
          {(label || uiSchema["ui:title"] || schema.title) && required ? "*" : null}
        </span>
      </label>
      <input
        id={id}
        autoFocus={autofocus}
        required={required}
        type="number"
        disabled={disabled}
        readOnly={readonly}
        value={value || value === 0 ? value : ""}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        className={`input input-bordered w-full ${rawErrors.length > 0 ? "input-error" : ""}`}
      />
    </div>
  );
};

export default UpDownWidget;
