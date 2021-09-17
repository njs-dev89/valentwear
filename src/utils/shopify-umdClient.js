import Client from "shopify-buy/index.unoptimized.umd";

const umdClient = Client.buildClient({
  domain: process.env.SHOPIFY_STORE_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_API_TOKEN,
});

export default umdClient;
