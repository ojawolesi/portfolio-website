import "./Footer.css";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <footer id="footer" className="social-footer">
      <Container>
        <div className="social-box">
          <a href="https://github.com/ojawolesi">
            <i className="social-icon fab fa-github fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/olasubomi-awolesi/">
            <i className="social-icon fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://www.behance.net/olasuboawolesi">
            <i className="social-icon fab fa-behance fa-lg"></i>
          </a>
          <a href="mailto:j.awolesi99@gmail.com">
            <i className="social-icon fas fa-envelope fa-lg"></i>
          </a>
        </div>

        <p style={{ marginBottom: "0" }}>
          <small>Coded with:</small>
        </p>
        <div className="coding-box">
          <i className="social-icon fab fa-react"></i>
          <i className="social-icon fab fa-js"></i>
          <i className="social-icon fab fa-html5"></i>
          <i className="social-icon fab fa-css3"></i>
          <i className="social-icon fab fa-bootstrap"></i>
          <i className="social-icon fab fa-aws"></i>
        </div>
        <p>
          <small>© Copyright Olasubomi Awolesi</small>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
