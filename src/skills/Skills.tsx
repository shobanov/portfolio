import s from '../skills/Skills.module.css'
import Skill from './skill/Skill'

function Skills() {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h2 className={s.title}>Skills</h2>
        <div className={s.skillsContainer}>
          <Skill title={'Js'} description={"Contrary to popular belief, Lorem Ipsum is not simply random text."} />
          <Skill title={'Css'} description={"Contrary to popular belief, Lorem Ipsum is not simply random text."} />
          <Skill title={'React'} description={"Contrary to popular belief, Lorem Ipsum is not simply random text."} />
        </div>
      </div>
    </div>
  )
}

export default Skills