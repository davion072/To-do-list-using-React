import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert("Please add a text");
            return;
        }

        onAdd(text);
        setText('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input className='textBox' type="text" placeholder="Add new Task" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}



export default AddTask;