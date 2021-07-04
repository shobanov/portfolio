import s from './Footer.module.css'

function Footer() {
  return (
    <div className={s.wrapper}>
        <h3 className={s.title}>Borat Sagdiyev</h3>
      <div className={s.container}>
        <div className={s.footer}>
          <div>
            <a href="#">Facebook</a>
          </div>
          <div>
            <a href="#">Linkedin</a>
          </div>
          <div>
            <a href="#">Pinterest</a>
          </div>
          <div>
            <a href="#">Github</a>
          </div>
        </div>
      </div>
      <p className={s.copyright}>2019 beingeorge, All Rights Reserved.</p>
    </div>
  )
}
export default Footer