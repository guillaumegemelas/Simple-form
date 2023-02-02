import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import StepTwo from "./Components/StepTwo";

function App() {
  //mes states dédiées au contenu de mes inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submit, setSubmit] = useState("");
  //state qui gère le contenu et l'affichage de mon étape 2

  return (
    <div className="App">
      {/* je crée une ternaire qui dit si submit est false (n'existe pas) ou message error existe,
      j'affiche mon form , SINON j'affiche mon step2 (result)*/}

      {!submit || errorMessage ? (
        <section className="formulaire">
          <h1>Create account</h1>
          <Form
            name={name}
            email={email}
            password={password}
            passwordConf={passwordConf}
            setSubmit={setSubmit}
            setErrorMessage={setErrorMessage}
            setName={setName}
            setEmail={setEmail}
            setPasswordConf={setPasswordConf}
            setPassword={setPassword}
          />
        </section>
      ) : (
        // sinon deuxième constion de la ternaire, si submit est true et message erro n'existe pas, j'affiche
        //mon result
        <StepTwo
          name={name}
          email={email}
          password={password}
          setSubmit={setSubmit}
        />
      )}
      <footer>
        <p>
          Made with <span> React </span> at <span> Le Reacteur </span> by{" "}
          <span> Guillaume</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
