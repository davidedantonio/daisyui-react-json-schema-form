import React from 'react';
import { Help } from './index';
import Form from 'react-bootstrap/Form';
import { UiSchema } from '@rjsf/core';
import { JSONSchema7 } from 'json-schema';

type FormLabelProps = {
  label: string,
  uiSchema: UiSchema
  schema: JSONSchema7,
  required: boolean,
  rawErrors: string[],
  id: string,
  options?: any
};

const FormLabel = ({
  label,
  uiSchema,
  schema,
  required,
  rawErrors,
  id,
  options
}: FormLabelProps) => {

  const uiSchemaTitle = uiSchema && uiSchema["ui:title"] ? uiSchema["ui:title"] : '';
  const uiHelp = uiSchema && uiSchema["ui:help"] ? uiSchema["ui:help"] : options?.help ? options.help : '';
  return (
    <div className="form-control w-full">
      <label className="label font-bold">
        <div className={`label-text ${rawErrors.length > 0 ? "text-error" : ""}`}>
          {(label || uiSchemaTitle || schema.title) && required ? "* " : null}
          {uiSchemaTitle || schema.title || label} { uiHelp ? (
          <sup className={'-top-4'}>
            <Help message={uiHelp} id={id} />
          </sup>
        ) : null }
        </div>
      </label>
    </div>
  );
}

export default FormLabel;
