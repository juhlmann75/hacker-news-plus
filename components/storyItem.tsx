import {useEffect, useState} from "react";
import {Card} from "flowbite-react";
import {Story} from "../models/story";
import Link from "next/link";
import {FaExternalLinkAlt} from "react-icons/fa";

export default function StoryItem({storyId, rank}: { storyId: string, rank: number }) {
    const [story, setStory] = useState<Story>();
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const fetchQuote = async () => {
            setLoading(true)
            await fetch('/item/' + storyId)
                .then((res) => res.json())
                .then((storyData) => {
                    setStory(storyData)
                })
        }
        fetchQuote().then(() => {
            setLoading(false)
        });
    }, [])

    if (isLoading) {
        return (
            <div>
                <div role="status" className="animate-pulse mb-5">
                    <div className="h-7 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    if (!story) return null;

    const dateTime = story.time ? new Date(story.time * 1000).toLocaleDateString("en-US") : '';

    let storyLink = (<div></div>)
    if (story.url) {
        let domain = new URL(story.url);
        let domainString: string = domain.hostname.replace('www.','').toString();
        storyLink = (
            <div className="flex items-center">
                <a href={story.url} target="_blank"
                   className="hover:underline visited:text-gray-400 dark:visited:text-gray-500">
                    <p className="truncate">{domainString}</p>
                </a>
                <FaExternalLinkAlt className="ml-2 w-4 h-4"/>
            </div>
        );
    }

    return (
        <div className="p-2">
            <Card>
                <div className="flex items-center">
                    <h4 className="font-bold mr-5 text-lg">
                        {rank}.
                    </h4>
                    <div>
                        <Link href={`/post/${story.id}`}>
                            <a className="text-2xl font-bold tracking-tight text-gray-900 visited:text-gray-400 dark:text-white dark:visited:text-gray-500">
                                <p>{story.title}</p>
                            </a>
                        </Link>
                        {storyLink}
                        <Link href={`/post/${story.id}`} target='_blank'>
                            <a target='_blank'>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {story.score} points by {story.by} | {dateTime} | {story.kids?.length} comments
                                </p>
                            </a>
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    )

}