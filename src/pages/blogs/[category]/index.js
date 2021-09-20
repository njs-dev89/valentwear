import {
  blogByHandle,
  fetchBlog,
  trendingArticles,
} from "../../../utils/operations";
import Link from "next/link";
import SingleCollection from "../../../components/SingleCollection";
import { useRouter } from "next/router";
import Image from "next/image";

function SingleBlog({ blogs, articles, trendArticles }) {
  const router = useRouter();
  console.log({ blogs, articles, router, trendArticles });
  return (
    <div>
      <div className="flex justify-center pb-8 border-b-2 mb-16">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.handle}`}>
            <a className="mr-4 font-medium text-gray-600">{blog.title}</a>
          </Link>
        ))}
        {blogs.length <= 1 && (
          <>
            <Link href={`/blogs`}>
              <a className="mr-4 font-medium text-gray-600">Category 2</a>
            </Link>
            <Link href={`/blogs`}>
              <a className="mr-4 font-medium text-gray-600">Category 3</a>
            </Link>
          </>
        )}
      </div>
      <div className="mb-16">
        <h3 className="font-semibold mb-4">Trending Articles</h3>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
          {trendArticles?.length === 0 && (
            <>
              <Link href={`/blogs/news/${articles[0].handle}`}>
                <a>
                  <div>
                    <div className="relative sm:h-40 sm:w-60 h-60 w-96">
                      <Image src={articles[0].image.src} alt="" layout="fill" />
                    </div>
                    <h3>{articles[0].title}</h3>
                  </div>
                </a>
              </Link>
              <Link href={`/blogs/news/${articles[0].handle}`}>
                <a>
                  <div>
                    <div className="relative sm:h-40 sm:w-60 h-60 w-96">
                      <Image src={articles[0].image.src} alt="" layout="fill" />
                    </div>
                    <h3>{articles[0].title}</h3>
                  </div>
                </a>
              </Link>
              <Link href={`/blogs/news/${articles[0].handle}`}>
                <a>
                  <div>
                    <div className="relative sm:h-40 sm:w-60 h-60 w-96">
                      <Image src={articles[0].image.src} alt="" layout="fill" />
                    </div>
                    <h3>{articles[0].title}</h3>
                  </div>
                </a>
              </Link>
              <Link href={`/blogs/news/${articles[0].handle}`}>
                <a>
                  <div>
                    <div className="relative sm:h-40 sm:w-60 h-60 w-96">
                      <Image src={articles[0].image.src} alt="" layout="fill" />
                    </div>
                    <h3>{articles[0].title}</h3>
                  </div>
                </a>
              </Link>
              <Link href={`/blogs/news/${articles[0].handle}`}>
                <a>
                  <div>
                    <div className="relative sm:h-40 sm:w-60 h-60 w-96">
                      <Image src={articles[0].image.src} alt="" layout="fill" />
                    </div>
                    <h3>{articles[0].title}</h3>
                  </div>
                </a>
              </Link>
            </>
          )}
          {trendArticles?.length !== 0 &&
            trendArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blogs/${article.blog.handle}/${article.handle}`}
              >
                <a>
                  <div>
                    <div className="relative sm:h-40 sm:w-60 h-60 w-96">
                      <Image src={article.image.src} alt="" layout="fill" />
                    </div>
                    <h3>{articles.title}</h3>
                  </div>
                </a>
              </Link>
            ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-16 mt-24">
        {articles.map((article) => {
          return (
            <SingleCollection
              key={article.id}
              name={article.title}
              description={
                article.description ||
                "The founding collection. Be a victim victor of life’s circumstances."
              }
              link={`/blogs/${router.query.category}/${article.handle}`}
              imgSrc={article.image?.src || "/default2.jpg"}
              btnText="Read article"
            />
          );
        })}
      </div>
    </div>
  );
}

export default SingleBlog;

export const getServerSideProps = async (context) => {
  const handle = context.query.category;
  const blogs = await fetchBlog();
  const articles = await blogByHandle(handle);
  const trendArticles = await trendingArticles();
  return {
    props: {
      blogs,
      articles,
      trendArticles,
    },
  };
};
