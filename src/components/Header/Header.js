import Logo from '../../assets/images/logo.png';
import User from '../../assets/images/profile.png';
import { MdOutlineLogout } from "react-icons/md";

import './style.scss';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header-right">
        <div className="profile">
          <span>
            <h4>Username</h4>
            <p>Company Name</p>
          </span>
          <img src={User} alt="User" />
        </div>
        <span><MdOutlineLogout size={'1.3rem'} /></span>
      </div>
    </header>
  )
}

export default Header;