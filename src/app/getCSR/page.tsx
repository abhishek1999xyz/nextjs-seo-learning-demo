"use client";

import { useEffect, useState } from "react";
import Head from "next/head";

interface Post {
    id: number;
    title: string;
    body: string;
}

export default function CSRPage() {
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        // Fetch data after the component mounts (client-side)
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, []);

    return (
        <>
            {/* Use Next.js Head for metadata */}
            <Head>
                <title>Client-Side Rendering (CSR) Example</title>
                <meta
                    name="description"
                    content="This page demonstrates Client-Side Rendering (CSR) in Next.js. Data is fetched on the client side after page load."
                />
                <meta
                    name="keywords"
                    content="Next.js CSR, Client-Side Rendering, Next.js Example, Dynamic Content Fetching"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://yourwebsite.com/csr-page" />
            </Head>

            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Client-Side Rendering (CSR)
                </h1>
                {post ? (
                    <>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                    </>
                ) : (
                    <p className="text-sm text-gray-500 mt-4">Loading...</p>
                )}
                <p className="text-sm text-gray-500 mt-4">
                    Data fetched on the client side after page load.
                </p>

                <p className="text-3xl text-red-500 mb-4">
                    <span className="font-bold text-black">Use Case:</span> When you need data fetched after the
                    page loads, such as when the content depends on user interaction or client-specific behavior.
                </p>
            </div>
        </>
    );
}
