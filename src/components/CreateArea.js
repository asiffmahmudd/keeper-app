import React from "react";

function CreateArea({addNote, singleNote, setSingleNote}) {

    const handleChange = (e) => {
        const {name, value} = e.target
        
        setSingleNote({
            ...singleNote,
            [name]: value
        })
    }

    return (
        <div>
            <form>
                <input name="title" placeholder="Title" onChange={handleChange} value={singleNote.title} />
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={singleNote.content} />
                <button onClick={addNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
