import React from "react";
import ReactDOM from "react-dom";
import { MainView } from './components/main-view/main-view'

import "./index.scss";

// Main component (will eventually use all the others)
class FlixFolioApplication extends React.Component {
  render() {
    return (
      <div className="flix-folio">
        <MainView />
      </div>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName("app-container")[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(FlixFolioApplication), container);