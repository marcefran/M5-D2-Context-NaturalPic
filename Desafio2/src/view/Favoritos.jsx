/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";
import { CardImg } from "../Components/CardImg";
import "./Home.css";
export const Favorite = () => {
  const { dataImg, SetDataImg } = useContext(ContextAPI);
  return (
    <main>
      {dataImg.map((dat, index) =>
        dat.liked ? <CardImg key={index} datImg={dat} index={index} /> : null
      )}
    </main>
  );
};
