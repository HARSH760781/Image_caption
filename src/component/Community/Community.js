import React, { useState } from "react";
import Login from "../pages/Login"; // Import your Login component
import SignUp from "../pages/Signup"; // Import your Login component
import Community from "./Community"; // Import your Community component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle the login logic, which sets isLoggedIn to true when the user successfully logs in
  const handleLogin = () => {
    // Implement your login logic here
    // For this example, we'll simulate a successful login after a brief delay
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1000);
  };

  // Function to handle the logout logic, which sets isLoggedIn to false
  const handleLogout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          {/* If the user is logged in, show the Community component */}
          <Community onLogout={handleLogout} />
        </div>
      ) : (
        <div>
          {/* If the user is not logged in, show the Login component */}
          <Login onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default App;
