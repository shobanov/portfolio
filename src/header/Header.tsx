import Nav from '../nav/Nav'
import s from './Header.module.css'

function Header() {
  return (
    <div className={s.header}>
      <Nav />
    </div>
  )
}

export default Header