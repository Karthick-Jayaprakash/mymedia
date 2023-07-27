import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext.js'

function Login() {

  const {login} = useContext(AuthContext);

  const handleLogin = () =>{
    login();
  }
  return (
    <div className="Login">
      <div className="container">
        <div className="row s-0">
          <div className ="col-lg-6 col-12">
            <div className="content">
              <h2>Hello World !</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              <span>Dont You have an account?</span>
              <Link to="/register"><button>Register</button></Link>
            </div>
          </div>
          <div className = "col-lg-6 col-12">
            <div className="login-form">
              <h4>Login</h4>
              <form>
                <input type= "text" placeholder="UserName or Email"></input>
                <input type= "password" placeholder="Password"></input>
                <button onClick={handleLogin} type= "submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
