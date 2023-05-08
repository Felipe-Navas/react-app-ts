import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyTextInput, MySelectInput, MyCheckBox } from '../components'
import '../styles/styles.css'

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          terms: Yup.boolean().oneOf(
            [true],
            'Must to acept terms and conditions'
          ),
          jobType: Yup.string().required('Required'),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="First Name"
            />
            <br />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
            />
            <br />

            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="Email"
              type="email"
            />
            <br />

            <MySelectInput label="Job Type" name="jobType">
              <option value="">Select Job Type</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
            </MySelectInput>
            <br />

            <MyCheckBox label="Terms and conditions" name="terms" />
            <br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
