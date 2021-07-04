import s from './Work.module.css'


type WorkPropsType = {
  title: string
  description: string
}

function Work(props: WorkPropsType) {
  return (
    <div className={s.work}>
      <div className={s.imageBlock}>
        <button className={s.button}>View</button>
      </div>
      <h3>{props.title}</h3>
      <span className={s.description}>{props.description}</span>
    </div>
  )
}

export default Work