const GeneralInfoForm = (props) => {

  return (
    <form>
      <label htmlFor="name">
        Full Name:
        <input type={'text'} id='name' />
      </label>
      <label htmlFor="address">
        Address:
        <input type={'text'} id='address' />
      </label>
      <label htmlFor="contact-number">
        Contact number:
        <input type={'text'} id={'contact-number'} inputMode={'tel'} />
      </label>
      <label htmlFor="email">
        Email address:
        <input type='email' id={'email'} />
      </label>
      <label htmlFor="gitHub">
        Github profile:
        <input type={'text'} id={'gitHub'} />
      </label>
      <label htmlFor="linkedin">
        LinkedIn profile:
        <input type={'text'} id={'linkedin'} />
      </label>
      <button type="submit">Save</button>
    </form>
  )
}

export default GeneralInfoForm