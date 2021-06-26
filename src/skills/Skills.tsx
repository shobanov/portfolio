import s from '../skills/Skills.module.css'
import commonStyle from '../common/styles/Container.module.css'
import Skill from './skill/Skill'


function Skills() {
  return (
    <div className={s.skillsBlock}>
      <div className={`${commonStyle.container} ${s.skillsContainer}`}>
        <h2 className={s.title}>Skills</h2>
        <div className={s.skills}>
          <Skill title={'Js'} description={"Contrary to popular belief, Lorem Ipsum is not simply random text."} />
          <Skill title={'Css'} description={"Contrary to popular belief, Lorem Ipsum is not simply random text."} />
          <Skill title={'React'} description={"Contrary to popular belief, Lorem Ipsum is not simply random text."} />
        </div>
      </div>
    </div>
  )
}

export default Skills