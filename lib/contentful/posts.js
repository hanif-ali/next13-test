const contentful = require("contentful");

const client = contentful.createClient({
  space: "edy1q5ixfdx4",
  environment: "master", // defaults to 'master' if not set
  accessToken: "q6bW-awlGAxQsKEZgGpHiGrYiNou032of6TlLU_YTGQ",
  resolveLinks: true,
});

export async function getAllPosts() {
  return await client.getEntries({ content_type: "post" }).then((response) => {
    return { posts: response.items, assets: response.includes.Asset };
  });
}

export async function getPost(id) {
  return await client
    .getEntry(id, { content_type: "post" })
    .then((response) => {
      console.log(response);
      return response;
    });
}
