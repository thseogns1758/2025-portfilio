import Link from "next/link";

const TopNav = () => {
  return (
    <div className="link-container mt-20 mb-20">
      <ul>
        <li>
          <Link className="nav-link" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/about">
            about
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/project">
            project
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/contact">
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
