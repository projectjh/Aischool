import { useParams, useState } from "react-router-dom";
import Categories from "./Categories";
import BlogList from "./BlogList";

const BlogPage = () => {
  const params = useParams();

  const category = params.category || "blog";

  // const [search, setSearch] = useState("");
  // const onChange = (e) => {
  //   setSearch(e.target.value);
  // };

  return (
    <>
      <Categories />
      <BlogList category={category} />
    </>
  );
};

export default BlogPage;
