import style from "./Intro.module.css";
import frame20 from "../../assets/Frame 20 (1).svg";  

const Intro = () => {
  return (
    <div className={style.DivAll}>
      <section className={style.sectionTitles}>
        <section className={style.sectionTitleMe}>
          <p className={style.sectionP}>
            Hello I’am <span>Carlos</span>
          </p>
          <p className={style.sectionP}>
            <span>Frontend</span><div className={style.developer}>Developer</div>
          </p>
          <p className={style.sectionP}>
            Based in <span>Brazil</span>
          </p>
          <section className={style.sectionDes}>
            <p>
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.
            </p>
          </section>
        </section>
        <section className={style.sectionLogo}>
          <a href="http://" className={style.ContLogos} target="_blank">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon/facebook">
                <path
                  id="Vector"
                  d="M18.3334 10.0505C18.3334 5.41996 14.6029 1.66663 10.0001 1.66663C5.3973 1.66663 1.66675 5.41996 1.66675 10.0505C1.66675 14.2361 4.71341 17.7044 8.69786 18.3333V12.4744H6.5823V10.05H8.69786V8.20329C8.69786 6.10218 9.94175 4.94107 11.8456 4.94107C12.7567 4.94107 13.7112 5.10496 13.7112 5.10496V7.16829H12.6595C11.6245 7.16829 11.3023 7.81496 11.3023 8.47829V10.0505H13.6134L13.244 12.4738H11.3023V18.3333C15.2867 17.7044 18.3334 14.2361 18.3334 10.0505Z"
                  fill="black"
                  className={style.img}
                />
              </g>
            </svg>
          </a>

          <a href="http://" className={style.ContLogos}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Social icon">
                <path
                  id="Subtract"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM15.2047 8.53799C16.0117 8.53799 16.6667 9.19296 16.6667 9.99998C16.6667 10.5965 16.3041 11.1111 15.8246 11.345C15.848 11.4854 15.8597 11.6257 15.8597 11.7778C15.8597 14.0234 13.2515 15.8362 10.0234 15.8362C6.79533 15.8362 4.18714 14.0234 4.18714 11.7778C4.18714 11.6257 4.19884 11.4737 4.22223 11.3333C3.70761 11.0994 3.35673 10.5965 3.35673 9.99998C3.35673 9.19296 4.0117 8.53799 4.81872 8.53799C5.20468 8.53799 5.56726 8.70173 5.82457 8.94735C6.83041 8.21051 8.22223 7.75437 9.77778 7.70758L10.5146 4.2222C10.538 4.15203 10.5731 4.09355 10.6316 4.05846C10.6901 4.02337 10.7602 4.01168 10.8304 4.02337L13.2515 4.53799C13.4152 4.18711 13.7661 3.9532 14.1754 3.9532C14.7485 3.9532 15.2164 4.42103 15.2164 4.99413C15.2164 5.56723 14.7485 6.03507 14.1754 6.03507C13.614 6.03507 13.1579 5.59062 13.1345 5.04092L10.9708 4.58478L10.3041 7.70758C11.8246 7.76606 13.2047 8.2339 14.1988 8.94735C14.4561 8.69004 14.807 8.53799 15.2047 8.53799ZM7.70761 9.99998C7.13451 9.99998 6.66667 10.4678 6.66667 11.0409C6.66667 11.614 7.13451 12.0819 7.70761 12.0819C8.28071 12.0819 8.74854 11.614 8.74854 11.0409C8.74854 10.4678 8.28071 9.99998 7.70761 9.99998ZM10.0117 14.5497C10.4094 14.5497 11.7661 14.5029 12.4795 13.7895C12.5848 13.6842 12.5848 13.5204 12.5029 13.4035C12.3977 13.2982 12.2222 13.2982 12.117 13.4035C11.6608 13.8479 10.7135 14.0117 10.0234 14.0117C9.33334 14.0117 8.37427 13.8479 7.92983 13.4035C7.82457 13.2982 7.64913 13.2982 7.54386 13.4035C7.4386 13.5088 7.4386 13.6842 7.54386 13.7895C8.24562 14.4912 9.61404 14.5497 10.0117 14.5497ZM11.2515 11.0409C11.2515 11.614 11.7193 12.0819 12.2924 12.0819C12.8655 12.0819 13.3333 11.614 13.3333 11.0409C13.3333 10.4678 12.8655 9.99998 12.2924 9.99998C11.7193 9.99998 11.2515 10.4678 11.2515 11.0409Z"
                  fill="black"
                  className={style.img}
                />
              </g>
            </svg>
          </a>

          <a href="http://" className={style.ContLogos} target="_blank" >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon/twitter">
                <path
                  id="vector"
                  d="M16.6271 6.60007C16.6373 6.747 16.6373 6.89392 16.6373 7.04221C16.6373 11.5605 13.1977 16.7714 6.90813 16.7714V16.7687C5.05019 16.7714 3.23084 16.2392 1.66675 15.2357C1.93691 15.2682 2.20842 15.2845 2.48062 15.2851C4.02033 15.2865 5.51603 14.7699 6.72735 13.8186C5.26415 13.7908 3.98106 12.8368 3.53282 11.444C4.04538 11.5429 4.57351 11.5225 5.07659 11.3851C3.48136 11.0628 2.33369 9.66121 2.33369 8.03347C2.33369 8.01858 2.33369 8.00436 2.33369 7.99014C2.80901 8.25488 3.3412 8.40181 3.88559 8.41806C2.38311 7.41393 1.91998 5.41515 2.82729 3.85242C4.56336 5.98865 7.1248 7.28732 9.87448 7.42477C9.5989 6.23714 9.97537 4.99264 10.8637 4.15779C12.2409 2.86318 14.4069 2.92954 15.7016 4.30607C16.4673 4.15508 17.2013 3.87409 17.873 3.47595C17.6177 4.26748 17.0835 4.93983 16.3698 5.36708C17.0476 5.28718 17.7098 5.10572 18.3334 4.82879C17.8743 5.51672 17.2961 6.11594 16.6271 6.60007Z"
                  fill="black"
                  className={style.img}
                />
              </g>
            </svg>
          </a>

          <a href="http://" className={style.ContLogos} target="_blank">
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
                  className={style.img}
                />
              </g>
            </svg>
          </a>
        </section>
      </section>
      <section className={style.sectionImg}>
        <img src={frame20} alt="" />
      </section>
    </div>
  );
};

export default Intro;