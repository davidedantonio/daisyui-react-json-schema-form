import * as React from 'react'
import Form from '../../dist';
import schemas from './schemas';
import {useState} from "react";

const App = () => {
  const [schema, setSchema] = useState(schemas.simple);

  return (
    <React.Fragment>
      <select
        className={'select w-full w-max-sm select-bordered'}
        onChange={(e) => setSchema(schemas[e.target.value])}>
        {Object.keys(schemas).map(item => {
          return (<option key={item} selected={schema === schemas[item].title} value={item}>{schemas[item].title}</option>)
        })}
      </select>
      <Form
        noHtml5Validate={true}
        schema={schema.jsonSchema}
        uiSchema={schema.uiSchema}
        formData={schema.formData}
        validate={schema.validate || null}
      />
    </React.Fragment>
  )
}

export default App;