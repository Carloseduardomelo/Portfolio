import style from "./MyExperience.module.css";
import ContMyExperince from "./SubComponents/ContMyExperince";

import logo from "../../assets/google(1).svg";

const MyExperience = () => {
  return (
    <div className={style.DivAll}>
      <div className={style.SubDivAll}>
        <p className={style.sectionTitleMyExperience}>
          My <span>Experience</span>
        </p>
        <section className={style.sectionConternMyexperience}>
          <ContMyExperince
            logoEmpresa={logo}
            Cargo={"dev frontEbd"}
            AnoInicial={"jan 1900"}
            AnoFinal={"jan 2000"}
            descricao={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
             inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
             sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`}
          />
          <ContMyExperince
            logoEmpresa={logo}
            Cargo={"dev frontEbd"}
            AnoInicial={"jan 1900"}
            AnoFinal={"jan 2000"}
            descricao={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
             inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
             sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`}
          />
          <ContMyExperince
            logoEmpresa={logo}
            Cargo={"dev frontEbd"}
            AnoInicial={"jan 1900"}
            AnoFinal={"jan 2000"}
            descricao={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
             inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
             sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`}
          />
        </section>
      </div>
    </div>
  );
};

export default MyExperience;
