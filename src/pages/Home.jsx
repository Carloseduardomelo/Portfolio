import Intro from "../components/Intro/Intro"
import MyExperience from "../components/MyExperience/MyExperience"
import MySkills from "../components/MySkills/MySkills"
import NavBar from "../components/NavBar/NavBar"

import style from "./Home.module.css"

const Home = () => {
  return (
    <div className={style.DivAll}>
      <NavBar />
      <Intro />
      <MySkills />
      <MyExperience />
    </div>
  )
}

export default Home