import { useRouter } from "next/router";

function TempPostPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}</div>;
}

export default TempPostPage;
