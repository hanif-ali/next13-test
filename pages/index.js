import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "../lib/contentful/posts";
import styles from "../styles/Home.module.css";

export default function Home({ posts, assets }) {
  console.log(assets, posts);
  const getImage = (imageId) => {
    const image = assets.find((asset) => asset.sys.id === imageId);
    return (
      <Image
        src={"https:" + image.fields.file.url}
        width={image.fields.file.details.image.width}
        height={image.fields.file.details.image.height}
      />
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>My Blog</h1>
        {posts.map((post) => (
          <div key={post.sys.id}>
            {getImage(post.fields.hero.sys.id)}
            <Link href={`/posts/${post.sys.id}`}>{post.fields.title}</Link>
          </div>
        ))}
      </header>
    </div>
  );
}

export async function getServerSideProps() {
  const { assets, posts } = await getAllPosts();

  return {
    props: {
      posts,
      assets,
    },
  };
}
