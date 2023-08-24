import '@/styles/globals.css'
import UserProviderContext from '@/context/UserProvider'
import { ToastContainer, toast } from 'react-toastify';
import NextNProgress from 'nextjs-progressbar';

import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }) {
  return (
    <UserProviderContext>
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Component {...pageProps} />

      <ToastContainer />
    </UserProviderContext>
  )
}
