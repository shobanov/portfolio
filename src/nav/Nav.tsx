import s from './Nav.module.css'

function Nav() {
  return (
    <div className={s.wrapper}>
      <div className={s.nav}>
        <a href="">Main</a>
        <a href="">Skills</a>
        <a href="">Projects</a>
        <a href="">Contacts</a>
      </div>
    </div>
    
  )
}

export default Nav