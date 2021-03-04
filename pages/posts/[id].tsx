import { useRouter } from "next/router";

function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}</div>;
}

export default PostPage;
