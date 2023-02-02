const Form = ({
  name,
  email,
  password,
  passwordConf,
  setSubmit,
  setErrorMessage,
  setName,
  setEmail,
  setPasswordConf,
  setPassword,
}) => {
  return (
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
  );
};

export default Form;
