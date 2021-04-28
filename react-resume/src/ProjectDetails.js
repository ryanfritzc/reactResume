import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';

const ProjectDetails = () => {
    const {id} = useParams();
    const {data: project, error, isPending} = useFetch('http://localhost:8000/blogs/'+id)
    const history = useHistory();
    
    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' + project.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })

    }

    return ( 
        <div className ="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {project && (
                <article>
                    <h2>{project.title}</h2>
                    <p>Written by {project.author}</p>
                    <div>{project.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default ProjectDetails;