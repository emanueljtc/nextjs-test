import React from "react"
import { wrapper } from "../redux/store"
import './globals.css'
const MyApp = ({ Component, pageProps}) => (
  <Component {...pageProps} />
)

export default wrapper.withRedux(MyApp);