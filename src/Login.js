import "./Login.css"
import { GoogleLogin } from '@react-oauth/google';

function Login() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
    return  (
    <div>
      <h1 className = "login"> 
         Work in Progress..
       </h1>
       <h2>React Google Login</h2>
            <br />
            <br />
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>);
    
  }
  
  export default  Login;