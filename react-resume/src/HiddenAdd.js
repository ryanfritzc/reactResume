import { useState } from "react";
import {useHistory} from "react-router-dom"

const HiddenAdd = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Personal');
    const [links, setLinks] = useState('')
    const[isPending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author, links};

        setIsPending(true);

        fetch('https://my-json-server.typicode.com/ryanfritzc/reactResume/db', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log('new blog added');
            setIsPending(false);
            history.push('./Projects')
        });

    }

    return ( 
        <div className="create">
            <h2>Create a new blog</h2>  
            <form onSubmit={handleSubmit}>
                <label>Project Title:</label>
                <input
                    type="text"
                    required
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Project Link:</label>
                <input
                    type="url"
                    required
                    value={links}
                    onChange = {(e) => setLinks(e.target.value)}
                />
                <label>Project Description:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Which GitHub:</label>
                <select
                    value={author}
                    onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="Personal">Personal</option>
                    <option value="School">School</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button>Adding blog...</button>}
            </form>              
        </div>
    );
}
 
export default HiddenAdd;