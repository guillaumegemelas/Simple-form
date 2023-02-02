import "./App.css";
import { useState } from "react";

function App() {
  //mes states dédiées au contenu de mes inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submit, setSubmit] = useState("");
  //state qui gère le contenu et l'affichage de mon étape 2
  const [newBox, setNewBox] = useState("");

  return (
    <div className="App">
      <section className={!submit || errorMessage ? "" : "hidden"}>
        <h1>Create account</h1>
        {/* renvoie à la classe visible si submit n'existe pas ou errorMessage existe et caché si
       submit existe et erroMessage n'existe pas  */}
        <form
          className="form"
          //onSubmit sera déclenchée lors du clic sur un bouton ou un input de type Submit
          onSubmit={(event) => {
            //empeche le rafriassissement de la page par défaut
            event.preventDefault();

            if (password !== passwordConf) {
              setErrorMessage("");
              alert("Vos deux mots de passe ne sont pas identiques");
            } else {
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

      {submit && !errorMessage && (
        <section className="result">
          <div>
            <h1>Results</h1>
            <div className="newBox">
              <p>Name : {name}</p>
              <p>Email : {email}</p>
              <p>Password : {password}</p>
            </div>

            <button
              className="register"
              type="submit"
              onClick={() => {
                setSubmit("");
              }}
            >
              Edit your information
            </button>
          </div>
        </section>
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
