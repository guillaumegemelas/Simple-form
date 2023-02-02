const StepTwo = ({ name, email, password, setSubmit }) => {
  return (
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
  );
};

export default StepTwo;
