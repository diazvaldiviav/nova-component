import React from "react";
import NovaNavHeaderMinimal from "./NovaNavHeaderMinimal";
import "./Styles/NovaStyles.css";
import NovaLink from "./NovaLink";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <NovaNavHeaderMinimal className="custom-header" style={{ backgroundColor: '#f8f9fa' }}>
      
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      
      <nav className="nova-navigation">
        {/* Cada NovaLink ya incluye su propia estructura ul>li>a */}
        <NovaLink 
          href="/"
          label="Home"
          icon={<FaHome />}
          isActive={true}
        />
        <NovaLink 
          href="/about"
          label="About"
          icon={<FaInfoCircle />}
        />
        <NovaLink 
          href="/contact"
          label="Contact"
          icon={<FaEnvelope />}
        />
      </nav>
      
      </NovaNavHeaderMinimal>
    </div>
  );
}

export default App;