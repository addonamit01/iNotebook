import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {

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
        }
    ];

    const [notes, setNotes] = useState(noteInitial);

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;