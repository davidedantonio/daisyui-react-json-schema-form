import React from "react";

import ArrayFieldTemplate from "../ArrayFieldTemplate";
import ErrorList from "../ErrorList";
import Fields from "../Fields";
import FieldTemplate from "../FieldTemplate";
import ObjectFieldTemplate from "../ObjectFieldTemplate";
import Widgets from "../Widgets";

import { ThemeProps } from "@rjsf/core";
import { utils } from "@rjsf/core";

const { getDefaultRegistry } = utils;
const { fields, widgets } = getDefaultRegistry();

const DefaultChildren = () => (
  <div>
    <button className="btn btn-primary mt-3">
      Submit
    </button>
  </div>
);

const Theme: ThemeProps = {
  children: <DefaultChildren />,
  FieldTemplate,
  ArrayFieldTemplate,
  fields: { ...fields, ...Fields },
  ObjectFieldTemplate,
  widgets: { ...widgets, ...Widgets },
  ErrorList,
};

export default Theme;
