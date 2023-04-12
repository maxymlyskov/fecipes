import { useState } from "react";
import FirebaseAuthService from "./firebase/FirebaseAuthService";
import LoginForm from "./components/LoginForm";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  FirebaseAuthService.subscribeToAuthChanges(setUser);
  return (
    <div className="App">
      <div className="title-row">
        <h1 className="title">Fecipes</h1>
        <LoginForm existingUser={user}></LoginForm>
      </div>
    </div>
  );
}

export default App;
