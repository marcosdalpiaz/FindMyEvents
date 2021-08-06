import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const EventDetails = () => {
    const { id } = useParams();
    const { data: event, error, isPending } = useFetch('http://localhost:8000/events/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/events/' + event.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="event-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { event && (
                <article>
                    <h2>{ event.title }</h2>
                    <p>Written by {event.artist}</p>
                    <div>{ event.body }</div>
                    <div>{ event.location }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default EventDetails;