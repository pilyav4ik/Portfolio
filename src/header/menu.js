import Link from "next/link";
import { useRouter } from "next/router";

const Menu = () => {
  const activeLink = useRouter();

  return (
    <div className="d-flex">
      <div class="" id="navbarSupportedContent">
        <ul class="navbar-nav list-group-horizontal mb-2 mb-lg-0 text-right">
          <li class="nav-item">
            <Link
              href={"/"}
              className={activeLink.pathname == "/" ? "active" : ""}
            >
              Dev
            </Link>
          </li>
          <li class="nav-item">
            <Link
              href={"/design"}
              className={activeLink.pathname == "/design" ? "active" : ""}
            >
              Design
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
