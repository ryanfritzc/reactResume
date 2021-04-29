import ProjectList from './ProjectList';
import useFetch from './useFetch';

const Projects = () => {
        const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <ProjectList blogs={blogs} title="My Projects"/>}
        </div>
    );
}
 
export default Projects;