import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Messenger from './components/Messenger';
import AccountProvider from './components/context/AccountProvider';
function App() {
  const clientId ='dgfdgfdgdfgdf'
  return (
    <GoogleOAuthProvider clientId={clientId}>
  <AccountProvider>


  <Messenger/>
  </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
