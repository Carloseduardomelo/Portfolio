import style from "./MyProjects.module.css";
import SubMyProjetcs from "./SubMyProjects/SubMyProjetcs";
import foto01 from "../../assets/image 770.png";

const MyProjects = () => {
  return (
    <div className={style.DivAll}>
      <div className={style.SubDivAll}>
        <p className={style.SectionTitleMyProjects}>
          MY <span className={style.sectionSubTitleProjects}>Projects</span>
        </p>

        <SubMyProjetcs
          img={foto01}
          num={"01"}
          nameProjects={"font end Projects"}
          deccricaoProjects={`I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.`}
          linkProjects={"https://google.com"}
        />
        <SubMyProjetcs
          img={foto01}
          num={"01"}
          nameProjects={"font end Projects"}
          deccricaoProjects={`I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.`}
          linkProjects={"https://google.com"}
          position="row-reverse"
        />
        <SubMyProjetcs
          img={foto01}
          num={"01"}
          nameProjects={"font end Projects"}
          deccricaoProjects={`I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.`}
          linkProjects={"https://google.com"}
        />
      </div>
    </div>
  );
};

export default MyProjects;
