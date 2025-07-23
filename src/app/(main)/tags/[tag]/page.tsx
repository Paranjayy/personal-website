 import { posts } from "#site/content";
import { slug } from "github-slugger";
import React from "react";
import { CustomLink } from "~/components/mdx";
import { PostList } from "~/components/post";
import { getPostsByTagSlug } from "~/lib/utils";

interface TagDetailPageProps {
  params: {
    tag: string;
  };
}

// Generate static params for tags
export async function generateStaticParams(): Promise<{ tag: string }[]> {
  // For static export with no blog posts, return empty array
  if (process.env.GITHUB_PAGES === "true" || posts.length === 0) {
    return [];
  }

  // Get all unique tags from posts
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tags.add(slug(tag));
    });
  });

  return Array.from(tags).map((tag) => ({ tag }));
}

const TagDetailPage: React.FC<TagDetailPageProps> = ({ params }) => {
  const { tag } = params;
  const title = tag.split("-").join(" ");

  // Since we don't have blog posts, just show empty state
  const displayPosts = getPostsByTagSlug(posts, tag);

  return (
    <div className="!mt-8">
      <h2 className="rounded-md bg-neutral-800/50 p-2 text-center text-xl">Tagged [ {title} ]</h2>

      <PostList posts={displayPosts} showRss={false} />

      <h3 className="mt-4 text-muted-foreground" id="main-nav">
        Alternatively, <CustomLink href="/tags">choose from all tags</CustomLink> or{" "}
        <CustomLink href="/blog">view all posts</CustomLink>
      </h3>
    </div>
  );
};

export default TagDetailPage;
