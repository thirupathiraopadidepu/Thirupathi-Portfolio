import React from "react";
//import LinkedInIcon from "@material-ui/icons/LinkedIn";
//import EmailIcon from "@material-ui/icons/Email";
//import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
      <img className="card-img" src={'https://res.cloudinary.com/dqgfk61lv/image/upload/v1675850916/photostudio-11-designify_v1dix6.png'} alt="" />
        <h2> Hi, My Name is Thirupathirao</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS,BootStrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              .NET, NodeJs, MySQL, MongoDB, DynamoDB, CosmosDB, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
