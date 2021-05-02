import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';

const ProjectDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('./db.json'+id)
    const history = useHistory();
    
    const handleClick = () =>{
        fetch('./db.json' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/Projects');
        })

    }

    return ( 
        <div className ="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Project: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button><a href={blog.links} target="_blank">Link to project</a></button>
                    <button onClick={handleClick} hidden>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default ProjectDetails;