
import Footer from "../Components/Footer";
import BlogPrimary from "./blog-components/BlogPrimary";
import BlogPosts from "./blog-components/BlogPosts";
import Subscribe from "./blog-components/Subscribe";

export default function BlogPage(){
  return (
    <main className="w-full overflow-x-hidden">
      <BlogPrimary />
      <BlogPosts />
      <Subscribe />
      <Footer />
    </main>
  );
}