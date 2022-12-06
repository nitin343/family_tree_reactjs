// import  wrapper  from '../store/store'
// import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux';
import { store } from '../Redux/store';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
      <Component {...pageProps} />
  </Provider>
)
}

export default MyApp; 
