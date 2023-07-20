import '@/styles/globals.css'
import UserProviderContext from '@/context/UserProvider'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }) {
  return (
    <UserProviderContext>

      <Component {...pageProps} />

      <ToastContainer />
    </UserProviderContext>
  )
}
