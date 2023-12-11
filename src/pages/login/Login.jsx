import './login.css'

export default function login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            <div className="loginLogo">MikeSocial</div>
           <span className="loginDesc">
            Connect with friends and the world MikeSocial
           </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                  <input placeholder='Email' className="loginInput" />
                  <input placeholder='password' className="loginInput" />
                  <button className="loginButton">Log In</button>
                  <span className="loginForgot">Forgot Password?</span>
                  <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </div>
        
        </div>
    </div>
  )
}