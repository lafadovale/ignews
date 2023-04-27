import * as prismic from "@prismicio/client";

export const repositoryName = "ignews-lpvf";

export function getPrismicClient() {
  const client = prismic.createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    routes: [
      {
        type: "post",
        path: "/posts/",
      },
    ],
  });

  return client;
}
