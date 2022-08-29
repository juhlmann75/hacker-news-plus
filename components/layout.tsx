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
        <div className="container">
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="Hacker News Plus"
                />
                <meta name="og:title" content={siteTitle}/>
            </Head>
            <main>
                {children}
            </main>
        </div>
    );
}