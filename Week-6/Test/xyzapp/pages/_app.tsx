import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import type { AppProps } from 'next/app'
import "../styles/index.css"
import { Provider } from 'react-redux'
import store from '@/ReduxManagement/Store/store'

 
export default function App({ Component, pageProps }: AppProps) {
  return(  
  <Provider store={store}>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </Provider>
  
)}