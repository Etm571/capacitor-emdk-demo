import { useState } from "react";

import "./App.css";
import { EMDK } from "capacitor-emdk";

function App() {
  const [status, setStatus] = useState("Not connected");

  const unlockCradle = async () => {
    try {
      const result = await EMDK.unlockCradle();
      setStatus("Cradle unlocked: " + JSON.stringify(result));
    } catch (error) {
      setStatus("Error unlocking cradle: " + error);
    }
  };

  const getCradleInfo = async () => {
    try {
      const result = await EMDK.getCradleInfo();
      setStatus("Cradle info: " + JSON.stringify(result, null, 2));
    } catch (error) {
      setStatus("Error getting cradle info: " + JSON.stringify(error));
    }
  };

  return (
    <>
      <h1>Capacitor EMDK demo</h1>

      <button onClick={unlockCradle}>Unlock Cradle</button>
      <button onClick={getCradleInfo}>Get cradle info</button>
      <div className="status">
        <h3>Status:</h3>
        <p>{status}</p>
      </div>
    </>
  );
}

export default App;
