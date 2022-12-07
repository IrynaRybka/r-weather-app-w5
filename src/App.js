import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer className="creator">
          Coded by Iryna Rybka {" "}
          <a
           className="link"  href="https://github.com/IrynaRybka/r-weather-w4" target="_blank" rel="noreferrer noopener"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
