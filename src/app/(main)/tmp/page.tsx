"use client";

import axios from "axios"
import {useEffect, useState} from "react";

interface Comment {
    body: string;
    email: string;
    id: number;
    name: string;
}

export default function TmpPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        getComments()
    }, []);

    async function getComments() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
        setComments(res.data)
    }

    const handleSubmit = () => {
        setComments([
            ...comments,
            {
                id: comments.length + 1,
                name: name,
                email: email,
                body: body,
            }
        ])
        setName('')
        setEmail('')
        setBody('')
    }

    const [updateId, setUpdateId] = useState(0)
    
    const handleUpdate = (commentId: number) => {
        setUpdateId(commentId)
        setName(comments[commentId - 1].name)
        setEmail(comments[commentId - 1].email)
        setBody(comments[commentId - 1].body)
        document.getElementById('submit-button')?.classList.add('hidden')
        document.getElementById('update-button')?.classList.remove('hidden')

    }

    const handleUpdateSubmit = () => {
        setComments(comments.map((comment) => {
            if (comment.id === updateId) {
                return {
                    ...comment,
                    name: name,
                    email: email,
                    body: body,
                }
            }
            return comment
        }))
        setName('')
        setEmail('')
        setBody('')
        document.getElementById('submit-button')?.classList.remove('hidden')
        document.getElementById('update-button')?.classList.add('hidden')
    }

    return (
        <div className="bg-white h-screen w-screen p-4 pt-16">
            <h1 className="text-2xl font-bold">Comments</h1>
            {comments.map((comment) => (
                <div className="border border-gray-200 rounded-lg p-4 mb-4" onClick={() => handleUpdate(comment.id)} key={comment.id}>
                    <h2 className="font-bold">{comment.name}</h2>
                    <p className="text-gray-500">{comment.email}</p>
                    <p>{comment.body}</p>
                </div>
            ))}

            <div className="flex flex-col gap-2">
                <input className="border border-gray-200 rounded-lg p-2" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <input className="border border-gray-200 rounded-lg p-2" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input className="border border-gray-200 rounded-lg p-2" type="text" placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)}></input>
                <button id="submit-button" className="border border-gray-200 rounded-lg p-2 hover:bg-gray-200" onClick={handleSubmit}>Submit</button>
                <button id="update-button" className="border border-gray-200 rounded-lg p-2 hover:bg-gray-200 hidden" onClick={handleUpdateSubmit}>Update</button>
            </div>
        </div>
    );
}