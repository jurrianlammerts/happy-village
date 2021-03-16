const IntroText = ({ title, body, href }) => {
  return (
    <section className="project-intro">
      <div className="project-intro-container">
        <div className="project-intro-col -left">
          <h2>{title}</h2>
        </div>
        <div className="project-intro-col -right">
          <p>
            {body}
          </p>
          <a
            className="hover-link reversed"
            href={href}
            target="_blank"
            rel="noopener"
          >
            Launch project
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroText;
