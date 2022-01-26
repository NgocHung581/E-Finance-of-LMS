import React, { Fragment } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import BoardSearch from "../../BoardSearch/BoardSearch";
import "./ListStudent.css";
import iconInfo from "./image/IconInfo.png";
import BoardFooter from "../../BoardFooter/BoardFooter";

const ListStudent = () => {
  return (
    <Fragment>
      <h2 className="list-student-title">Danh sách học viên</h2>
      <div className="container-board container-board-listStudent">
        <div className="board-listStudent-header">
          <span className="board-listStudent-header-className">
            Lớp KT - 19A
          </span>
          <BoardSearch />
        </div>
        <div className="board-listStudent-body">
          <div className="board-listStudent-body-header">
            <div className="board-listStudent-body-header-item">
              <span>STT</span>
            </div>
            <div className="board-listStudent-body-header-item">
              <span>Tên sinh viên</span>
              <div className="arrow-icons">
                <FaChevronUp className="arrow-icon" />
                <FaChevronDown className="arrow-icon" />
              </div>
            </div>
            <div className="board-listStudent-body-header-item">
              <span>MSSV</span>
              <div className="arrow-icons">
                <FaChevronUp className="arrow-icon" />
                <FaChevronDown className="arrow-icon" />
              </div>
            </div>
            <div className="board-listStudent-body-header-item">
              <span>Giới tính</span>
            </div>
            <div className="board-listStudent-body-header-item">
              <span>Ngày sinh</span>
            </div>
            <div className="board-listStudent-body-header-item">
              <span>Số biểu phí đã đóng</span>
            </div>
            <div className="board-listStudent-body-header-item">
              <span>Chế độ miễn giảm </span>
            </div>
            <div className="board-listStudent-body-header-item">
              <span>Trạng thái</span>
            </div>
          </div>
          <ul className="board-listStudent-body-list">
            <li className="board-listStudent-body-item">
              <span className="board-listStudent-body-item-information board-listStudent-body-item-order">
                1
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-name">
                Bùi Thế Anh
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-studentID">
                001
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-gender">
                Nam
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-DOB">
                01/07/2021
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-quantity">
                2
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-discount">
                Không
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-status board-listStudent-body-item-status--done">
                Đã thanh toán
              </span>
              <a className="board-listStudent-body-item-information">
                <img
                  className="board-listStudent-body-item-icon"
                  src={iconInfo}
                />
              </a>
            </li>
            <li className="board-listStudent-body-item">
              <span className="board-listStudent-body-item-information board-listStudent-body-item-order">
                1
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-name">
                Bùi Thế Anh
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-studentID">
                001
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-gender">
                Nam
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-DOB">
                01/07/2021
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-quantity">
                2
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-discount">
                Không
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-status board-listStudent-body-item-status--done">
                Đã thanh toán
              </span>
              <a className="board-listStudent-body-item-information">
                <img
                  className="board-listStudent-body-item-icon"
                  src={iconInfo}
                />
              </a>
            </li>
            <li className="board-listStudent-body-item">
              <span className="board-listStudent-body-item-information board-listStudent-body-item-order">
                1
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-name">
                Bùi Thế Anh
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-studentID">
                001
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-gender">
                Nam
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-DOB">
                01/07/2021
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-quantity">
                2
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-discount">
                Không
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-status board-listStudent-body-item-status--notdone">
                Chưa thanh toán
              </span>
              <a className="board-listStudent-body-item-information">
                <img
                  className="board-listStudent-body-item-icon"
                  src={iconInfo}
                />
              </a>
            </li>
            <li className="board-listStudent-body-item">
              <span className="board-listStudent-body-item-information board-listStudent-body-item-order">
                1
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-name">
                Bùi Thế Anh
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-studentID">
                001
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-gender">
                Nam
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-DOB">
                01/07/2021
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-quantity">
                2
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-discount">
                Không
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-status board-listStudent-body-item-status--done">
                Đã thanh toán
              </span>
              <a className="board-listStudent-body-item-information">
                <img
                  className="board-listStudent-body-item-icon"
                  src={iconInfo}
                />
              </a>
            </li>
            <li className="board-listStudent-body-item">
              <span className="board-listStudent-body-item-information board-listStudent-body-item-order">
                1
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-name">
                Bùi Thế Anh
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-studentID">
                001
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-gender">
                Nam
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-DOB">
                01/07/2021
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-quantity">
                2
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-discount">
                Không
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-status board-listStudent-body-item-status--done">
                Đã thanh toán
              </span>
              <a className="board-listStudent-body-item-information">
                <img
                  className="board-listStudent-body-item-icon"
                  src={iconInfo}
                />
              </a>
            </li>
            <li className="board-listStudent-body-item">
              <span className="board-listStudent-body-item-information board-listStudent-body-item-order">
                1
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-name">
                Bùi Thế Anh
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-studentID">
                001
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-gender">
                Nam
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-DOB">
                01/07/2021
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-quantity">
                2
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-discount">
                Không
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-status board-listStudent-body-item-status--done">
                Đã thanh toán
              </span>
              <a className="board-listStudent-body-item-information">
                <img
                  className="board-listStudent-body-item-icon"
                  src={iconInfo}
                />
              </a>
            </li>
            <li className="board-listStudent-body-item">
              <span className="board-listStudent-body-item-information board-listStudent-body-item-order">
                1
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-name">
                Bùi Thế Anh
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-studentID">
                001
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-gender">
                Nam
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-DOB">
                01/07/2021
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-quantity">
                2
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-discount">
                Không
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-status board-listStudent-body-item-status--done">
                Đã thanh toán
              </span>
              <a className="board-listStudent-body-item-information">
                <img
                  className="board-listStudent-body-item-icon"
                  src={iconInfo}
                />
              </a>
            </li>
            <li className="board-listStudent-body-item">
              <span className="board-listStudent-body-item-information board-listStudent-body-item-order">
                1
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-name">
                Bùi Thế Anh
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-studentID">
                001
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-gender">
                Nam
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-DOB">
                01/07/2021
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-quantity">
                2
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-discount">
                Không
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-status board-listStudent-body-item-status--done">
                Đã thanh toán
              </span>
              <a className="board-listStudent-body-item-information">
                <img
                  className="board-listStudent-body-item-icon"
                  src={iconInfo}
                />
              </a>
            </li>
            <li className="board-listStudent-body-item">
              <span className="board-listStudent-body-item-information board-listStudent-body-item-order">
                1
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-name">
                Bùi Thế Anh
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-studentID">
                001
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-gender">
                Nam
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-DOB">
                01/07/2021
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-quantity">
                2
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-discount">
                Không
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-status board-listStudent-body-item-status--done">
                Đã thanh toán
              </span>
              <a className="board-listStudent-body-item-information">
                <img
                  className="board-listStudent-body-item-icon"
                  src={iconInfo}
                />
              </a>
            </li>
            <li className="board-listStudent-body-item">
              <span className="board-listStudent-body-item-information board-listStudent-body-item-order">
                1
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-name">
                Bùi Thế Anh
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-studentID">
                001
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-gender">
                Nam
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-DOB">
                01/07/2021
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-quantity">
                2
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-discount">
                Không
              </span>
              <span className="board-listStudent-body-item-information board-listStudent-body-item-status board-listStudent-body-item-status--done">
                Đã thanh toán
              </span>
              <a className="board-listStudent-body-item-information">
                <img
                  className="board-listStudent-body-item-icon"
                  src={iconInfo}
                />
              </a>
            </li>
          </ul>
          <span className="board-listStudent-body-total">
            Tổng số sinh viên: 40
          </span>
        </div>
        <BoardFooter />
      </div>
    </Fragment>
  );
};

export default ListStudent;
