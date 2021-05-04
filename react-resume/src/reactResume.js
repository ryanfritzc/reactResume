const reactResume = () => {
    return(
        <div className="home-bio">
            <h1 className="bio-title">Ryan Fritz</h1>
            <br/>
            <img src={require('./goodLookin.PNG').default} alt="" />
            <br/>
            <div>
                <h2>Education</h2>
                <ul>
                    <li>University of North Carolina at Charlotte</li>
                    <li>Bachelor of Arts in Computer Science (2021) 3.6 GPA</li>
                    <li>Information Technology Concentration</li>
                    <li>Statistics Minor</li>
                </ul>
                <h2>Classes</h2>
                <table>
                    <tr>
                        <td>Web App Design and Development</td>
                        <td>Software Architecture and Design</td>
                    </tr>
                    <tr>
                        <td>Human-Centered Design</td>
                        <td>Operating Systems and Networking</td>
                    </tr>
                    <tr>
                        <td>Software Engineering</td>
                        <td>Software Development Projects</td>
                    </tr>
                    <tr>
                        <td>Database Design</td>
                        <td>Software Testing and Assurance</td>
                    </tr>
                </table>
                <h2>Skills</h2>
                <table>
                    <tr>
                        <th>Languages: </th>
                        <td>HTML/CSS</td>
                        <td>JavaScript</td>
                        <td>Java</td>
                        <td>C#</td>
                        <td>R</td>
                    </tr>
                    <tr>
                        <th>Frameworks:</th>
                        <td>ReactJS</td>
                        <td>.NET Core</td>
                        <td>Express</td>
                        <td>Ruby-on-Rails</td>
                    </tr>
                    <tr>
                        <th>Platforms:</th>
                        <td>Windows</td>
                        <td>GitHub</td>
                        <td>AWS</td>
                    </tr>
                    <tr>
                        <th>Tools:</th>
                        <td>VS Code</td>
                        <td>Visual Studio</td>
                        <td>Eclipse</td>
                        <td>MySQL</td>
                        <td>R-Studio</td>
                    </tr>
                    <tr>
                        <th>Soft Skills:</th>
                        <td>Positivity</td>
                        <td>Fast Learner</td>
                        <td>Communication</td>
                        <td>Adaptability</td>
                        <td>Problem-Solving</td>
                    </tr>
                </table>
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
 
export default reactResume;