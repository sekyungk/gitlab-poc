import Link from "next/link";

function HomePage() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/posts/1">
          <a>Posts/1</a>
        </Link>
      </li>
    </ul>
  );
}

export default HomePage;
