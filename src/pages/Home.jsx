import About from "../components/About/About"
import Contc from "../components/Contc/Contc"
import Intro from "../components/Intro/Intro"
import MyExperience from "../components/MyExperience/MyExperience"
import MyProjects from "../components/MyProjects/MyProjects"
import MySkills from "../components/MySkills/MySkills"
import MyTestimonial from "../components/MyTestimonial/MyTestimonial"
import NavBar from "../components/NavBar/NavBar"

import style from "./Home.module.css"

const Home = () => {
  return (
    <div className={style.DivAll}>
      <NavBar />
      <Intro />
      <MySkills />
      <MyExperience />
      <About />
      <MyProjects />
      <MyTestimonial />
      <Contc />
    </div>
  )
}

export default Home