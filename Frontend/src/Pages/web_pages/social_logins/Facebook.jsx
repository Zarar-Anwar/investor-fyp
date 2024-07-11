import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import api from "../../../Services/Axios";
import { toast } from "react-toastify";


function Facebook() {

  // Facebook_Key--------------------------------------------------------------------
  const facebookAppId = "816637516782928";

  // React_States --------------------------------------------------------------------
  const navigate = useNavigate();

  // Functions -----------------------------------------------------------------------

  // Facebook-Response
  const responseFacebook = async (response) => {
    try {
      const { data } = await api.post("/user/authfacbook/login", response);
      navigate("/");
      toast.success(data.message);
    } catch (error) {
      toast.error(error);
    }
  };

  // Facebook-UseEffects
  useEffect(() => {
    // Load the Facebook SDK script asynchronously

    const facebookScript = document.createElement("script");
    facebookScript.src = "https://connect.facebook.net/en_US/sdk.js";
    facebookScript.async = true;
    facebookScript.onload = () => {
      // Initialize Facebook SDK once the script is loaded

      window.FB.init({
        appId: facebookAppId,
        autoLogAppEvents: true,
        xfbml: true,
        version: "v10.0",
      });
    };
    document.body.appendChild(facebookScript);

    // Clean up the Facebook script tag when the component unmounts

    return () => {
      document.body.removeChild(facebookScript);
    };
  }, [facebookAppId]);

  return (
    <div>
      <div className="mt-3">
        <FacebookLogin
          appId={facebookAppId}
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </div>
    </div>
  );
}

export default Facebook;
