import ProjectList from './ProjectList';
import useFetch from './useFetch';

const Home = () => {

    const {data: projects, isPending, error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {projects && <ProjectList projects={projects} title="List of all my projects"/>}
        </div>
    );
}
             
export default Home;