import { Link } from "react-router-dom";
import avaUser from "./image/user_circle.png";
import "./Account.css";

function Account() {
  return (
    <div className="container-account">
      <img src={avaUser} className="account-avatar" />
      <p className="account-name">User Name</p>
      <Link to="/" className="account-logout">
        Đăng xuất
      </Link>
    </div>
  );
}

export default Account;
