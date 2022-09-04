import {useState} from "react";
import StoryItem from "./storyItem";
import Link from "next/link";

export default function TopStories({data}: { data: string[] }) {

    if (!data) return null;

    const [topStories, setTopStories] = useState<string[]>(data.slice(0, 30));

    if (!topStories) return null;

    return (
        <div className="p-2">
            <ul className="list-none">
                {topStories.map((topStory, index) => (
                    <li key={topStory}>
                        <StoryItem storyId={topStory} rank={index + 1}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}
