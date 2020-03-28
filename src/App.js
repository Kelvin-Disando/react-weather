import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import "./styles/main.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Layout from "./components/Layout";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <Main />
      </Layout>
    </Provider>
  );
}

export default App;
