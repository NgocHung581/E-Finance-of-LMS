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
          <li className="navbar-menu-title">
            <div className="menu-title-content menu-title-content--active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  className="navbar-menu-icon"
                  d="M9.09091 7.27273H12.7273C12.9684 7.27273 13.1996 7.17695 13.3701 7.00646C13.5406 6.83597 13.6364 6.60474 13.6364 6.36364C13.6364 6.12253 13.5406 5.8913 13.3701 5.72081C13.1996 5.55032 12.9684 5.45454 12.7273 5.45454H10.9091V4.54545C10.9091 4.30435 10.8133 4.07312 10.6428 3.90263C10.4723 3.73214 10.2411 3.63636 10 3.63636C9.7589 3.63636 9.52767 3.73214 9.35718 3.90263C9.18669 4.07312 9.09091 4.30435 9.09091 4.54545V5.45454C8.36759 5.45454 7.6739 5.74188 7.16244 6.25334C6.65098 6.76481 6.36364 7.4585 6.36364 8.18182C6.36364 8.90513 6.65098 9.59883 7.16244 10.1103C7.6739 10.6218 8.36759 10.9091 9.09091 10.9091H10.9091C11.1502 10.9091 11.3814 11.0049 11.5519 11.1754C11.7224 11.3458 11.8182 11.5771 11.8182 11.8182C11.8182 12.0593 11.7224 12.2905 11.5519 12.461C11.3814 12.6315 11.1502 12.7273 10.9091 12.7273H7.27273C7.03162 12.7273 6.80039 12.823 6.62991 12.9935C6.45942 13.164 6.36364 13.3953 6.36364 13.6364C6.36364 13.8775 6.45942 14.1087 6.62991 14.2792C6.80039 14.4497 7.03162 14.5455 7.27273 14.5455H9.09091V15.4545C9.09091 15.6956 9.18669 15.9269 9.35718 16.0974C9.52767 16.2679 9.7589 16.3636 10 16.3636C10.2411 16.3636 10.4723 16.2679 10.6428 16.0974C10.8133 15.9269 10.9091 15.6956 10.9091 15.4545V14.5455C11.6324 14.5455 12.3261 14.2581 12.8376 13.7467C13.349 13.2352 13.6364 12.5415 13.6364 11.8182C13.6364 11.0949 13.349 10.4012 12.8376 9.88971C12.3261 9.37824 11.6324 9.09091 10.9091 9.09091H9.09091C8.84981 9.09091 8.61858 8.99513 8.44809 8.82464C8.2776 8.65415 8.18182 8.42292 8.18182 8.18182C8.18182 7.94071 8.2776 7.70948 8.44809 7.53899C8.61858 7.36851 8.84981 7.27273 9.09091 7.27273ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433288 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 7.34783 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM10 18.1818C8.38179 18.1818 6.79992 17.702 5.45443 16.8029C4.10894 15.9039 3.06025 14.6261 2.44099 13.131C1.82173 11.636 1.6597 9.99092 1.9754 8.40381C2.29109 6.81669 3.07034 5.35883 4.21458 4.21458C5.35883 3.07033 6.81669 2.29109 8.40381 1.97539C9.99093 1.6597 11.636 1.82172 13.131 2.44099C14.6261 3.06025 15.9039 4.10893 16.8029 5.45442C17.702 6.79992 18.1818 8.38179 18.1818 10C18.1818 12.17 17.3198 14.251 15.7854 15.7854C14.251 17.3198 12.17 18.1818 10 18.1818Z"
                  fill="#373839"
                />
              </svg>
              <span>Quản lý học phí</span>
            </div>
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
          </li>
          <li className="navbar-menu-title">
            <div className="menu-title-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  className="navbar-menu-icon"
                  d="M9.09091 7.27273H12.7273C12.9684 7.27273 13.1996 7.17695 13.3701 7.00646C13.5406 6.83597 13.6364 6.60474 13.6364 6.36364C13.6364 6.12253 13.5406 5.8913 13.3701 5.72081C13.1996 5.55032 12.9684 5.45454 12.7273 5.45454H10.9091V4.54545C10.9091 4.30435 10.8133 4.07312 10.6428 3.90263C10.4723 3.73214 10.2411 3.63636 10 3.63636C9.7589 3.63636 9.52767 3.73214 9.35718 3.90263C9.18669 4.07312 9.09091 4.30435 9.09091 4.54545V5.45454C8.36759 5.45454 7.6739 5.74188 7.16244 6.25334C6.65098 6.76481 6.36364 7.4585 6.36364 8.18182C6.36364 8.90513 6.65098 9.59883 7.16244 10.1103C7.6739 10.6218 8.36759 10.9091 9.09091 10.9091H10.9091C11.1502 10.9091 11.3814 11.0049 11.5519 11.1754C11.7224 11.3458 11.8182 11.5771 11.8182 11.8182C11.8182 12.0593 11.7224 12.2905 11.5519 12.461C11.3814 12.6315 11.1502 12.7273 10.9091 12.7273H7.27273C7.03162 12.7273 6.80039 12.823 6.62991 12.9935C6.45942 13.164 6.36364 13.3953 6.36364 13.6364C6.36364 13.8775 6.45942 14.1087 6.62991 14.2792C6.80039 14.4497 7.03162 14.5455 7.27273 14.5455H9.09091V15.4545C9.09091 15.6956 9.18669 15.9269 9.35718 16.0974C9.52767 16.2679 9.7589 16.3636 10 16.3636C10.2411 16.3636 10.4723 16.2679 10.6428 16.0974C10.8133 15.9269 10.9091 15.6956 10.9091 15.4545V14.5455C11.6324 14.5455 12.3261 14.2581 12.8376 13.7467C13.349 13.2352 13.6364 12.5415 13.6364 11.8182C13.6364 11.0949 13.349 10.4012 12.8376 9.88971C12.3261 9.37824 11.6324 9.09091 10.9091 9.09091H9.09091C8.84981 9.09091 8.61858 8.99513 8.44809 8.82464C8.2776 8.65415 8.18182 8.42292 8.18182 8.18182C8.18182 7.94071 8.2776 7.70948 8.44809 7.53899C8.61858 7.36851 8.84981 7.27273 9.09091 7.27273ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433288 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 7.34783 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM10 18.1818C8.38179 18.1818 6.79992 17.702 5.45443 16.8029C4.10894 15.9039 3.06025 14.6261 2.44099 13.131C1.82173 11.636 1.6597 9.99092 1.9754 8.40381C2.29109 6.81669 3.07034 5.35883 4.21458 4.21458C5.35883 3.07033 6.81669 2.29109 8.40381 1.97539C9.99093 1.6597 11.636 1.82172 13.131 2.44099C14.6261 3.06025 15.9039 4.10893 16.8029 5.45442C17.702 6.79992 18.1818 8.38179 18.1818 10C18.1818 12.17 17.3198 14.251 15.7854 15.7854C14.251 17.3198 12.17 18.1818 10 18.1818Z"
                  fill="#373839"
                />
              </svg>
              <span>Quản lý lương</span>
            </div>
          </li>
          <li className="navbar-menu-title">
            <div className="menu-title-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  className="navbar-menu-icon"
                  d="M9.09091 7.27273H12.7273C12.9684 7.27273 13.1996 7.17695 13.3701 7.00646C13.5406 6.83597 13.6364 6.60474 13.6364 6.36364C13.6364 6.12253 13.5406 5.8913 13.3701 5.72081C13.1996 5.55032 12.9684 5.45454 12.7273 5.45454H10.9091V4.54545C10.9091 4.30435 10.8133 4.07312 10.6428 3.90263C10.4723 3.73214 10.2411 3.63636 10 3.63636C9.7589 3.63636 9.52767 3.73214 9.35718 3.90263C9.18669 4.07312 9.09091 4.30435 9.09091 4.54545V5.45454C8.36759 5.45454 7.6739 5.74188 7.16244 6.25334C6.65098 6.76481 6.36364 7.4585 6.36364 8.18182C6.36364 8.90513 6.65098 9.59883 7.16244 10.1103C7.6739 10.6218 8.36759 10.9091 9.09091 10.9091H10.9091C11.1502 10.9091 11.3814 11.0049 11.5519 11.1754C11.7224 11.3458 11.8182 11.5771 11.8182 11.8182C11.8182 12.0593 11.7224 12.2905 11.5519 12.461C11.3814 12.6315 11.1502 12.7273 10.9091 12.7273H7.27273C7.03162 12.7273 6.80039 12.823 6.62991 12.9935C6.45942 13.164 6.36364 13.3953 6.36364 13.6364C6.36364 13.8775 6.45942 14.1087 6.62991 14.2792C6.80039 14.4497 7.03162 14.5455 7.27273 14.5455H9.09091V15.4545C9.09091 15.6956 9.18669 15.9269 9.35718 16.0974C9.52767 16.2679 9.7589 16.3636 10 16.3636C10.2411 16.3636 10.4723 16.2679 10.6428 16.0974C10.8133 15.9269 10.9091 15.6956 10.9091 15.4545V14.5455C11.6324 14.5455 12.3261 14.2581 12.8376 13.7467C13.349 13.2352 13.6364 12.5415 13.6364 11.8182C13.6364 11.0949 13.349 10.4012 12.8376 9.88971C12.3261 9.37824 11.6324 9.09091 10.9091 9.09091H9.09091C8.84981 9.09091 8.61858 8.99513 8.44809 8.82464C8.2776 8.65415 8.18182 8.42292 8.18182 8.18182C8.18182 7.94071 8.2776 7.70948 8.44809 7.53899C8.61858 7.36851 8.84981 7.27273 9.09091 7.27273ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433288 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 7.34783 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM10 18.1818C8.38179 18.1818 6.79992 17.702 5.45443 16.8029C4.10894 15.9039 3.06025 14.6261 2.44099 13.131C1.82173 11.636 1.6597 9.99092 1.9754 8.40381C2.29109 6.81669 3.07034 5.35883 4.21458 4.21458C5.35883 3.07033 6.81669 2.29109 8.40381 1.97539C9.99093 1.6597 11.636 1.82172 13.131 2.44099C14.6261 3.06025 15.9039 4.10893 16.8029 5.45442C17.702 6.79992 18.1818 8.38179 18.1818 10C18.1818 12.17 17.3198 14.251 15.7854 15.7854C14.251 17.3198 12.17 18.1818 10 18.1818Z"
                  fill="#373839"
                />
              </svg>
              <span>Đề xuất và phê duyệt</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
