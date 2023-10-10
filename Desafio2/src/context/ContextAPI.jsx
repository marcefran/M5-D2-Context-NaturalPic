/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const ContextAPI = createContext({});

export function ContextAPIProvider({ children }) {
  const [dataImg, SetDataImg] = useState([
    {
      id: "",
      width: "",
      height: "",
      url: "",
      photographer: "No Found",
      photographer_url: "",
      photographer_id: "",
      avg_color: "",
      src: {
        original: "",
        large2x: "",
        large: "",
        medium: "",
        small: "",
        portrait: "",
        landscape: "",
        tiny: "",
      },
      liked: false,
      alt: "Nofound",
    },
  ]);
  const [perPage, setPerPag]=useState(20)
  return (
    <ContextAPI.Provider
      value={{
        dataImg,
        SetDataImg,
        perPage,
        setPerPag,
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
}
