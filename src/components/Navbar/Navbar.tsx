import "./Navbar.css";
import logo from "./image/Logo.png";
import money from "./image/IconMoney.png";
import basicMoney from "./image/IconBasicMoney.png";
import folder from "./image/IconFolder.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <img className="navbar-logo" src={logo} />
        <div className="navbar-icons">
          <img className="navbar-icon navbar-icon--active" src={money} />
          <img className="navbar-icon" src={basicMoney} />
          <img className="navbar-icon" src={folder} />
        </div>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-menu-list">
          <li className="navbar-menu-title navbar-menu-title--active">
            <span className="menu-title-content">
              Quản lý học phí
              <ul className="menu-title-list">
                <li className="menu-title-item menu-title-item--active ">
                  Danh sách lớp học
                </li>
                <li className="menu-title-item">Danh sách biểu phí</li>
                <li className="menu-title-item">Danh sách khoản thu</li>
                <li className="menu-title-item">Hình thức thu</li>
                <li className="menu-title-item">Danh sách chế độ miễn giảm</li>
                <li className="menu-title-item">Thu học phí</li>
              </ul>
            </span>
          </li>
          <li className="navbar-menu-title">
            <span className="menu-title-content">Quản lý lương</span>
          </li>
          <li className="navbar-menu-title">
            <span className="menu-title-content">Đề xuất và phê duyệt</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
