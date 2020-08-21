import React, { useEffect, useState } from "react";
import { v5 as uuidv5 } from 'uuid';

import "./App.css";

function App() {
  const [clipboard, setClipboard] = useState("");
  const [geolocation, setGeolocation] = useState("");
  const [ip, setIp] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    fetch(`https://api.ipify.org/?format=json`)
      .then((result) => result.json())
      .then((data) => setIp(data.ip));
  });

  const readClipboard = () => {
    navigator.clipboard.readText().then((text) => {
      console.log(text);
      setClipboard(text);
    });
  };

  const getGeolocation = () => {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      let crd = pos.coords;
      let value = `Your current position is: 
      \n  Latitude : ${crd.latitude} 
      \n Longitude: ${crd.longitude} 
      \n More or less ${crd.accuracy} meters.`;

      setGeolocation(value);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  const generateId = () => {
    let data = {
      ip: ip,
      cookie: navigator.cookieEnabled,
    };

      const MY_NAMESPACE = '091be5fd-9eb4-45af-a4d2-8a0b0f6c8369';
      let id = uuidv5(JSON.stringify(data), MY_NAMESPACE);
      setId(id)
  };

  return (
    <div className="App">
      <h2>Totally available data</h2>
      <p>cookieEnabled: {navigator.cookieEnabled}</p>
      <p>appName: {navigator.appName}</p>
      <p>appCodeName: {navigator.appCodeName}</p>
      <p>product: {navigator.product}</p>

      <p>appVersion: {navigator.appVersion}</p>
      <p>userAgent: {navigator.userAgent}</p>
      <p>platform: {navigator.platform}</p>
      <p>language: {navigator.language}</p>
      <p>onLine: {navigator.onLine}</p>
      {/*<p>javaEnabled: {navigator.javaEnabled}</p>*/}
      {/*<p>credentials: {navigator.credentials.}</p>*/}
      {/*<p>plugins: {JSON.stringify(navigator.plugins)}</p>*/}

      <p>ip address: {ip}</p>

      <h2>Interesting but sorta safe things:</h2>
      <p>
        clipboard:
        <button onClick={readClipboard}>Read Clipboard</button>
        {clipboard}
      </p>
      <p>
        geolocation:
        <button onClick={getGeolocation}>Read GeoLocation</button>
        {geolocation}
      </p>

      <h2>Generate ID based on detected data </h2>
      <p>
        ID:
        <button onClick={generateId}>generate</button>
        {id}
      </p>
    </div>
  );
}

export default App;
