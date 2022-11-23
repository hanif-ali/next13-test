import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { useEffect } from "react";
import { getPost } from "../../lib/contentful/posts";

export default function Post({ post }) {
  useEffect(() => {
    fetch("/api/verifier", {
      method: "POST",
    }).then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div>
      <div>
        <Image
          src={"https:" + post.fields.hero.fields.file.url}
          width={post.fields.hero.fields.file.details.image.width}
          height={post.fields.hero.fields.file.details.image.height}
        />
      </div>
      <h1>{post.fields.title}</h1>
      <div>{documentToReactComponents(post.fields.content)}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  return {
    props: {
      post: await getPost(id),
    },
  };
}
