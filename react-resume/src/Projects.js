import ProjectList from './ProjectList';
import useFetch from './useFetch';

const Projects = () => {
        const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
            <h2 className="reference">Links to GitHub pages for each project</h2>
            <h2 className="reference"><a href="https://github.com/ryanfritzc">Personal GitHub</a></h2>
            <h2 className="reference"><a href="https://github.com/rfritz2-uncc">School GitHub</a></h2>
            <br></br>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <ProjectList blogs={blogs} title="My Projects"/>}
            
        </div>
    );
}
 
export default Projects;