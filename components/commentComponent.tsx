import {useEffect, useState} from "react";
import {CommentItem} from "../models/commentItem";
import {Card} from "flowbite-react";

export default function CommentComponent({commentId}: { commentId: number }) {
    const [comment, setComment] = useState<CommentItem>();
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const fetchQuote = async () => {
            setLoading(true)
            await fetch('/item/' + commentId)
                .then((res) => res.json())
                .then((storyData) => {
                    setComment(storyData)
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

    if (!comment || !comment.text) return null;

    const dateTime = comment.time ? new Date(comment.time * 1000).toLocaleDateString("en-US") : '';

    return (
        <div className="p-4 border-l-2 m-2">
            <div dangerouslySetInnerHTML={{__html: comment.text}}></div>
            <p>- {comment.by}</p>
            <ul>
                {comment.kids?.map((kidCommentId) => (
                    <li key={kidCommentId}>
                        <CommentComponent commentId={kidCommentId}/>
                    </li>
                ))}
            </ul>
        </div>
    )

}