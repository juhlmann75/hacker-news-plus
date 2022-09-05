import Layout from "../../components/layout";
import {Story} from "../../models/story";
import {useEffect, useState} from "react";
import {Card} from "flowbite-react";
import CommentComponent from "../../components/commentComponent";
import {FaExternalLinkAlt} from "react-icons/fa";

export default function Item(props: { data: Story }) {
    const story = props.data;

    let storyLink = (<div></div>)
    if (story.url) {
        let domain = new URL(story.url);
        let domainString: string = domain.hostname.replace('www.','').toString();
        storyLink = (
            <a href={story.url} target="_blank" className="hover:underline visited:text-gray-400 dark:visited:text-gray-500">
                <div className="flex items-center">
                    <p className="truncate">{domainString}</p>
                    <FaExternalLinkAlt className="ml-2 w-4 h-4"/>
                </div>
            </a>
        );
    }


    const dateTime = story.time ? new Date(story.time * 1000).toLocaleDateString("en-US") : '';

    return (
        <Layout home={false} title={story.title}>
            <div className="p-2">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 visited:text-gray-400 dark:text-white dark:visited:text-gray-500">
                    {story.title}
                </h3>
                {storyLink}
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {story.score} points by {story.by} | {dateTime} | {story.descendants} comments
                </p>
                <ul>
                    {story.kids?.map((commentId) => (
                        <li key={commentId}>
                            <CommentComponent commentId={commentId} />
                        </li>
                    ))}

                </ul>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(ctx: any) {
    const id = ctx.params.id;

    const data = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then((res) => res.json());

    return {
        props: {data}
    };

}
