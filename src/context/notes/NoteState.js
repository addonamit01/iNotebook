import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const noteInitial = [
        {
            "_id": "6353b6b6ddc8a3236ab76f29",
            "user": "635279825bd3c1b3b6f5bdfd",
            "title": "My Title 1",
            "description": "Description 1",
            "tag": "New",
            "date": "2022-10-22T09:24:06.504Z",
            "__v": 0
        },
        {
            "_id": "6353d9a86a61850a93a21f7c",
            "user": "635279825bd3c1b3b6f5bdfd",
            "title": "My Title 2",
            "description": "Description 2",
            "tag": "New 2",
            "date": "2022-10-22T11:53:12.474Z",
            "__v": 0
        },
        {
            "_id": "6354163e160089fca9332991",
            "user": "635279825bd3c1b3b6f5bdfd",
            "title": "My Title 3",
            "description": "Description 3",
            "tag": "New 3",
            "date": "2022-10-22T16:11:42.751Z",
            "__v": 0
        },
        {
            "_id": "6354164a160089fca9332993",
            "user": "635279825bd3c1b3b6f5bdfd",
            "title": "My Title 4",
            "description": "Description 4",
            "tag": "New 4",
            "date": "2022-10-22T16:11:54.264Z",
            "__v": 0
        },
        {
            "_id": "63541651160089fca9332995",
            "user": "635279825bd3c1b3b6f5bdfd",
            "title": "My Title 5",
            "description": "Description 5",
            "tag": "New 5",
            "date": "2022-10-22T16:12:01.072Z",
            "__v": 0
        },
        {
            "_id": "63541657160089fca9332997",
            "user": "635279825bd3c1b3b6f5bdfd",
            "title": "My Title 6",
            "description": "Description 6",
            "tag": "New 6",
            "date": "2022-10-22T16:12:07.866Z",
            "__v": 0
        },
        {
            "_id": "6354165d160089fca9332999",
            "user": "635279825bd3c1b3b6f5bdfd",
            "title": "My Title 7",
            "description": "Description 7",
            "tag": "New 7",
            "date": "2022-10-22T16:12:13.782Z",
            "__v": 0
        },
        {
            "_id": "63541664160089fca933299b",
            "user": "635279825bd3c1b3b6f5bdfd",
            "title": "My Title 8",
            "description": "Description 8",
            "tag": "New 8",
            "date": "2022-10-22T16:12:20.866Z",
            "__v": 0
        }
    ];

    const [notes, setNotes] = useState(noteInitial);

    // Get All Notes
    const getNotes = async () => {
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });

        const json = await response.json();
        setNotes(json);
    }

    // Add Note
    const addNote = async (title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });

        const note = await response.json();
        setNotes(notes.concat(note));
    }

    // Delete Note
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    // Edit Note
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();

        let newNotes = JSON.parse(JSON.stringify(notes));

        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;