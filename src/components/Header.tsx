export default function Header() {
  return (
    <header data-bs-theme="dark">
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <img src="./asset/shield.png" width={48} height={48} />
            <h2><strong>MMO List</strong></h2>
            <h3 className="lead px-3">Find a new browser-based game to play.</h3>
          </a>
        </div>
      </div>
    </header>
  );
}
