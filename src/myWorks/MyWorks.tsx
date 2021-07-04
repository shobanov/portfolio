import s from './MyWorks.module.css'
import Work from './work/Work'

function MyWorks() {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h2 className={s.title}>My works</h2>
        <div className={s.myWorksContainer}>
          <Work title={'Social network'} description={"Contrary to popular belief, Lorem Ipsum is not simply"} />
          <Work title={'Todolist'} description={"Contrary to popular belief, Lorem Ipsum is not simply"} />
          <Work title={'Counter'} description={"Contrary to popular belief, Lorem Ipsum is not simply"} />
        </div>
      </div>
    </div>
  )
}

export default MyWorks