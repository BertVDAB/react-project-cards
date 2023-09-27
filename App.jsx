// STYLING
import "./css/styles.css";
import "./css/bcards.css";

// COMPONENTS
import Box from "./Box.jsx";
import Card from "./Card";

//DATA
import projectsData from "./projectsData.js";
import boxData from "./boxData.js";

function App() {
  
  const boxElement = boxData.map((box) => {
    return (
      <Box key={box.id} title={box.title} content={box.content} img={box.img} />
    );
  });
  

  const projectsElement = projectsData.map((project) => {
    return (
      <Card
        key={project.id}
        title={project.title}
        body={project.body}
        buttonText={project.buttonText}
        backgroundImage={project.backgroundImage}
        link={project.link}
        github={project.github}
      />
    );
  });

  return (
    <div className="container">
      <main>
        {boxElement}
        <div className="numberOfProjects">Number or projects: {projectsData.length}</div>;
        <div className="flex-bcards">{projectsElement}
        <br />
        
        
        </div>
      </main>
    </div>
  );
}

export default App;
