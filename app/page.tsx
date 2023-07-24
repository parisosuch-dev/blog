import getPostMeta from "@/components/getPostMeta";
import PostPreview from "@/components/PostPreview";

const Home = () => {
  const postMeta = getPostMeta();
  const postPreviews = postMeta.map((post, index) => (
    <PostPreview key={index} {...post} />
  ));

  return (
    <div>
      {postPreviews}
    </div>
  )
}

export default Home;