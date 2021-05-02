import ProjectList from './ProjectList';
import useFetch from './useFetch';

const Projects = () => {
        const {data: blogs, isPending, error} = useFetch('https://my-json-server.typicode.com/ryanfritzc/reactResume/blogs');
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <ProjectList blogs={blogs} title="My Projects"/>}
            
        </div>
    );
}
 
export default Projects;

/*
<h2 className="reference">Links to GitHub accounts</h2>
            <h2 className="reference"><a href="https://github.com/ryanfritzc">Personal GitHub</a></h2>
            <h2 className="reference"><a href="https://github.com/rfritz2-uncc">School GitHub</a></h2>
            <br></br>
            */