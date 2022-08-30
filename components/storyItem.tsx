import {useEffect, useState} from "react";
import {Card, Spinner} from "flowbite-react";
import {Story} from "../models/story";

export default function StoryItem({ storyId }: { storyId: string }) {
    const [story, setStory] = useState<Story>();
    const [isLoading, setLoading] = useState(false)

    useEffect( () => {
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
                <Spinner size="xl" aria-label="loading story" />
            </div>
        )
    }

    if (!story) return <p>No story</p>

    const dateTime = story.time ? new Date(story.time * 1000).toLocaleDateString("en-US") : '';

    return (
        <div className="p-2">
            <Card href={story.url}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {story.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {story.score} points by {story.by} | {dateTime} | {story.kids?.length} comments
                </p>
            </Card>
        </div>
    )

}