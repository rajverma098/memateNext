import { Provider } from 'react-redux';
import { store } from '../store/store';
import '../styles/globals.css'; 
import Header from '@/components/header';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
