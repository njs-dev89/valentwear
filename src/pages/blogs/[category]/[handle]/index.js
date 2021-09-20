import {
  articleByHandle,
  fetchBlog,
  trendingArticles,
} from "../../../../utils/operations";
import Link from "next/link";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import Head from "next/head";
function SingleArticle({ blogs, article, trendArticles }) {
  const router = useRouter();
  const date = new Date(article.publishedAt);
  return (
    <div>
      <Head>
        <title>
          {article.title} | {router.query.category}
        </title>
        <meta
          name="description"
          content="Valent was created to serve as a reminder that choice is at the heart of life. We can’t control the circumstances around us, but we can control how we respond in the face of adversity."
        />
      </Head>
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
      <div className="grid md:grid-cols-3 grid-cols-1 px-20 gap-12 mx-auto">
        <div className="md:col-span-2">
          <div className="relative h-96">
            <Image src={article.image.src} alt="" layout="fill" />
          </div>
          <h1 className="text-4xl font-bold mt-8 mb-4">{article.title}</h1>
          <div className="flex mb-8">
            <h3 className="mr-8 font-medium">{article.authorV2.name}</h3>
            <p className="font-medium">
              {date.getDate() +
                "/" +
                (parseInt(date.getMonth()) + parseInt(1)) +
                "/" +
                date.getFullYear()}
            </p>
          </div>
          <p className="font-medium">{article.content}</p>
        </div>
        <div className="col-span-1">
          <label htmlFor="search" className="font-semibold ">
            Search Articles
          </label>
          <div className="relative mt-4">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="bg-white w-full h-10 px-10 pr-10 border-2 border-black text-sm focus:outline-none"
            />
            <span className="absolute left-0 top-0 mt-3 ml-4">
              <FiSearch className="h-4 w-4 " />
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <h3 className="font-semibold ">Trending Articles</h3>
            {trendArticles?.length === 0 && (
              <>
                <div className="flex gap-4 text-sm items-center">
                  <div className="relative sm:h-24 sm:w-64 h-60 w-96">
                    <Image src={article.image.src} alt="" layout="fill" />
                  </div>
                  <Link href={`/blogs/news/${article.handle}`}>
                    <a>
                      <h3>{article.title}</h3>
                    </a>
                  </Link>
                </div>

                <div className="flex gap-4 text-sm items-center">
                  <div className="relative sm:h-24 sm:w-64 h-60 w-96">
                    <Image src={article.image.src} alt="" layout="fill" />
                  </div>
                  <Link href={`/blogs/news/${article.handle}`}>
                    <a>
                      <h3>{article.title}</h3>
                    </a>
                  </Link>
                </div>

                <div className="flex gap-4 text-sm items-center">
                  <div className="relative sm:h-24 sm:w-64 h-60 w-96">
                    <Image src={article.image.src} alt="" layout="fill" />
                  </div>
                  <Link href={`/blogs/news/${article.handle}`}>
                    <a>
                      <h3>{article.title}</h3>
                    </a>
                  </Link>
                </div>

                <div className="flex gap-4 text-sm items-center">
                  <div className="relative sm:h-24 sm:w-64 h-60 w-96">
                    <Image src={article.image.src} alt="" layout="fill" />
                  </div>
                  <Link href={`/blogs/news/${article.handle}`}>
                    <a>
                      <h3>{article.title}</h3>
                    </a>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleArticle;

export const getServerSideProps = async (context) => {
  const category = context.query.category;
  const handle = context.query.handle;
  console.log(category, handle);
  const blogs = await fetchBlog();
  const article = await articleByHandle(category, handle);
  const trendArticles = await trendingArticles();
  return {
    props: {
      blogs,
      article,
      trendArticles,
    },
  };
};
