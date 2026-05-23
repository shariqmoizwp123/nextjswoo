import Image from "next/image";

async function getPost(slug) {
  const res = await fetch(
    `https://dev-logstics.pantheonsite.io/wp-json/wp/v2/posts?slug=${slug}`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  return data?.[0] || null;
}

async function getFeaturedImage(mediaId) {
  if (!mediaId) return null;

  const res = await fetch(
    `https://dev-logstics.pantheonsite.io/wp-json/wp/v2/media/${mediaId}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data?.source_url || null;
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Post not found
      </div>
    );
  }

  // ✅ REAL FIX: direct media fetch
  const featuredImage = await getFeaturedImage(post.featured_media);

  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      {featuredImage && (
        <div className="relative h-[60vh] w-full">
          <Image
            src={featuredImage}
            alt={post?.title?.rendered || "Blog Image"}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}

      <article className="max-w-4xl mx-auto px-6 py-16">
        <h1
          className="text-4xl font-bold mb-6"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <div
          className="prose prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </main>
  );
}