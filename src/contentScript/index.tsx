chrome.runtime.sendMessage("I am loading content script", (response) => {
  console.log(response);
  console.log("I am content script");
});

window.onload = (event) => {
  console.log("page is fully loaded");
};

// import React from "react";
// import { createRoot } from "react-dom/client";
// import "../assets/styles/tailwind.css";
// import ContentScript from "./contentScript";

// function init() {
//   const appContainer = document.createElement("div");
//   document.body.appendChild(appContainer);
//   if (!appContainer) {
//     throw new Error("Can not find AppContainer");
//   }
//   const root = createRoot(appContainer);
//   console.log(appContainer);
//   root.render(<ContentScript />);
// }

// init();
