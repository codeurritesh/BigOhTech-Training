import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { AppProps } from "next/app";
import "../styles/index.ts";
import "../styles/main.css";
import { Provider } from "react-redux";
import store from "@/ReduxManagement/Store/store";
import { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { lime, purple } from "@mui/material/colors";
import theme from "@/theme/";

const Layout = ({
  children,
  pageProps,
}: {
  children: ReactNode;
  pageProps: any;
}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}
