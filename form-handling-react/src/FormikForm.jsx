import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short').required('Required'),
})

export default function FormikForm() {
  return (
    <div className="card">
      <h2>Formik Registration</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert('Registered (formik): ' + JSON.stringify(values, null, 2))
            setSubmitting(false)
            resetForm()
          }, 500)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>Name</label>
            <Field name="name" />
            <ErrorMessage name="name" component="div" className="error" />

            <label>Email</label>
            <Field name="email" />
            <ErrorMessage name="email" component="div" className="error" />

            <label>Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" className="error" />

            <button type="submit" disabled={isSubmitting}>Register</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
