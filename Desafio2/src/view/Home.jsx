/* eslint-disable react-hooks/exhaustive-deps */
import { useContext,  useState } from "react";
import { ContextAPI } from "../context/ContextAPI";
import { CardImg } from "../Components/CardImg";
import "./Home.css";
export const Home = () => {
  const { dataImg,perPage, setPerPag } = useContext(ContextAPI);
  const [isLimited, setLimite]=useState(false)
  const msjLimite="No se pueden mostrar mas de 80 imagenes"

  const handlerClick=()=>{
    if (perPage<80){
    setPerPag(perPage+20)
  }else{
    setLimite(true)
  }
}
  return (
    <>
    <main>
      {dataImg.map((dat, index) => (
        <CardImg key={index} datImg={dat} index={index} />
      ))}
    </main>
    <section className="verMas">
      <button onClick={handlerClick}>Ver Mas</button>
       {isLimited?<p>{msjLimite}</p>:null}
    </section>
    
    </>
  );
};
