import Intro from "../components/Intro/Intro"
import MySkills from "../components/MySkills/MySkills"
import NavBar from "../components/NavBar/NavBar"

import style from "./Home.module.css"

const Home = () => {
  return (
    <div className={style.DivAll}>
      <NavBar />
      <Intro />
      <MySkills />
    </div>
  )
}

export default Home