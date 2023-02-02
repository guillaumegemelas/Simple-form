import "./App.css";
import { useState } from "react";
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

          <form
            className="form"
            //onSubmit sera déclenchée lors du clic sur un bouton ou un input de type Submit
            onSubmit={(event) => {
              //empeche le rafriassissement de la page par défaut
              event.preventDefault();

              if (password !== passwordConf) {
                setErrorMessage("not the same password");
                alert("Vos deux mots de passe ne sont pas identiques");
              } else {
                setErrorMessage("");
              }
            }}
          >
            <div className="tab">
              <input
                value={name}
                type="text"
                placeholder="name"
                onChange={(event) => setName(event.target.value)}
              />

              <input
                value={email}
                type="email"
                placeholder="email"
                onChange={(event) => setEmail(event.target.value)}
              />

              <input
                value={password}
                type="password"
                placeholder="password"
                onChange={(event) => setPassword(event.target.value)}
              />

              <input
                value={passwordConf}
                type="password"
                placeholder="password"
                onChange={(event) => setPasswordConf(event.target.value)}
              />

              {/* bouton pour déclencher le submit du formulaire */}
              <button
                className="register"
                type="submit"
                onClick={() => {
                  setSubmit("OK");
                }}
              >
                Register
              </button>
            </div>
          </form>
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
