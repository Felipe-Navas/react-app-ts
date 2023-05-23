import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyTextInput } from '../components'

import '../styles/styles.css'

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'The name has to be 3 characters or more')
            .max(15, 'The name has to be 15 characters maxium')
            .required('Required'),
          email: Yup.string().email('Email not valid').required('Required'),
          password1: Yup.string()
            .min(6, 'Must enter 6 character minium')
            .required('Required'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1')], 'Password mismatch')
            .required('Required'),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput
              label="Name"
              name="name"
              placeholder="Enter your name"
            />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />

            <MyTextInput
              label="Password"
              name="password1"
              type="password"
              placeholder="******"
            />

            <MyTextInput
              label="Confirm password"
              name="password2"
              type="password"
              placeholder="******"
            />

            <button type="submit">Register</button>

            <button type="button" onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
