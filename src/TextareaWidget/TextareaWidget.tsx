import React from "react";

import { WidgetProps } from "@rjsf/core";
import FormLabel from "../Utils/FormLabel";

type CustomWidgetProps = WidgetProps & {
  options: any;
};

const TextareaWidget = ({
  id,
  placeholder,
  value,
  required,
  disabled,
  autofocus,
  label,
  readonly,
  onBlur,
  onFocus,
  onChange,
  options,
  schema,
  rawErrors = [],
  uiSchema,
}: CustomWidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({
    target: { value },
  }: React.FocusEvent<HTMLTextAreaElement>) => onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLTextAreaElement>) => onFocus(id, value);

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
        <textarea
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          value={value}
          required={required}
          autoFocus={autofocus}
          rows={options.rows || 5}
          onChange={_onChange}
          onBlur={_onBlur}
          onFocus={_onFocus}
          className={`textarea textarea-bordered w-full ${rawErrors.length > 0 ? "border-error" : ""}`}
        ></textarea>
      </div>
    </>
  );
};

export default TextareaWidget;
