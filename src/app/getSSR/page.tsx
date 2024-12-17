import Head from "next/head";

export default async function BitcoinPricePage() {
    // Fetch data on the server
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
        next: { revalidate: 0 }, // Disable caching for fresh data
    });
    const data = await res.json();
    const inrRate = parseInt(data.bpi.USD.rate_float, 10) * 84.89;

    return (
        <>
            {/* Add SEO Meta Tags */}
            <Head>
                <title>Real-Time Bitcoin Price in USD and INR</title>
                <meta
                    name="description"
                    content="Get the latest real-time Bitcoin price updates in both USD and INR. Stay updated with fresh data on every request."
                />
                <meta
                    name="keywords"
                    content="Bitcoin Price, Bitcoin Price USD, Bitcoin Price INR, Real-Time Bitcoin, Live Bitcoin Price"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="" />
            </Head>

            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
                {/* Main Content */}
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Real-Time Bitcoin Price
                </h1>
                <div className="text-center">
                    <p className="text-xl text-gray-700 mb-4">
                        <span className="font-bold text-gray-900">Bitcoin Price (USD):</span> {data.bpi.USD.rate}
                    </p>
                    <p className="text-xl text-gray-700 mb-4">
                        <span className="font-bold text-gray-900">Bitcoin Price (INR):</span> {inrRate.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        Data fetched on the server for every request.
                    </p>
                    <p className="text-3xl text-red-500 mb-4">
                        <span className="font-bold text-black">Use Case:</span> When you need fresh data on every request, such as displaying dynamic content like personalized user data or real-time updates.
                    </p>
                </div>
            </div>

            {/* Add JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Real-Time Bitcoin Price in USD and INR",
                        "description":
                            "Get real-time Bitcoin price updates in both USD and INR with fresh data fetched on every request.",
                        "url": "https://yourwebsite.com/bitcoin-price",
                        "datePublished": new Date().toISOString(),
                        "mainEntity": {
                            "@type": "FinancialProduct",
                            "name": "Bitcoin Price",
                            "priceCurrency": "USD",
                            "price": data.bpi.USD.rate_float,
                        },
                    }),
                }}
            />
        </>
    );
}
