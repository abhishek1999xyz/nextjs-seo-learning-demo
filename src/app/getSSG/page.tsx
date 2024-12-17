import Head from "next/head";
export default async function SSGPage() {
    // Fetch data at build time with revalidation
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        next: { revalidate: 10 }, // Revalidate every 10 seconds
    });
    const post = await res.json();

    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>{`${post.title} | Static Site Generation Example`}</title>
                <meta
                    name="description"
                    content={`Read the article: "${post.title}". This page demonstrates Static Site Generation (SSG) with Next.js, perfect for blogs and documentation.`}
                />
                <meta
                    name="keywords"
                    content="Next.js SSG, Static Site Generation, Next.js Data Fetching, Blog Example"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://yourwebsite.com/ssg-page" />
            </Head>

            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Static Site Generation (SSG)
                </h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h2>
                <p className="text-gray-700">{post.body}</p>
                <p className="text-sm text-gray-500 mt-4">
                    Data fetched at build time. (Revalidates every 10 seconds)
                </p>

                <p className="text-3xl text-red-500 mb-4">
                    <span className="font-bold text-black">Use Case:</span> When you have content that
                    doesn't change often (blogs, documentation, marketing pages). Content is
                    pre-generated at build time, improving performance and SEO.
                </p>
            </div>

            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "description": post.body,
                        "url": "https://yourwebsite.com/ssg-page",
                        "author": {
                            "@type": "Person",
                            "name": "Your Name",
                        },
                        "datePublished": new Date().toISOString(),
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://yourwebsite.com/ssg-page",
                        },
                    }),
                }}
            />
        </>
    );
}
