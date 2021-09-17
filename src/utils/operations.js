import client from "./shopify-client";
import umdClient from "./shopify-umdClient";

export async function getAllCollections() {
  const res = await client.collection.fetchAll();
  const collections = JSON.parse(JSON.stringify(res));
  return collections;
}

export async function getCollectionByHandle(handle) {
  const res = await client.collection.fetchByHandle(handle);
  const collection = JSON.parse(JSON.stringify(res));
  return collection;
}

export async function getProductByHandle(handle) {
  const res = await client.product.fetchByHandle(handle);
  const product = JSON.parse(JSON.stringify(res));
  return product;
}

export async function fetchQuery() {
  const res = await client.product.fetchQuery({
    first: 20,
    sortKey: "CREATED_AT",
    query: "Cuff",
  });
  const product = JSON.parse(JSON.stringify(res));
  return product;
}

export async function customQuery() {
  const productsQuery = umdClient.graphQLClient.query((root) => {
    root.addConnection(
      "products",
      { args: { first: 10, query: "variants.price:85.00" } },
      (product) => {
        product.add("title");
      }
    );
  });

  // Call the send method with the custom products query
  const query = await umdClient.graphQLClient.send(productsQuery);
  console.log(query);
  return JSON.parse(JSON.stringify(query));
}

export async function fetchMethod(limit = 2) {
  const res = await fetch(
    `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2021-07/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          process.env.SHOPIFY_STOREFRONT_API_TOKEN,
      },
      body: JSON.stringify({
        query: `query fetchProduct($limit: Int!) {
          products(first: $limit) {
            edges {
              node {
                id
              }
            }
          }}
        `,
        variables: {
          limit,
        },
      }),
    }
  );

  return await res.json();
}
