import style from "./About.module.css";

import ME from "../../assets/Group 1000015845.svg";

const About = () => {
  return (
    <div className={style.DivAll}>
      <img src={ME} alt=""  className={style.sectionAboutImg}/>
      <section className={style.sectionAboutME}>
        <p className={style.sectionAboutTitle}>
          About <span className={style.sectionAboutMe}>Me</span>
        </p>
        <section className={style.sectionAboutDescricao}>
          <p className={style.sectionAboutConterInfs}>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className={style.sectionAboutConterInfs}>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className={style.sectionAboutConterInfs}>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
        </section>
      </section>
    </div>
  );
};

export default About;
