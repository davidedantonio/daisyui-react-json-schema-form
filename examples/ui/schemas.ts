export default {
  simple: {
    title: 'Simple',
    jsonSchema: {"title":"A registration form","description":"A simple form example.","type":"object","required":["firstName","lastName"],"properties":{"firstName":{"type":"string","title":"First name","default":"Chuck"},"lastName":{"type":"string","title":"Last name"},"telephone":{"type":"string","title":"Telephone","minLength":10}}},
    uiSchema: {"firstName":{"ui:autofocus":true,"ui:emptyValue":"","ui:autocomplete":"family-name"},"lastName":{"ui:emptyValue":"","ui:autocomplete":"given-name"},"age":{"ui:widget":"updown","ui:title":"Age of person","ui:description":"(earthian year)"},"bio":{"ui:widget":"textarea"},"password":{"ui:widget":"password","ui:help":"Hint: Make it strong!"},"date":{"ui:widget":"alt-datetime"},"telephone":{"ui:options":{"inputType":"tel"}}},
    formData: {"firstName":"Chuck","age":75,"bio":"Roundhouse kicking asses since 1940","password":"noneed"}
  },
  nested: {
    title: 'Nested',
    jsonSchema: {"title":"A list of tasks","type":"object","required":["title"],"properties":{"title":{"type":"string","title":"Task list title"},"tasks":{"type":"array","title":"Tasks","items":{"type":"object","required":["title"],"properties":{"title":{"type":"string","title":"Title","description":"A sample title"},"details":{"type":"string","title":"Task details","description":"Enter the task details"},"done":{"type":"boolean","title":"Done?","default":false}}}}}},
    uiSchema: {"tasks":{"items":{"details":{"ui:widget":"textarea"}}}},
    formData: {"title":"My current tasks","tasks":[{"title":"My first task","details":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","done":true},{"title":"My second task","details":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur","done":false}]}
  },
  arrays: {
    title: 'Arrays',
    jsonSchema: {"definitions":{"Thing":{"type":"object","properties":{"name":{"type":"string","default":"Default name"}}}},"type":"object","properties":{"listOfStrings":{"type":"array","title":"A list of strings","items":{"type":"string","default":"bazinga"}},"multipleChoicesList":{"type":"array","title":"A multiple choices list","items":{"type":"string","enum":["foo","bar","fuzz","qux"]},"uniqueItems":true},"fixedItemsList":{"type":"array","title":"A list of fixed items","items":[{"title":"A string value","type":"string","default":"lorem ipsum"},{"title":"a boolean value","type":"boolean"}],"additionalItems":{"title":"Additional item","type":"number"}},"minItemsList":{"type":"array","title":"A list with a minimal number of items","minItems":3,"items":{"$ref":"#/definitions/Thing"}},"defaultsAndMinItems":{"type":"array","title":"List and item level defaults","minItems":5,"default":["carp","trout","bream"],"items":{"type":"string","default":"unidentified"}},"nestedList":{"type":"array","title":"Nested list","items":{"type":"array","title":"Inner list","items":{"type":"string","default":"lorem ipsum"}}},"unorderable":{"title":"Unorderable items","type":"array","items":{"type":"string","default":"lorem ipsum"}},"unremovable":{"title":"Unremovable items","type":"array","items":{"type":"string","default":"lorem ipsum"}},"noToolbar":{"title":"No add, remove and order buttons","type":"array","items":{"type":"string","default":"lorem ipsum"}},"fixedNoToolbar":{"title":"Fixed array without buttons","type":"array","items":[{"title":"A number","type":"number","default":42},{"title":"A boolean","type":"boolean","default":false}],"additionalItems":{"title":"A string","type":"string","default":"lorem ipsum"}}}},
    uiSchema: {"listOfStrings":{"items":{"ui:emptyValue":""}},"multipleChoicesList":{"ui:widget":"checkboxes"},"fixedItemsList":{"items":[{"ui:widget":"textarea"},{"ui:widget":"select"}],"additionalItems":{"ui:widget":"updown"}},"unorderable":{"ui:options":{"orderable":false}},"unremovable":{"ui:options":{"removable":false}},"noToolbar":{"ui:options":{"addable":false,"orderable":false,"removable":false}},"fixedNoToolbar":{"ui:options":{"addable":false,"orderable":false,"removable":false}}},
    formData: {"listOfStrings":["foo","bar"],"multipleChoicesList":["foo","bar"],"fixedItemsList":["Some text",true,123],"minItemsList":[{"name":"Default name"},{"name":"Default name"},{"name":"Default name"}],"defaultsAndMinItems":["carp","trout","bream","unidentified","unidentified"],"nestedList":[["lorem","ipsum"],["dolor"]],"unorderable":["one","two"],"unremovable":["one","two"],"noToolbar":["one","two"],"fixedNoToolbar":[42,true,"additional item one","additional item two"]},
  },
  numbers: {
    title: 'Numbers',
    jsonSchema: {"type":"object","title":"Number fields & widgets","properties":{"number":{"title":"Number","type":"number"},"integer":{"title":"Integer","type":"integer"},"numberEnum":{"type":"number","title":"Number enum","enum":[1,2,3]},"numberEnumRadio":{"type":"number","title":"Number enum","enum":[1,2,3]},"integerRange":{"title":"Integer range","type":"integer","minimum":42,"maximum":100},"integerRangeSteps":{"title":"Integer range (by 10)","type":"integer","minimum":50,"maximum":100,"multipleOf":10}}},
    uiSchema: {"integer":{"ui:widget":"updown"},"numberEnumRadio":{"ui:widget":"radio","ui:options":{"inline":true}},"integerRange":{"ui:widget":"range"},"integerRangeSteps":{"ui:widget":"range"}},
    formData: {"number":3.14,"integer":42,"numberEnum":2,"integerRange":42,"integerRangeSteps":80}
  },
  widgets: {
    title: 'Widgets',
    jsonSchema: {"title":"Widgets","type":"object","properties":{"stringFormats":{"type":"object","title":"String formats","properties":{"email":{"type":"string","format":"email"},"uri":{"type":"string","format":"uri"}}},"boolean":{"type":"object","title":"Boolean field","properties":{"default":{"type":"boolean","title":"checkbox (default)","description":"This is the checkbox-description"},"radio":{"type":"boolean","title":"radio buttons","description":"This is the radio-description"},"select":{"type":"boolean","title":"select box","description":"This is the select-description"}}},"string":{"type":"object","title":"String field","properties":{"default":{"type":"string","title":"text input (default)"},"textarea":{"type":"string","title":"textarea"},"placeholder":{"type":"string"},"color":{"type":"string","title":"color picker","default":"#151ce6"}}},"secret":{"type":"string","default":"I'm a hidden string."},"disabled":{"type":"string","title":"A disabled field","default":"I am disabled."},"readonly":{"type":"string","title":"A readonly field","default":"I am read-only."},"readonly2":{"type":"string","title":"Another readonly field","default":"I am also read-only.","readOnly":true},"widgetOptions":{"title":"Custom widget with options","type":"string","default":"I am yellow"},"selectWidgetOptions":{"title":"Custom select widget with options","type":"string","enum":["foo","bar"],"enumNames":["Foo","Bar"]}}},
    uiSchema: {"boolean":{"radio":{"ui:widget":"radio"},"select":{"ui:widget":"select"}},"string":{"textarea":{"ui:widget":"textarea","ui:options":{"rows":5}},"placeholder":{"ui:placeholder":"This is a placeholder"},"color":{"ui:widget":"color"}},"secret":{"ui:widget":"hidden"},"disabled":{"ui:disabled":true},"readonly":{"ui:readonly":true},"widgetOptions":{"ui:options":{"backgroundColor":"yellow"}},"selectWidgetOptions":{"ui:options":{"backgroundColor":"pink"}}},
    formData: {"stringFormats":{"email":"chuck@norris.net","uri":"http://chucknorris.com/"},"boolean":{"default":true,"radio":true,"select":true},"string":{"color":"#151ce6","default":"Hello...","textarea":"... World"},"secret":"I'm a hidden string.","disabled":"I am disabled.","readonly":"I am read-only.","readonly2":"I am also read-only.","widgetOptions":"I am yellow"}
  },
  ordering: {
    title: 'Ordering',
    jsonSchema: {"title":"A registration form","type":"object","required":["firstName","lastName"],"properties":{"password":{"type":"string","title":"Password"},"lastName":{"type":"string","title":"Last name"},"bio":{"type":"string","title":"Bio"},"firstName":{"type":"string","title":"First name"},"age":{"type":"integer","title":"Age"}}},
    uiSchema: {"ui:order":["firstName","lastName","*","password"],"age":{"ui:widget":"updown"},"bio":{"ui:widget":"textarea"},"password":{"ui:widget":"password"}},
    formData: {"firstName":"Chuck","lastName":"Norris","age":75,"bio":"Roundhouse kicking asses since 1940","password":"noneed"}
  },
  references: {
    title: 'References',
    jsonSchema: {"definitions":{"address":{"type":"object","properties":{"street_address":{"type":"string"},"city":{"type":"string"},"state":{"type":"string"}},"required":["street_address","city","state"]},"node":{"type":"object","properties":{"name":{"type":"string"},"children":{"type":"array","items":{"$ref":"#/definitions/node"}}}}},"type":"object","properties":{"billing_address":{"title":"Billing address","$ref":"#/definitions/address"},"shipping_address":{"title":"Shipping address","$ref":"#/definitions/address"},"tree":{"title":"Recursive references","$ref":"#/definitions/node"}}},
    uiSchema: {"ui:order":["shipping_address","billing_address","tree"]},
    formData: {"billing_address":{"street_address":"21, Jump Street","city":"Babel","state":"Neverland"},"shipping_address":{"street_address":"221B, Baker Street","city":"London","state":"N/A"},"tree":{"name":"root","children":[{"name":"leaf"}]}}
  },
  errors: {
    title: 'Errors',
    jsonSchema: {"title":"Contextualized errors","type":"object","properties":{"firstName":{"type":"string","title":"First name","minLength":8,"pattern":"\\d+"},"active":{"type":"boolean","title":"Active"},"skills":{"type":"array","items":{"type":"string","minLength":5}},"multipleChoicesList":{"type":"array","title":"Pick max two items","uniqueItems":true,"maxItems":2,"items":{"type":"string","enum":["foo","bar","fuzz"]}}}},
    uiSchema: {},
    formData: {"firstName":"Chuck","active":"wrong","skills":["karate","budo","aikido"],"multipleChoicesList":["foo","bar","fuzz"]}
  },
  examples: {
    title: 'Examples',
    jsonSchema: {"title":"Examples","description":"A text field with example values.","type":"object","properties":{"browser":{"type":"string","title":"Browser","examples":["Firefox","Chrome","Opera","Vivaldi","Safari"]}}},
    uiSchema: {},
    formData: {"firstName":"Chuck","active":"wrong","skills":["karate","budo","aikido"],"multipleChoicesList":["foo","bar","fuzz"],"browser":"Chrome"}
  },
  large: {
    title: 'Large',
    jsonSchema: {"definitions":{"largeEnum":{"type":"string","enum":["option #0","option #1","option #2","option #3","option #4","option #5","option #6","option #7","option #8","option #9","option #10","option #11","option #12","option #13","option #14","option #15","option #16","option #17","option #18","option #19","option #20","option #21","option #22","option #23","option #24","option #25","option #26","option #27","option #28","option #29","option #30","option #31","option #32","option #33","option #34","option #35","option #36","option #37","option #38","option #39","option #40","option #41","option #42","option #43","option #44","option #45","option #46","option #47","option #48","option #49","option #50","option #51","option #52","option #53","option #54","option #55","option #56","option #57","option #58","option #59","option #60","option #61","option #62","option #63","option #64","option #65","option #66","option #67","option #68","option #69","option #70","option #71","option #72","option #73","option #74","option #75","option #76","option #77","option #78","option #79","option #80","option #81","option #82","option #83","option #84","option #85","option #86","option #87","option #88","option #89","option #90","option #91","option #92","option #93","option #94","option #95","option #96","option #97","option #98","option #99"]}},"title":"A rather large form","type":"object","properties":{"string":{"type":"string","title":"Some string"},"choice1":{"$ref":"#/definitions/largeEnum"},"choice2":{"$ref":"#/definitions/largeEnum"},"choice3":{"$ref":"#/definitions/largeEnum"},"choice4":{"$ref":"#/definitions/largeEnum"},"choice5":{"$ref":"#/definitions/largeEnum"},"choice6":{"$ref":"#/definitions/largeEnum"},"choice7":{"$ref":"#/definitions/largeEnum"},"choice8":{"$ref":"#/definitions/largeEnum"},"choice9":{"$ref":"#/definitions/largeEnum"},"choice10":{"$ref":"#/definitions/largeEnum"}}},
    uiSchema: {"choice1": {"ui:placeholder": "Choose one"}},
    formData: {}
  },
  dateTime: {
    title: 'Date & Time',
    jsonSchema: {"title":"Date and time widgets","type":"object","properties":{"native":{"title":"Native","description":"May not work on some browsers, notably Firefox Desktop and IE.","type":"object","properties":{"datetime":{"type":"string","format":"date-time"},"date":{"type":"string","format":"date"}}},"alternative":{"title":"Alternative","description":"These work on most platforms.","type":"object","properties":{"alt-datetime":{"type":"string","format":"date-time"},"alt-date":{"type":"string","format":"date"}}}}},
    uiSchema: {"alternative":{"alt-datetime":{"ui:widget":"alt-datetime","ui:options":{"yearsRange":[1980,2030]}},"alt-date":{"ui:widget":"alt-date","ui:options":{"yearsRange":[1980,2030]}}}},
    formData: {"native": {},"alternative": {}}
  },
  validation: {
    title: 'Validation',
    jsonSchema: {"title":"Custom validation","description":"This form defines custom validation rules checking that the two passwords match.","type":"object","properties":{"pass1":{"title":"Password","type":"string","minLength":3},"pass2":{"title":"Repeat password","type":"string","minLength":3},"age":{"title":"Age","type":"number","minimum":18}}},
    uiSchema: {"pass1":{"ui:widget":"password"},"pass2":{"ui:widget":"password"}},
    formData: {},
    validate: function validate(formData, errors) {
      if (formData.pass1 !== formData.pass2) {
        errors.pass2.addError("Passwords don't match");
      }
      return errors;
    }
  },
  files: {
    title: 'Files',
    jsonSchema: {"title":"Files","type":"object","properties":{"file":{"type":"string","format":"data-url","title":"Single file"},"files":{"type":"array","title":"Multiple files","items":{"type":"string","format":"data-url"}},"filesAccept":{"type":"string","format":"data-url","title":"Single File with Accept attribute"}}},
    uiSchema: {"filesAccept":{"ui:options":{"accept":".pdf"}}},
    formData: {}
  },
  single: {
    title: 'Single',
    jsonSchema: {"title": "A single-field form","type": "string"},
    uiSchema: {},
    formData: "initial value"
  },
  customArray: {
    title: 'Custom Array',
    jsonSchema: {"title":"Custom array of strings","type":"array","items":{"type":"string"}},
    formData: ["react","jsonschema","form"],
    uiSchema: {}
  },
  customObject: {
    title: 'Custom Object',
    jsonSchema: {"title":"A registration form","description":"This is the same as the simple form, but it is rendered as a bootstrap grid. Try shrinking the browser window to see it in action.","type":"object","required":["firstName","lastName"],"properties":{"firstName":{"type":"string","title":"First name"},"lastName":{"type":"string","title":"Last name"},"age":{"type":"integer","title":"Age"},"bio":{"type":"string","title":"Bio"},"password":{"type":"string","title":"Password","minLength":3},"telephone":{"type":"string","title":"Telephone","minLength":10}}},
    uiSchema: {},
    formData: {"firstName":"Chuck","lastName":"Norris","age":75,"bio":"Roundhouse kicking asses since 1940","password":"noneed"}
  },
  propertyDeps: {
    title: 'Property dependencies',
    jsonSchema: {"title":"Property dependencies","description":"These samples are best viewed without live validation.","type":"object","properties":{"unidirectional":{"title":"Unidirectional","src":"https://spacetelescope.github.io/understanding-json-schema/reference/object.html#dependencies","type":"object","properties":{"name":{"type":"string"},"credit_card":{"type":"number"},"billing_address":{"type":"string"}},"required":["name"],"dependencies":{"credit_card":["billing_address"]}},"bidirectional":{"title":"Bidirectional","src":"https://spacetelescope.github.io/understanding-json-schema/reference/object.html#dependencies","description":"Dependencies are not bidirectional, you can, of course, define the bidirectional dependencies explicitly.","type":"object","properties":{"name":{"type":"string"},"credit_card":{"type":"number"},"billing_address":{"type":"string"}},"required":["name"],"dependencies":{"credit_card":["billing_address"],"billing_address":["credit_card"]}}}},
    uiSchema: {"unidirectional":{"credit_card":{"ui:help":"If you enter anything here then billing_address will become required."},"billing_address":{"ui:help":"It’s okay to have a billing address without a credit card number."}},"bidirectional":{"credit_card":{"ui:help":"If you enter anything here then billing_address will become required."},"billing_address":{"ui:help":"If you enter anything here then credit_card will become required."}}},
    formData: {"unidirectional":{"name":"Tim"},"bidirectional":{"name":"Jill"}}
  },
  schemaDeps: {
    title: 'Schema dependencies',
    jsonSchema: {"title":"Schema dependencies","description":"These samples are best viewed without live validation.","type":"object","properties":{"simple":{"src":"https://spacetelescope.github.io/understanding-json-schema/reference/object.html#dependencies","title":"Simple","type":"object","properties":{"name":{"type":"string"},"credit_card":{"type":"number"}},"required":["name"],"dependencies":{"credit_card":{"properties":{"billing_address":{"type":"string"}},"required":["billing_address"]}}},"conditional":{"title":"Conditional","$ref":"#/definitions/person"},"arrayOfConditionals":{"title":"Array of conditionals","type":"array","items":{"$ref":"#/definitions/person"}},"fixedArrayOfConditionals":{"title":"Fixed array of conditionals","type":"array","items":[{"title":"Primary person","$ref":"#/definitions/person"}],"additionalItems":{"title":"Additional person","$ref":"#/definitions/person"}}},"definitions":{"person":{"title":"Person","type":"object","properties":{"Do you have any pets?":{"type":"string","enum":["No","Yes: One","Yes: More than one"],"default":"No"}},"required":["Do you have any pets?"],"dependencies":{"Do you have any pets?":{"oneOf":[{"properties":{"Do you have any pets?":{"enum":["No"]}}},{"properties":{"Do you have any pets?":{"enum":["Yes: One"]},"How old is your pet?":{"type":"number"}},"required":["How old is your pet?"]},{"properties":{"Do you have any pets?":{"enum":["Yes: More than one"]},"Do you want to get rid of any?":{"type":"boolean"}},"required":["Do you want to get rid of any?"]}]}}}}},
    uiSchema: {"simple":{"credit_card":{"ui:help":"If you enter anything here then billing_address will be dynamically added to the form."}},"conditional":{"Do you want to get rid of any?":{"ui:widget":"radio"}},"arrayOfConditionals":{"items":{"Do you want to get rid of any?":{"ui:widget":"radio"}}},"fixedArrayOfConditionals":{"items":{"Do you want to get rid of any?":{"ui:widget":"radio"}},"additionalItems":{"Do you want to get rid of any?":{"ui:widget":"radio"}}}},
    formData: {"simple":{"name":"Randy"},"conditional":{"Do you have any pets?":"No"},"arrayOfConditionals":[{"Do you have any pets?":"Yes: One","How old is your pet?":6},{"Do you have any pets?":"Yes: More than one","Do you want to get rid of any?":false}],"fixedArrayOfConditionals":[{"Do you have any pets?":"No"},{"Do you have any pets?":"Yes: One","How old is your pet?":6},{"Do you have any pets?":"Yes: More than one","Do you want to get rid of any?":true}]}
  },
  additionalProps: {
    title: 'Additional Properties',
    jsonSchema: {"title":"A customizable registration form","description":"A simple form with additional properties example.","type":"object","required":["firstName","lastName"],"additionalProperties":{"type":"string"},"properties":{"firstName":{"type":"string","title":"First name"},"lastName":{"type":"string","title":"Last name"}}},
    uiSchema: {"firstName":{"ui:autofocus":true,"ui:emptyValue":""}},
    formData: {"firstName":"Chuck","lastName":"Norris","assKickCount":"infinity"}
  },
  anyOf: {
    title: 'Any Of',
    jsonSchema: {"type":"object","properties":{"age":{"type":"integer","title":"Age"},"items":{"type":"array","items":{"type":"object","anyOf":[{"properties":{"foo":{"type":"string"}}},{"properties":{"bar":{"type":"string"}}}]}}},"anyOf":[{"title":"First method of identification","properties":{"firstName":{"type":"string","title":"First name","default":"Chuck"},"lastName":{"type":"string","title":"Last name"}}},{"title":"Second method of identification","properties":{"idCode":{"type":"string","title":"ID code"}}}]},
    uiSchema: {},
    formData: {"firstName": "Chuck"}
  },
  oneOf: {
    title: 'One Of',
    jsonSchema: {"type":"object","oneOf":[{"properties":{"lorem":{"type":"string"}},"required":["lorem"]},{"properties":{"ipsum":{"type":"string"}},"required":["ipsum"]}]},
    formData: {},
    uiSchema: {}
  },
  allOf: {
    title: 'All Of',
    jsonSchema: {"type":"object","allOf":[{"properties":{"lorem":{"type":["string","boolean"],"default":true}}},{"properties":{"lorem":{"type":"boolean"},"ipsum":{"type":"string"}}}]},
    uiSchema: {},
    formData: {"lorem": true}
  },
  ifThenElse: {
    title: 'If Then Else',
    jsonSchema: {"type":"object","properties":{"animal":{"enum":["Cat","Fish"]}},"allOf":[{"if":{"properties":{"animal":{"const":"Cat"}}},"then":{"properties":{"food":{"type":"string","enum":["meat","grass","fish"]}},"required":["food"]}},{"if":{"properties":{"animal":{"const":"Fish"}}},"then":{"properties":{"food":{"type":"string","enum":["insect","worms"]},"water":{"type":"string","enum":["lake","sea"]}},"required":["food","water"]}},{"required":["animal"]}]},
    uiSchema: {},
    formData: {}
  },
  nullFields: {
    title: 'Null fields',
    jsonSchema: {"title":"Null field example","description":"A short form with a null field","type":"object","required":["firstName"],"properties":{"helpText":{"title":"A null field","description":"Null fields like this are great for adding extra information","type":"null"},"firstName":{"type":"string","title":"A regular string field","default":"Chuck"}}},
    uiSchema: {"firstName":{"ui:autofocus":true,"ui:emptyValue":""}},
    formData: {"firstName": "Chuck"}
  },
  nullable: {
    title: 'Nullable',
    jsonSchema: {"title":"A registration form (nullable)","description":"A simple form example using nullable types","type":"object","required":["firstName","lastName"],"properties":{"firstName":{"type":"string","title":"First name","default":"Chuck"},"lastName":{"type":"string","title":"Last name"},"age":{"type":["integer","null"],"title":"Age"},"bio":{"type":["string","null"],"title":"Bio"},"password":{"type":"string","title":"Password","minLength":3},"telephone":{"type":"string","title":"Telephone","minLength":10}}},
    uiSchema: {"firstName":{"ui:autofocus":true,"ui:emptyValue":""},"age":{"ui:widget":"updown","ui:title":"Age of person","ui:description":"(earthian year)","ui:emptyValue":null},"bio":{"ui:widget":"textarea","ui:placeholder":"Leaving this field empty will cause formData property to be `null`","ui:emptyValue":null},"password":{"ui:widget":"password","ui:help":"Hint: Make it strong!"},"date":{"ui:widget":"alt-datetime"},"telephone":{"ui:options":{"inputType":"tel"}}},
    formData: {"firstName":"Chuck","lastName":"Norris","age":75,"bio":null,"password":"noneed"}
  },
  errorSchema: {
    title: 'Error Schema',
    jsonSchema: {"title":"A registration form","description":"A simple form example.","type":"object","required":["firstName","lastName"],"properties":{"firstName":{"type":"string","title":"First name","default":"Chuck"},"lastName":{"type":"string","title":"Last name"},"age":{"type":"integer","title":"Age"},"bio":{"type":"string","title":"Bio"},"password":{"type":"string","title":"Password","minLength":3},"telephone":{"type":"string","title":"Telephone","minLength":10}}},
    uiSchema: {"firstName":{"ui:autofocus":true,"ui:emptyValue":""},"age":{"ui:widget":"updown","ui:title":"Age of person","ui:description":"(earthian year)"},"bio":{"ui:widget":"textarea"},"password":{"ui:widget":"password","ui:help":"Hint: Make it strong!"},"date":{"ui:widget":"alt-datetime"},"telephone":{"ui:options":{"inputType":"tel"}}},
    formData: {"firstName":"Chuck","lastName":"Norris","age":75,"bio":"Roundhouse kicking asses since 1940","password":"noneed"}
  },
  defaults: {
    title: 'Defaults',
    jsonSchema: {"title":"Schema default properties","type":"object","properties":{"valuesInFormData":{"title":"Values in form data","$ref":"#/definitions/defaultsExample"},"noValuesInFormData":{"title":"No values in form data","$ref":"#/definitions/defaultsExample"}},"definitions":{"defaultsExample":{"type":"object","properties":{"scalar":{"title":"Scalar","type":"string","default":"scalar default"},"array":{"title":"Array","type":"array","items":{"type":"object","properties":{"nested":{"title":"Nested array","type":"string","default":"nested array default"}}}},"object":{"title":"Object","type":"object","properties":{"nested":{"title":"Nested object","type":"string","default":"nested object default"}}}}}}},
    uiSchema: {},
    formData: {"valuesInFormData":{"scalar":"value","array":[{"nested":"nested array value"}],"object":{"nested":"nested object value"}},"noValuesInFormData":{"scalar":"scalar default","array":[{"nested":"nested array default"},{"nested":"nested array default"}],"object":{"nested":"nested object default"}}}
  }
}