import { Link } from "react-router-dom";

import style from "./SubMyProjects.module.css";

import compartilhar from "../../../assets/Read More.svg";

const SubMyProjetcs = ({
  img,
  num,
  nameProjects,
  deccricaoProjects,
  linkProjects,
  position,
}) => {
  return (
    <div className={style.DivAll} style={{display: "flex" , flexDirection: position}}>
      <section className={style.sectionImg}>
        <img src={img} alt="imagem do projeto" className={style.img}/>
      </section>
      <section className={style.sectionDescricao}>
        <p className={style.sectionNum}>{num}</p>
        <p className={style.sectionName}>{nameProjects}</p>
        <p className={style.sectionParagrafo}>{deccricaoProjects}</p>
        <Link to={linkProjects} target={"_blank"}>
          {" "}
          <img src={compartilhar} alt="imagem do ico de compratiçhamento" />
        </Link>
      </section>
    </div>
  );
};

export default SubMyProjetcs;
