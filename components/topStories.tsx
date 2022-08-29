import {Alert, Spinner} from "flowbite-react";
import {useEffect, useState} from "react";
import StoryItem from "./storyItem";

export default function TopStories() {

    const [topStories, setTopStories] = useState<string[]>([]);
    const [isLoading, setLoading] = useState(false)

    useEffect( () => {
        const fetchQuote = async () => {
            setLoading(true)
            await fetch('/topstories')
                .then((res) => res.json())
                .then((topStoriesData) => {
                    setTopStories(topStoriesData)
                })
        }
        fetchQuote().then(() => {
            setLoading(false)
        });
    }, [])

    if (isLoading) {
        return (
            <div>
                <Spinner size="xl" aria-label="loading top stories" />
            </div>
        )
    }

    if (!topStories) return <p>No top stories</p>

    return (
        <div>
            <ul className="list-none">
                {topStories.map(topStory => (
                    <li key={topStory}>
                        <StoryItem storyId={topStory} />
                    </li>
                ))}
            </ul>
        </div>
    )
}