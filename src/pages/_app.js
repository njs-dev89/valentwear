import "../styles/styles.css";
import Layout from "../components/Layout/Layout";
import { CommerceProvider } from "../context/cartContext";
import { UIProvider } from "../context/uiContext";

function MyApp({ Component, pageProps }) {
  return (
    <CommerceProvider
      domain={process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}
      storefrontAccessToken={
        process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN
      }
    >
      <UIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </CommerceProvider>
  );
}

export default MyApp;
