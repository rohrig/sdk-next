import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { initSDK, buildModule } from '@vsf-enterprise/sdk';
import {
  boilerplateModule,
  BoilerplateModuleType,
} from '../../../../packages/sdk/src';
import Layout from '@/components/layout';
import App from 'next/app';

const sdkConfig = {
  boilerplate: buildModule<BoilerplateModuleType>(boilerplateModule, {
    apiUrl: 'http://0.0.0.0:8181/boilerplate',
  }),
};

export const sdk = initSDK<typeof sdkConfig>(sdkConfig);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout data={pageProps.routes}>
      <Component {...pageProps} />
    </Layout>
  );
}

// App.getInitialProps = async () => {
//   const res = await fetch(`http://localhost:3000/api/getMethodList`)
//   const data = await res.json()
//   console.log
//   return { routes: data };
// }

App.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}
