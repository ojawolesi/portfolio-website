import React, { useCallback, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Skeleton from "react-loading-skeleton";
import Tilt from "react-vanilla-tilt";
import "./ProjectCard.css";
import axios from "axios";

function ProjectCard({ value }) {
  const { name, description, svn_url, languages_url, pushed_at } = value;
  const options = {
    max: 15,
    speed: 1000,
    glare: true,
    maxGlare: 2,
  };
  return (
    <Col md={4}>
      <Tilt
        options={options}
        style={{ background: "black" }}
        className="card-container"
      >
        <Card className="glassmorphic-card">
          <Card.Body className="contentBox">
            <Card.Title as="h3">{name || <Skeleton />} </Card.Title>
            <Card.Text>
              {!description
                ? "Description not available at this time."
                : description || <Skeleton count={3} />}{" "}
            </Card.Text>
            {svn_url ? (
              <CardButtons svn_url={svn_url} />
            ) : (
              <Skeleton count={2} />
            )}
            <hr style={{ borderColor: "white" }} />
            {languages_url ? (
              <Language languages_url={languages_url} repo_url={svn_url} />
            ) : (
              <Skeleton count={3} />
            )}
            {value ? (
              <CardFooter repo_url={svn_url} pushed_at={pushed_at} />
            ) : (
              <Skeleton />
            )}
          </Card.Body>
        </Card>
      </Tilt>
    </Col>
  );
}

const CardButtons = ({ svn_url }) => {
  return (
    <div>
      <Button
        className="card-btn"
        href={`${svn_url}/archive/master.zip`}
        size="sm"
      >
        <i className="fas fa-file-archive" /> Download
      </Button>
      <Button
        className="card-btn"
        variant="light"
        href={svn_url}
        target=" _blank"
        size="sm"
      >
        <i className="fab fa-github" /> Repo
      </Button>
    </div>
  );
};

const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div>
      <p className="languages-text">Languages:</p>
      <div>
        {array.length
          ? array.map((language) => (
              <a
                key={language}
                className="card-link"
                href={repo_url + `/search?l=${language}`}
                target=" _blank"
                rel="noopener noreferrer"
              >
                <span className="badge language-box bg-light text-dark">
                  {language}:{" "}
                  {Math.trunc((data[language] / total_count) * 1000) / 10} %
                </span>
              </a>
            ))
          : "code yet to be deployed."}
      </div>
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="card-text">
      <small className="text-muted">Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;
