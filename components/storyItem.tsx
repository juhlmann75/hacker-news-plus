import {useEffect, useState} from "react";
import {Spinner} from "flowbite-react";
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

    return (
        <div>
            {story.title}
        </div>
    )

}