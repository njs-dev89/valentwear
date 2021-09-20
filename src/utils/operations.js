import client from "./shopify-client";
import umdClient from "./shopify-umdClient";

export async function getAllProducts() {
  const res = await client.product.fetchAll();
  const products = JSON.parse(JSON.stringify(res));
  return products;
}

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

export async function fetchBlog() {
  const blogsQuery = umdClient.graphQLClient.query((root) => {
    root.addConnection("blogs", { args: { first: 10 } }, (blog) => {
      blog.add("title");
      blog.add("handle");
      blog.add("id");
    });
  });

  // Call the send method with the custom products query
  let blogs;
  try {
    blogs = await umdClient.graphQLClient.send(blogsQuery);
  } catch (err) {
    console.log(err.blogs);
  }

  return JSON.parse(JSON.stringify(blogs.model)).blogs;
}

export async function blogByHandle(handle) {
  let variables = { handle };
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
        query: `query fetchBlogByHandle($handle: String!) {
                 
                  blogByHandle(handle: $handle) {
                    articles(first: 100) {
                      edges {
                        node {
                          id
                          title
                          handle
                          image {
                            src
                          }
                        }
                      }
                    }
                  }
                }
              
        `,
        variables,
      }),
    }
  );
  const data = await res.json();
  const articles = data.data.blogByHandle.articles.edges.map(
    (edge) => edge.node
  );
  return articles;
}

export async function articleByHandle(category, handle) {
  let variables = { category, handle };
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
        query: `query fetchArticleByHandle($category: String!, $handle: String!) {
                 
                  blogByHandle(handle: $category) {
                    articleByHandle(handle: $handle) {
                      id
                      title
                      content
                      publishedAt
                      authorV2 {
                        name
                      }
                      image {
                        src
                      }
                      seo {
                        description
                        title
                      }
                    }
                  }
                }
              
        `,
        variables,
      }),
    }
  );
  const data = await res.json();
  const article = data.data.blogByHandle.articleByHandle;
  return article;
}

export async function trendingArticles(category, handle) {
  let variables = { category, handle };
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
        query: `query fetchTrendingArticle {
                  articles(first: 100) {
                    edges {
                      node {
                        blog {
                          handle
                        }
                        id
                        handle
                        title
                        tags
                        image {
                          src
                          altText
                        }
                      }
                    }
                  }
                }

              
        `,
      }),
    }
  );
  const data = await res.json();
  const articles = data.data.articles.edges.map((edge) => edge.node);
  const trendingArticles = articles.filter((article) =>
    article.tags.includes("trending")
  );
  console.log(trendingArticles);
  return trendingArticles;
}
