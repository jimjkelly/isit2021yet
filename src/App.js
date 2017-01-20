import React from 'react';
import './app.css';

export default () =>
  <div className="section hero">
    <div className="container">
      <div className="row">
        <div className="three column">
          <h1 className="hero-heading">
            is it 2021 yet?
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="one column">
          { new Date().getFullYear() < 2021
            ? <p className="App-intro">
              No.
            </p>
            : <p className="App-intro">
              Yes!
            </p>
          }
        </div>
      </div>
    </div>
  </div>
