import { useForm } from "react-hook-form";

import style from "./Contc.module.css";
import style01 from "../Intro/Intro.module.css"

const Contc = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div className={style.DivALl}>
      <div className={style.SubDivAll}>
        <section className={style.SectionInput}>
          <section className={style.SectionInputsHub}>
            <input
              type="text"
              id="Name"
              {...register("name", { required: "escreva" })}
              placeholder="your name"
            />
            {errors.name?.message}
          </section>
          <section className={style.SectionInputsHub}>
            <input
              type="email"
              id="Email"
              {...register("email")}
              placeholder="Email"
            />
          </section>
          <section className={style.SectionInputsHub}>
            <input
              type="url"
              id="WebSite"
              {...register("Website")}
              placeholder="Your website (If exists)"
            />
          </section>
          <section className={style.SectionInputsHubMaior}>
            <input
              type="text"
              id="Des"
              {...register("Des")}
              placeholder="des"
            />
          </section>
          <section className={style.SectionButton}>
            <button type="button" onClick={() => handleSubmit(submit)()} className={style.button}>
              Get In Touch
            </button>
            <a href="http://" className={style01.ContLogos} target="_blank">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon/linkedin">
                  <path
                    id="vector"
                    d="M17.5 3.60294V16.3971C17.5 16.6896 17.3838 16.9701 17.177 17.177C16.9701 17.3838 16.6896 17.5 16.3971 17.5H3.60294C3.31042 17.5 3.02989 17.3838 2.82304 17.177C2.6162 16.9701 2.5 16.6896 2.5 16.3971V3.60294C2.5 3.31042 2.6162 3.02989 2.82304 2.82304C3.02989 2.6162 3.31042 2.5 3.60294 2.5H16.3971C16.6896 2.5 16.9701 2.6162 17.177 2.82304C17.3838 3.02989 17.5 3.31042 17.5 3.60294ZM6.91176 8.23529H4.70588V15.2941H6.91176V8.23529ZM7.11029 5.80882C7.11146 5.64197 7.07974 5.47651 7.01696 5.32191C6.95418 5.16731 6.86156 5.02659 6.7444 4.90779C6.62723 4.78898 6.48781 4.69442 6.3341 4.6295C6.18038 4.56458 6.01539 4.53057 5.84853 4.52941H5.80882C5.4695 4.52941 5.14408 4.66421 4.90414 4.90414C4.66421 5.14408 4.52941 5.4695 4.52941 5.80882C4.52941 6.14814 4.66421 6.47357 4.90414 6.7135C5.14408 6.95344 5.4695 7.08824 5.80882 7.08824C5.97569 7.09234 6.14173 7.06353 6.29746 7.00344C6.45319 6.94335 6.59555 6.85317 6.71642 6.73804C6.83728 6.62291 6.93427 6.4851 7.00186 6.33247C7.06944 6.17985 7.10629 6.0154 7.11029 5.84853V5.80882ZM15.2941 11.0059C15.2941 8.88382 13.9441 8.05882 12.6029 8.05882C12.1638 8.03684 11.7266 8.13037 11.3349 8.33009C10.9432 8.52981 10.6107 8.82874 10.3706 9.19706H10.3088V8.23529H8.23529V15.2941H10.4412V11.5397C10.4093 11.1552 10.5304 10.7736 10.7782 10.4779C11.026 10.1822 11.3805 9.99616 11.7647 9.96029H11.8485C12.55 9.96029 13.0706 10.4015 13.0706 11.5132V15.2941H15.2765L15.2941 11.0059Z"
                    fill="black"
                    className={style01.img}
                  />
                </g>
              </svg>
            </a>
            <a href="http://" className={style01.ContLogos} target="_blank">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon/linkedin">
                  <path
                    id="vector"
                    d="M17.5 3.60294V16.3971C17.5 16.6896 17.3838 16.9701 17.177 17.177C16.9701 17.3838 16.6896 17.5 16.3971 17.5H3.60294C3.31042 17.5 3.02989 17.3838 2.82304 17.177C2.6162 16.9701 2.5 16.6896 2.5 16.3971V3.60294C2.5 3.31042 2.6162 3.02989 2.82304 2.82304C3.02989 2.6162 3.31042 2.5 3.60294 2.5H16.3971C16.6896 2.5 16.9701 2.6162 17.177 2.82304C17.3838 3.02989 17.5 3.31042 17.5 3.60294ZM6.91176 8.23529H4.70588V15.2941H6.91176V8.23529ZM7.11029 5.80882C7.11146 5.64197 7.07974 5.47651 7.01696 5.32191C6.95418 5.16731 6.86156 5.02659 6.7444 4.90779C6.62723 4.78898 6.48781 4.69442 6.3341 4.6295C6.18038 4.56458 6.01539 4.53057 5.84853 4.52941H5.80882C5.4695 4.52941 5.14408 4.66421 4.90414 4.90414C4.66421 5.14408 4.52941 5.4695 4.52941 5.80882C4.52941 6.14814 4.66421 6.47357 4.90414 6.7135C5.14408 6.95344 5.4695 7.08824 5.80882 7.08824C5.97569 7.09234 6.14173 7.06353 6.29746 7.00344C6.45319 6.94335 6.59555 6.85317 6.71642 6.73804C6.83728 6.62291 6.93427 6.4851 7.00186 6.33247C7.06944 6.17985 7.10629 6.0154 7.11029 5.84853V5.80882ZM15.2941 11.0059C15.2941 8.88382 13.9441 8.05882 12.6029 8.05882C12.1638 8.03684 11.7266 8.13037 11.3349 8.33009C10.9432 8.52981 10.6107 8.82874 10.3706 9.19706H10.3088V8.23529H8.23529V15.2941H10.4412V11.5397C10.4093 11.1552 10.5304 10.7736 10.7782 10.4779C11.026 10.1822 11.3805 9.99616 11.7647 9.96029H11.8485C12.55 9.96029 13.0706 10.4015 13.0706 11.5132V15.2941H15.2765L15.2941 11.0059Z"
                    fill="black"
                    className={style01.img}
                  />
                </g>
              </svg>
            </a>
            <a href="http://" className={style01.ContLogos} target="_blank">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon/linkedin">
                  <path
                    id="vector"
                    d="M17.5 3.60294V16.3971C17.5 16.6896 17.3838 16.9701 17.177 17.177C16.9701 17.3838 16.6896 17.5 16.3971 17.5H3.60294C3.31042 17.5 3.02989 17.3838 2.82304 17.177C2.6162 16.9701 2.5 16.6896 2.5 16.3971V3.60294C2.5 3.31042 2.6162 3.02989 2.82304 2.82304C3.02989 2.6162 3.31042 2.5 3.60294 2.5H16.3971C16.6896 2.5 16.9701 2.6162 17.177 2.82304C17.3838 3.02989 17.5 3.31042 17.5 3.60294ZM6.91176 8.23529H4.70588V15.2941H6.91176V8.23529ZM7.11029 5.80882C7.11146 5.64197 7.07974 5.47651 7.01696 5.32191C6.95418 5.16731 6.86156 5.02659 6.7444 4.90779C6.62723 4.78898 6.48781 4.69442 6.3341 4.6295C6.18038 4.56458 6.01539 4.53057 5.84853 4.52941H5.80882C5.4695 4.52941 5.14408 4.66421 4.90414 4.90414C4.66421 5.14408 4.52941 5.4695 4.52941 5.80882C4.52941 6.14814 4.66421 6.47357 4.90414 6.7135C5.14408 6.95344 5.4695 7.08824 5.80882 7.08824C5.97569 7.09234 6.14173 7.06353 6.29746 7.00344C6.45319 6.94335 6.59555 6.85317 6.71642 6.73804C6.83728 6.62291 6.93427 6.4851 7.00186 6.33247C7.06944 6.17985 7.10629 6.0154 7.11029 5.84853V5.80882ZM15.2941 11.0059C15.2941 8.88382 13.9441 8.05882 12.6029 8.05882C12.1638 8.03684 11.7266 8.13037 11.3349 8.33009C10.9432 8.52981 10.6107 8.82874 10.3706 9.19706H10.3088V8.23529H8.23529V15.2941H10.4412V11.5397C10.4093 11.1552 10.5304 10.7736 10.7782 10.4779C11.026 10.1822 11.3805 9.99616 11.7647 9.96029H11.8485C12.55 9.96029 13.0706 10.4015 13.0706 11.5132V15.2941H15.2765L15.2941 11.0059Z"
                    fill="black"
                    className={style01.img}
                  />
                </g>
              </svg>
            </a>
          </section>
        </section>
        <section className={style.SectionAgradecimento}>
          <section className={style.SectionText}>
            <p className={style.SectionFalar}>
              <p className={style.Text}>
                Let’s <span>talk</span> for
              </p>
              <p className={style.Text}>Something special</p>
            </p>
            <p className={style.TextSub}>
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
          </section>
          <section className={style.SectionY}>
            <p className={style.Text01}>Youremail@gmail.com</p>
            <p className={style.Text01}>1234567890</p>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Contc;
