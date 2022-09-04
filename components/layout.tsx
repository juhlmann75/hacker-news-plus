import Head from 'next/head';
import React from "react";
import TopNavbar from "./topNavbar";

export const siteTitle = 'Hacker News Plus';

export default function Layout({
                                   children,
                                   home,
                                   title
                               }: {
    children: React.ReactNode,
    home?: boolean,
    title?: string
}) {

    const titleTagValue = title ? title + ' | Hacker News Plus' : siteTitle;

    return (
        <div>
            <Head>
                <title>{titleTagValue}</title>
                <link rel="icon" href="/hacker-news-brands.png"/>
                <meta
                    name="description"
                    content="Hacker News Plus is a modern UI to consume Hacker News content"
                />
                <meta name="og:title" content={siteTitle}/>
            </Head>
            <main>
                <TopNavbar></TopNavbar>
                <div className="container mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}