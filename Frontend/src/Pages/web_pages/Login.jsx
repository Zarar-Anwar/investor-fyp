import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
// import logoImage from "../../Assets/core/images/logos/logo-red-1000.png";
import api from "../../Services/Axios";
import { Store } from "../../Services/Store";


//  Login Component

function Login() {
  const {state, dispatch} = useContext(Store)
  // React_States-----------------------------------------------------
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  // Functions--------------------------------------------------------

  // Form-Submit-Function
  const submitHandler=async(e)=>{
      e.preventDefault()
      const actualData={
          username:username,
          password:password,
      }
      try {
          const {data}=await api.post("login/",actualData)
          localStorage.setItem("UserInfo",JSON.stringify(data))
          dispatch({type:'UserLoggedIn',payload:data})
          toast.success("Login SuccessFully")
          navigate("/admin/dashboard")
      } catch (error) {
          if (error.response && error.response.data && error.response.data.message) {
            setError(error.response.data.message)
          } else {
            setError("An error occurred during registration.");
          }
      }
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="account-pages my-5 pt-sm-5 "  >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card overflow-hidden">
                <div className="card-body pt-0 border" style={{ marginBottom: "300px" }}>
                  <div className="p-2">
                    <form className="login" onSubmit={submitHandler} id="login_form" method="POST" action="">
                      <input type="hidden" name="csrfmiddlewaretoken" defaultValue="P6CBtK0X6LQ8W4K3myIRTfGIXGIUJ0kKBKUoBzgnFkzMqnbYTIsgfcBDslpiyw4C" />
                      <div id="div_id_login" className="mb-3"> <label htmlFor="id_login" className="form-label requiredField">
                        Username<span className="asteriskField">*</span> </label>
                        <input onChange={(e)=>{setUsername(e.target.value)}} type="text" name="login" placeholder="Username" autoComplete="email" maxLength={320} className="textinput form-control" required id="id_login" />
                      </div> <div id="div_id_password" className="mb-3">
                        <label htmlFor="id_password" className="form-label requiredField">
                          Password<span className="asteriskField">*</span> </label>
                        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" placeholder="Password" autoComplete="current-password" className="passwordinput form-control" required id="id_password" />
                      </div> <div className="mb-3">
                      </div>
                      <input type="hidden" name="next" defaultValue="/accounts/cross-auth/" />
                      <div className="mt-5">
                        <p className="mt-5">If you have not created an account yet, then please
                          <a href="/accounts/signup/?next=%2Faccounts%2Fcross-auth%2F"> sign up</a> first.</p>
                        <button className="btn btn-success btn-block waves-effect waves-light" type="submit">Log In
                        </button>
                      </div>
                    </form>
                    <div className="text-center">


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
