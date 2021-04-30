//import ProjectList from './ProjectList';
//import useFetch from './useFetch';

const Home = () => {
    return(
        <div className="home-bio">
            <h1 className="bio-title">Ryan Fritz</h1>
            <br/>
            <img src={require('./goodLookin.PNG').default} />
            <br/>
            <div>
                <h2>Education</h2>
                <ul>
                    <li>Graduating from The University of North Carolina at Charlotte</li>
                    <li>Overal GPA: 3.4</li>
                    <li>Concentration: Information Technology - 3.6 GPA</li>
                    <li>Minor: Statistics - 3.4 GPA</li>
                </ul>
                <h2>Skills</h2>
                <ul>
                    <li>Proficient in Java, C#, HTML/CSS/JavaScript, and R</li>
                    <li>Experienced with Eclipse, R Studio, Visual Studio/Visual Studio Code, 
                        Ruby on Rails, MYSQL, AWS, GitHub, React Framework, Express Framework,
                        and the Agile development process
                    </li>
                    <li>Able to stay composed working with hostile customers/clients/coworkers</li>
                    <li>Team centered and willing to help solve problems</li>
                    <li>Always willing to learn to better my productivity and not afraid to ask questions</li>
                </ul>
                <h2>Work Experience</h2>
                <ul>
                    <li>Sam's Club Front end assistant | Raleigh, NC | 2020-2021</li>
                    <li>Chipotle Mexican grill crew man | Raleigh, NC | 2019-2020</li>
                    <li>University of North Carolina at Charlotte | Charlotte, NC | 2018-2019</li>
                    <li>Gonza’s tacos y tequila | Raleigh, NC | 2016-2017</li>
                </ul>
                <h2>Links</h2>
                <ul>
                    <li><a href="https://www.linkedin.com/in/ryan-fritz-60772814a/">LinkedIn</a></li>
                    <li><a href="https://github.com/ryanfritzc">Personal GitHub</a></li>
                    <li><a href="https://github.com/rfritz2-uncc">School GitHub</a></li>
                    
                </ul>

            </div>
        </div>
        
        
        
    );
}
 
export default Home;