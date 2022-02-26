import "./index.css";
import React, {useState, useEffect} from "react";
import Frase from "./Componentes/Frase";
////
////
function App() {
  ///state de frases

  const [frase, guardarFrase] = useState({});

  ///
  const consultarAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    guardarFrase(frase[0]);
  };

  //cargar una frase
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <div>
      <div className="contenedor">
        <Frase frase={frase} />
        <div className="button" onClick={() => consultarAPI()}>
          Obtener frase
        </div>
      </div>
    </div>
  );
}

export default App;
