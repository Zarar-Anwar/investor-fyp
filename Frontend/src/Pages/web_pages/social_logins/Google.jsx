import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useEffect, useState } from "react";


function Google() {

  // Google_Key----------------------------------------------------------------------
  const googleAppId =
    "1456542894-s7an1ot9c683415i07f2ss15g4lp6uoh.apps.googleusercontent.com";
  const googleAppIdSecret = "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";

  // React_States --------------------------------------------------------------------
  const navigate = useNavigate();
  const [GoogleSdkLoaded, setGoogleSdkLoaded] = useState();

  // Functions -----------------------------------------------------------------------

  // Google-Response
  const responseGoogle = (response) => {
    console.log(response);
    navigate('/')
  };

  // Google-UseEffects
  useEffect(() => {
    // Load the Google SDK script asynchronously
    const googleScript = document.createElement("script");
    googleScript.src = "https://apis.google.com/js/platform.js";
    googleScript.async = true;
    googleScript.onload = () => {
      // Set the state to indicate that the Google SDK has loaded
      setGoogleSdkLoaded(true);
    };
    document.body.appendChild(googleScript);

    // Clean up the Google script tag when the component unmounts
    return () => {
      document.body.removeChild(googleScript);
    };
  }, []);

  return (
    <div>
      <div className="mt-3">
        {GoogleSdkLoaded ? (
          <GoogleLogin
            clientId={googleAppId}
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            redirectUri="http://localhost:3000/"
          />
        ) : (
          <p>Loading Google Sdk...</p>
        )}
      </div>
    </div>
  );
}

export default Google;
