import s from './Contacts.module.css'

function Contacts() {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.title}>
          <h2>Contact</h2>
        </div>
        <form className={s.form}>
            <div className={s.inputForm}>
              <input type="text" id="name" placeholder="Name"/>
            </div>
            <div className={s.inputForm}>
              <input type="email" id="email" placeholder="E-mail"/>
            </div>
            <div className={s.textareaForm}>
              <textarea placeholder="Your message"></textarea>
            </div>
            <div className={s.buttonForm}>
              <button type="submit">Send Message</button>
            </div>
        </form>
      </div>
    </div>
    
  )
}
export default Contacts