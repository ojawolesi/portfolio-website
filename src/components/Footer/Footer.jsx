import "./Footer.css";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <footer id="footer" className="social-footer">
      <Container>
        <div className="social-box">
          <a href="https://github.com/ojawolesi">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/olasubomi-awolesi/">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://www.behance.net/olasubomiawolesi">
            <i className="fab fa-behance fa-lg"></i>
          </a>
          <a href="mailto:j.awolesi99@gmail.com">
            <i className="fas fa-envelope fa-lg"></i>
          </a>
        </div>

        <p style={{ marginBottom: "0" }}>
          <small>Coded with:</small>
        </p>
        <div className="coding-box">
          <i className="fab fa-react"></i>
          <i className="fab fa-js"></i>
          <i className="fab fa-html5"></i>
          <i className="fab fa-css3"></i>
          <i className="fab fa-bootstrap"></i>
          <i className="fab fa-aws"></i>
        </div>
        <p>
          <small>© Copyright Olasubomi Awolesi</small>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
