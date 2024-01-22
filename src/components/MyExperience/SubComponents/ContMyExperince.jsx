import style from "./ContMyExperince.module.css"


const ContMyExperince = ({Cargo , logoEmpresa , AnoInicial , AnoFinal , descricao}) => {
  return (
    <div className={style.DivAll}>
      <section className={style.sectionHeard}>
        <section className={style.sectionCargoLogo}>
          <img src={logoEmpresa} alt="logo da empresa" />
          <p className={style.sectionTitleCargo}>{Cargo}</p>
        </section>
        <p className={style.sectionAnos}>{AnoInicial}-{AnoFinal}</p>
      </section>
     <p className={style.sectionDescricao}>{descricao}</p>
    </div>
  )
}

export default ContMyExperince