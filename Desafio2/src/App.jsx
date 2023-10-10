import "./App.css";

import { Header } from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./view/Home";
import { Favorite } from "./view/Favoritos";
import { Nofound } from "./view/NoFound";
import { ContextAPI } from "./context/ContextAPI";
import { useContext,useEffect } from "react";
import { createClient } from "pexels";

function App() {
  const {SetDataImg,perPage} = useContext(ContextAPI);
  const API_KEY = "ulIo70LyKuyLYFuV8YYlsKRQgfsg76JjEQpXyLOWTjpJmrHVdNYVaQEy";
  useEffect(() => {
    const client = createClient(API_KEY);
    const query = "Nature";
    client.photos
      .search({ query, per_page: perPage })
      .then((data) => {
        SetDataImg(data.photos);
      })
      .catch();
  }, [perPage]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Favoritos" element={<Favorite />}/>
          <Route path="*" element={<Nofound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
