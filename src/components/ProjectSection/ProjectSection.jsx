import React, { useCallback, useEffect, useState } from "react";
import "./ProjectSection.css";
import ProjectCard from "./ProjectCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import axios from "axios";
import GraphicsCarousel from "./GraphicsCarousel";

const emptyProject = {
  name: null,
  description: null,
  svn_url: null,
  languages_url: null,
  pushed_at: null,
};
const gitHubAPI = "https://api.github.com";

function ProjectSection({ username, length, specfic }) {
  const allReposAPI = `${gitHubAPI}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${gitHubAPI}/repos/${username}`;
  const emptyProjectArr = new Array(length + specfic.length).fill(emptyProject);

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <div id="projects">
      <Container className="mx-auto">
        <h1 style={{ margin: "3rem 0 3rem" }}>
          Recent
          <br />
          Projects
          <span style={{ color: "#5f99ff" }}>+</span>
        </h1>
        <h6>GITHUB REPOSITORIES</h6>
        <Row style={{ marginBottom: "1.5rem" }}>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
            : emptyProjectArr.map((project, index) => (
                <ProjectCard
                  key={`empty-${index}`}
                  id={`empty-${index}`}
                  value={project}
                />
              ))}
        </Row>
        <h6 style={{ position: "absolute" }}>GRAPHIC DESIGN PORTFOLIO</h6>
        <GraphicsCarousel />
      </Container>
      <hr style={{ marginTop: "5rem" }} />
    </div>
  );
}

export default ProjectSection;
