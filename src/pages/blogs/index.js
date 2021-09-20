import { useRouter } from "next/router";
import { useEffect } from "react/cjs/react.development";
import { fetchBlog } from "../../utils/operations";

function Blogs({ blogs }) {
  console.log(blogs);
  const router = useRouter();

  useEffect(() => {
    router.push(`/blogs/${blogs[0].handle}`);
  }, [router, blogs]);
  return <></>;
}

export default Blogs;

export const getServerSideProps = async (context) => {
  const blogs = await fetchBlog();

  return {
    props: {
      blogs: blogs,
    },
  };
};
