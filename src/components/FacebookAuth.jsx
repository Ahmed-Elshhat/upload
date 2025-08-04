import { useState } from "react";
import FacebookLogin from "react-facebook-login";

function FacebookAuth() {
  const [user, setUser] = useState(null);

  const responseFacebook = (response) => {
    console.log(response);
    setUser(response.name)
  };

  return (
    <div>
      <FacebookLogin
        appId="648073771032805"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        textButton="Login with facebook"
      />
      <h1>{user}</h1>
    </div>
  );
}

export default FacebookAuth;
