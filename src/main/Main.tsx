import s from './Main.module.css'
import commonStyle from '../common/styles/Container.module.css'


function Main() {
  return (
    <div className={s.mainBlock}>
      <div className={commonStyle.container}>
        <div className={s.text}>
          <span>Hi there</span>
          <h1>I am Batman</h1>
          <p>Frontend Developer</p>
        </div>
        <div className={s.foto}><img src="https://humor.fm/upload/post/2020/06/16/1722561/gallery/9439zadrot-11288291-orig.jpg" width="300" height="400" alt="foto" /></div>
      </div>
    </div>
  )
}

export default Main