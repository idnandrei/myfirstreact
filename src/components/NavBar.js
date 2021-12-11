const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Eiccin
        </a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="/">
              Home
            </a>
            <a class="nav-link" href="/employee">
              Employee
            </a>
            <a class="nav-link" href="/add">
              Add Employees
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
