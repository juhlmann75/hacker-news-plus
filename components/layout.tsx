import Head from 'next/head';
import React from "react";

export const siteTitle = 'Hacker News Plus';

export default function Layout({
                                   children,
                                   home
                               }: {
    children: React.ReactNode,
    home?: boolean
}) {
    return (
        <div className="container mx-auto">
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/hacker-news-brands.png"/>
                <meta
                    name="description"
                    content="Hacker News Plus is a modern UI to consume Hacker News content"
                />
                <meta name="og:title" content={siteTitle}/>
            </Head>
            <main>
                {children}
            </main>
        </div>
    );
}