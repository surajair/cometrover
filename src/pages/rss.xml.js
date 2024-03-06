import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context) {
  const blogs = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: blogs.map((blog) => ({
      ...blogs.data,
      pubDate: blog.data.publishedDate,
      link: `/blog/${blog.slug}/`,
    })),
  });
}
