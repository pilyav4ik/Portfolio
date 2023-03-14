import Menu from "./menu";

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Logo
          </a>
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
