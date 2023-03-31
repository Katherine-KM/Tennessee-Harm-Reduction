import '../styles/global.css'
import GlobalStyles from '@/styles/Global.styles'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
