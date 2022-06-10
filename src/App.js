import axios from "axios";
import { gapi } from "gapi-script";
import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import Calenderevents from "./Calenderevents";
const App = () => {
  const [events, setEvents] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "780438987017-4d88cog7vk36dk3na92roj6h5207a67g.apps.googleusercontent.com",
        scope: "openid email profile https://www.googleapis.com/auth/calendar",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  const handleSuccess = (res) => {
    let code = res.code;
    axios
      .post("http://localhost:4000/generatetoken", { code })
      .then((res) => {
        setEvents(res?.data?.items);
        setLoggedIn(true);
        // getCalenderDetails();
      })
      .catch((err) => console.log(err));
  };
  const handleFailure = (err) => {
    console.log(err);
  };
  return (
    <div className="">
      {loggedIn ? (
        <Calenderevents events={events} />
      ) : (
       <div className="flex justify-center h-screen items-center">
          <GoogleLogin
            clientId="780438987017-4d88cog7vk36dk3na92roj6h5207a67g.apps.googleusercontent.com"
            buttonText="Sign In & Fetch Data"
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
            responseType="code"
            accessType="offline"
            scope="openid email profile https://www.googleapis.com/auth/calendar"
          />
       </div>
      )}
    </div>
  );
};

export default App;
