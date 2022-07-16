/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as PinterestLogo } from "assets/pinterest-logo.svg";
import { ReactComponent as Message } from "assets/message.svg";
import { ReactComponent as Ring } from "assets/ring.svg";
import { ReactComponent as Arrow } from "assets/arrow.svg";
import profileImg from "assets/profile.jpg";
import "./styles.scss";

type NavbarProps = {};

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="item link">
        <PinterestLogo color="#c00" />
      </a>

      <a href="#" className="item initial-page">
        Página inicial
      </a>

      <a href="#" className="item today">
        Hoje
      </a>

      <a href="#" className="item create">
        Criar
        <Arrow />
      </a>

      <div className="search">Search</div>

      <a href="#" className="item link">
        <Message />
      </a>

      <a href="#" className="item link">
        <Ring />
      </a>

      <a href="#" className="item link profile">
        <img src={profileImg} alt="" />
      </a>

      <a href="#" className="item link profile-more">
        <Arrow />
      </a>
    </nav>
  );
}

export default Navbar;
