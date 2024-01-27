import style from "./SubMyTestimonial.module.css";

const SubMyTestimonial = ({ foto }) => {
  return (
    <div className={style.DivAll}>
      <section className={style.SectionImg}>
        <img src={foto} alt="" />
      </section>
      <p className={style.SectionDescricao}>
        I recently had to jump on 10+ different calls across eight different
        countries to find the right owner.
      </p>
      <p className={style.SectionBarra}></p>
      <p className={style.SectionNameTestimonial}>Evren Shah</p>
      <p className={style.SectionSkill}>Designer</p>
    </div>
  );
};

export default SubMyTestimonial;
