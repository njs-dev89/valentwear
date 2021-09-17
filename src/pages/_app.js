import "../styles/styles.css";
import Layout from "../components/Layout/Layout";
import { CommerceProvider } from "../context/cartContext";

function MyApp({ Component, pageProps }) {
  return (
    <CommerceProvider
      domain={process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}
      storefrontAccessToken={
        process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN
      }
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CommerceProvider>
  );
}

export default MyApp;
