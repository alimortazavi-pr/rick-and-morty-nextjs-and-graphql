//Types
import type { AppProps } from "next/app";

//Assets
import "@/common/styles/globals.css";

//Redux
import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
