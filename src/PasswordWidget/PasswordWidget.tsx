import React from "react";

import { WidgetProps } from "@rjsf/core";
import { FormLabel } from "../Utils";

const PasswordWidget = ({
  id,
  placeholder,
  required,
  readonly,
  disabled,
  value,
  label,
  onFocus,
  onBlur,
  onChange,
  options,
  autofocus,
  schema,
  rawErrors = [],
  uiSchema
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
      <input
        id={id}
        placeholder={placeholder}
        autoFocus={autofocus}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        list={schema.examples ? `examples_${id}` : undefined}
        type="password"
        value={value || value === 0 ? value : ""}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        className={`input input-bordered w-full ${rawErrors.length > 0 ? "input-error" : ""}`}
      />
    </div>
  );
};

export default PasswordWidget;
