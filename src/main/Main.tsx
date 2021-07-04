import s from './Main.module.css'
import { ReactTypical } from '@deadcoder0904/react-typical'

function Main() {

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.text}>
          <span>Hi there</span>
          <h1>I am Borat</h1>
          <p><ReactTypical
                steps={['Frontend Developer', 2000, 'and just a good guy 👍', 2000]}
                loop={Infinity}
                wrapper="p"
              />
          </p>
        </div>
        <div className={s.foto}><img src='https://media1.tenor.com/images/c52ad4746e8b45e15e91256d67830772/tenor.gif?itemid=18652331' width="100%" height="auto" alt="gif" /></div>
      </div>
    </div>
  )
}

export default Main