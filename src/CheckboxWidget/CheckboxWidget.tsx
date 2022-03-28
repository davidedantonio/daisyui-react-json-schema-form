import React from "react";

import { WidgetProps } from "@rjsf/core";
const CheckboxWidget = (props: WidgetProps) => {
  const {
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    schema,
    autofocus,
    onChange,
    onBlur,
    onFocus,
  } = props;

  const _onChange = ({
    target: { checked },
  }: React.FocusEvent<HTMLInputElement>) => onChange(checked);
  const _onBlur = ({
    target: { checked },
  }: React.FocusEvent<HTMLInputElement>) => onBlur(id, checked);
  const _onFocus = ({
    target: { checked },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, checked);

  const desc = label || schema.description;
  return (
    <div className="form-control">
      <label className="cursor-pointer flex justify-start items-center pt-2">
        <span className="label-text mr-3">{desc}</span>
        <input
          id={id}
          type="checkbox"
          className="toggle toggle-primary"
          required={required}
          disabled={disabled || readonly}
          autoFocus={autofocus}
          onChange={_onChange}
          onBlur={_onBlur}
          onFocus={_onFocus}
          checked={typeof value === "undefined" ? false : value}
        />
      </label>
    </div>
  );
};

export default CheckboxWidget;
