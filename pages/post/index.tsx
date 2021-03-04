import { useRouter } from "next/router";

function TempPostPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}aadsf</div>;
}

export default TempPostPage;
