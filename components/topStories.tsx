import {useState} from "react";
import StoryItem from "./storyItem";

export default function TopStories({ data }: { data: string[] }) {

    if (!data) return null;

    const [topStories, setTopStories] = useState<string[]>(data.splice(0, 50));

    if (!topStories) return null;

    return (
        <div>
            <ul className="list-none">
                {topStories.map(topStory => (
                    <li key={topStory}>
                        <StoryItem storyId={topStory}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}