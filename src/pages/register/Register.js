import {Link} from 'react-router-dom'
function Register() {
  return (
    <div className="Register">
      <div className="container">
        <div className="row s-0">
          <div className = "col-lg-6 col-12">
            <div className="login-form">
              <h4>Register</h4>
              <form>
                <input type= "text" placeholder="UserName or Email"></input>
                <input type= "password" placeholder="Password"></input>
                <button type= "submit">Register</button>
              </form>
            </div>
          </div>
          <div className ="col-lg-6 col-12">
            <div className="content">
              <h2>Hello World !</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              <span>Already have an account?</span>
              <Link to ='/login'><button>Login</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
