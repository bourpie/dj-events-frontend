import '../styles/globals.css'
import { useState } from "react";
import ContentProvider from '../context/AppContext'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  const [contenu, setContenu] = useState()
  return (
    <ContentProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </ContentProvider>
  )
}

export default MyApp
