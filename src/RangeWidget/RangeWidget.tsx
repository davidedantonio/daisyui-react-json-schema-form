import React from "react";

import { utils } from "@rjsf/core";
import { WidgetProps } from "@rjsf/core";

const { rangeSpec } = utils;

const RangeWidget = ({
  value,
  readonly,
  disabled,
  onBlur,
  onFocus,
  options,
  schema,
  onChange,
  required,
  label,
  id,
  uiSchema,
}: WidgetProps) => {
  let sliderProps = { value, label, id, ...rangeSpec(schema) };

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
      <label className="label">
        <span className="label-text">
          {uiSchema["ui:title"] || schema.title || label}
          {(label || uiSchema["ui:title"] || schema.title) && required ? "*" : null}
        </span>
      </label>
      <input
        type="range"
        required={required}
        disabled={disabled}
        readOnly={readonly}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        className="range range-primary"
        {...sliderProps}
      />
      <label className="label">
        <span className="label-text-alt">{value}</span>
      </label>
    </div>
  );
};

export default RangeWidget;
