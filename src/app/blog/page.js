// app/blog/page.js

import Image from "next/image";
import Link from "next/link";

async function getPosts() {
  try {
    const res = await fetch(
      "https://dev-logstics.pantheonsite.io/wp-json/wp/v2/posts?_embed",
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm mb-6">
              Latest Articles
            </span>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              WordPress Blog
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              Latest posts from WordPress API using Next.js
            </p>
          </div>
        </div>
      </section>

      {/* POSTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {posts.length === 0 ? (
          <div className="text-center text-red-400 text-xl">
            No posts found
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const featuredImage =
                post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085";

              return (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] hover:-translate-y-2 transition duration-500"
                >
                  {/* IMAGE */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={featuredImage}
                      alt={post.title.rendered}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                      unoptimized
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <div className="text-sm text-gray-400 mb-3">
                      {new Date(post.date).toLocaleDateString()}
                    </div>

                    <h2
                      className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition"
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered,
                      }}
                    />

                    <div
                      className="text-gray-300 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    />

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-block mt-6 text-cyan-400 font-semibold hover:translate-x-2 transition"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}