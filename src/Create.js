import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [artist, setArtist] = useState('');
    const [location, setLocation] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const event = { title, body, artist, location };

        setIsPending(true);

        fetch('http://localhost:8000/events', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(event)
        }).then(() => {
            console.log('new event add');
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a new Event</h2>
            <form onSubmit={handleSubmit}>
                <label>Event Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Event Description:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>                                
                <label>Event Artist:</label>
                <textarea
                    required
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                ></textarea>
                <label>Event Location:</label>
                <textarea
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                ></textarea>                                 
                { !isPending && <button>Add Event</button> }
                { isPending && <button disabled>Adding event...</button> }
            </form>
        </div>
    );
}
 
export default Create;