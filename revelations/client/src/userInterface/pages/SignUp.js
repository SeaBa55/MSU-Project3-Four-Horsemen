import React,{ useState } from "react";
import API from "../../utils/API";
import "../styles/signUp.css"
import loginTwo from "../assets/loginTwo.png";

const BACKGROUND = {
  backgroundImage: `url(${loginTwo})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  position: 'fixed', 
  height: '95%',  
  width: '100%'
}

function SignUp() {


  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleInputChange = event => {
    event.preventDefault();
    const id = event.currentTarget.id;
    const value = event.target.value.trim();
    setFormState((prevState) => {
      return { ...prevState, [id] : value}
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (formState.username && formState.email && formState.password) {
      API.userSignUp({
        username: formState.username,
        email: formState.email,
        password: formState.password
      })
        .then(() => setFormState({
          username: "",
          email: "",
          password: ""
        }))
        .then(() => window.location.replace("/login"))
        .catch(err => console.log(err));
    }
  };

  return (
    <div style={BACKGROUND}>
      
      <h1>Current: Sign-up page</h1>

      <div className="container">

        <div id="signUpPosition" className="Row justify-content-center d-flex">

          <div className="col-md-6 customDivOne"> 

            <div className="customDivTwo">

              <div id="codaFont" className="form-group">
                <label id="velocityFont" for="username">Username</label>
                <input type="username" className="form-control" id="username" value={formState.username} onChange={handleInputChange} placeholder="user123" />
              </div>

              <div id="codaFont" className="form-group">
                <label id="velocityFont" for="email">Email address</label>
                <input type="email" className="form-control" id="email" value={formState.email} onChange={handleInputChange} placeholder="name@email.com" />
              </div>

              <div className="form-group">
                <label id="velocityFont" for="password">Password</label>
                <input type="password" className="form-control" value={formState.password} onChange={handleInputChange} id="password" />
              </div>

              <button 
                type="submit" 
                className="button"
                onClick={handleSubmit}
                >
                  Submit
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );

}

export default SignUp;