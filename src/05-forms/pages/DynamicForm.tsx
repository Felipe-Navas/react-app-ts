import { Formik, Form } from 'formik'
import { MySelectInput, MyTextInput } from '../components'
import * as Yup from 'yup'
import formJson from '../data/custom-form.json'

const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
  initialValues[input.name] = input.value

  if (!input.validations) continue

  let schema = Yup.string()

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('This field is mandatory')
    }

    if (rule.type === 'minLength') {
      schema = schema.min(
        (rule as any).value || 2,
        `Minumun of ${(rule as any).value || 2}  characters`
      )
    }

    if (rule.type === 'email') {
      schema = schema.email('Invalid email address')
    }
  }

  requiredFields[input.name] = schema
}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === 'input' || type === 'password' || type === 'email') {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                )
              } else if (type === 'select') {
                return (
                  <MySelectInput key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelectInput>
                )
              }

              throw new Error(`The type: ${type}, is not supported`)
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
