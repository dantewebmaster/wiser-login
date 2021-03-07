import { GetServerSideProps } from 'next';
import { Provider } from 'react-redux';
import store from '../store';
import GlobalStyles from '../styles/Global';

export default function App({ Component, pageProps }) {
  return (
    <GlobalStyles>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </GlobalStyles>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { auth_token: authToken } = ctx.req.cookies;

  const user = {
    token: authToken,
  };

  return {
    props: user,
  };
};
