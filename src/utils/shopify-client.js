import Client from "shopify-buy";

const client = Client.buildClient({
  domain: process.env.SHOPIFY_STORE_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_API_TOKEN,
});

export default client;
