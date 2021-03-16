const Header = ({ brand, title }) => {
  return (
    <header className="project-header">
      <div className="project-header-container">
        <div className="project-header-title">
          <h1>{brand}</h1>
          <h2>{title}</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
