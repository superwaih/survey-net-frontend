import '@/styles/globals.css'
import UserProviderContext from '@/context/UserProvider'
export default function App({ Component, pageProps }) {
  return (
    <UserProviderContext>
      <Component {...pageProps} />
    </UserProviderContext>
  )
}
