import "../styles/globals.css";

import { Provider } from "react-redux";
import store from "./../store";

import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
