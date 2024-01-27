import style from "./MyTestimonial.module.css"
import SubMyTestimonial from "./SubMyTestimonial/SubMyTestimonial"

import foto from "../../assets/Ellipse 2664.svg"

const MyTestimonial = () => {
  return (
    <div className={style.DivALL}>
      <div className={style.SubDivAll}>
        <p className={style.SectionTitle}>My <span className={style.SubSectionTitle}>Testimonial</span></p>
        <section>
          <SubMyTestimonial foto={foto}/>
        </section>
      </div>
    </div>
  )
}

export default MyTestimonial