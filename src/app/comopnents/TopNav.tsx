import Link from "next/link";

const TopNav = () => {
  return (
    <div className="link-container mt-20 mb-20">
      <ul>
        <li>
          <Link className="nav-link" href="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/home/about">
            about
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/home/project">
            project
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/home/contact">
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
