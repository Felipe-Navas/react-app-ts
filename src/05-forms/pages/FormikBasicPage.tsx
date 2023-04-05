import '../styles/styles.css'

export const FormikBasicPage = () => {
  return (
    <div>
      <h1>Formik Basic Page</h1>

      <form noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" />
        <span>First name is required</span>
        <br/>

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" />
        <span>Last name is required</span>
        <br/>

        <label htmlFor="email">Email Addres</label>
        <input type="email" name="email" />
        <span>Email is required</span>
        <span>Check for an valid email format</span>
        <br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
