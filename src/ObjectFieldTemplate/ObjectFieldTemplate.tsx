import React from "react";

import { ObjectFieldTemplateProps } from "@rjsf/core";

const ObjectFieldTemplate = ({
  DescriptionField,
  description,
  TitleField,
  title,
  properties,
  required,
  uiSchema,
  idSchema,
}: ObjectFieldTemplateProps) => {
  return (
    <>
      {(uiSchema["ui:title"] || title) && (
        <TitleField
          id={`${idSchema.$id}-title`}
          title={uiSchema["ui:title"] || title}
          required={required}
        />
      )}
      {description && (
        <DescriptionField
          id={`${idSchema.$id}-description`}
          description={description}
        />
      )}
      <div className={'grid grid-cols-12 gap-4'}>
        {properties.map((element: any, index: number) => (
          <div
            key={index}
            className={element.hidden ? "d-none" : "col-span-12"}>
            {element.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default ObjectFieldTemplate;
