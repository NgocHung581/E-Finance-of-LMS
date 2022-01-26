import { FaPlus } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import "../TuitionManagement.css";
import "./CourseDetail.css";
import iconInfo from "./image/IconInfo.png";

function CourseDetail() {
  return (
    <div className="container-board container-board-detailCourse">
      <div className="board-detailCourse-information">
        <div className="board-detailCourse-information-group">
          <div className="group-title group-title-class">
            <span className="board-detailCourse-information-class-title">
              Lớp:
            </span>
            <span className="board-detailCourse-information-class-title">
              Khoa:
            </span>
            <span className="board-detailCourse-information-class-title">
              Ngành:
            </span>
          </div>
          <div className="group-content">
            <span className="board-detailCourse-information-class-content">
              KT_197A
            </span>
            <span className="board-detailCourse-information-class-content">
              Kế toán - Kiểm toán
            </span>
            <span className="board-detailCourse-information-class-content">
              Kế toán
            </span>
          </div>
        </div>
        <div className="board-detailCourse-information-group">
          <div className="group-title group-title-program">
            <span className="board-detailCourse-information-class-title">
              Hệ đào tạo:
            </span>
            <span className="board-detailCourse-information-class-title">
              Chương trình học:
            </span>
            <span className="board-detailCourse-information-class-title">
              Niên khóa:
            </span>
          </div>
          <div className="group-content">
            <span className="board-detailCourse-information-class-content">
              Đào tạo theo tín chỉ
            </span>
            <span className="board-detailCourse-information-class-content">
              Đại trà
            </span>
            <span className="board-detailCourse-information-class-content">
              2019-2022
            </span>
          </div>
        </div>
      </div>
      <Link to="list-students" className="board-detailCourse-listStudents-btn">
        Danh sách học viên
      </Link>
      <p className="board-detailCourse-quantity">
        Số lượng biểu phí:
        <span>02</span>
      </p>
      <div className="board-detailCourse-tuition">
        <div className="board-detailCourse-tuition-header">
          <div className="board-detailCourse-tuition-title">
            Danh sách biểu phí
          </div>
          <button className="board-detailCourse-tuition-btnAdd">
            <FaPlus className="board-detailCourse-tuition-btnAdd-iconPlus" />
            Thêm biểu phí
          </button>
        </div>
        <div className="board-detailCourse-tuition-table">
          <div className="board-detailCourse-tuition-table-header">
            <span className="board-detailCourse-tuition-table-title">
              Tên biểu phí
            </span>
            <span className="board-detailCourse-tuition-table-title">
              Ngày cập nhật
            </span>
            <span className="board-detailCourse-tuition-table-title">
              Trạng thái
            </span>
            <span className="board-detailCourse-tuition-table-title">
              Xem chi tiết
            </span>
          </div>
          <ul className="board-detailCourse-tuition-table-list">
            <li className="board-detailCourse-tuition-table-item">
              <span className="tuition-table-item tuition-table-item-name">
                1. Biểu phí thu học phí
              </span>
              <span className="tuition-table-item tuition-table-item-update">
                01/07/2021
              </span>
              <span className="tuition-table-item tuition-table-item-status">
                Chưa áp dụng
                <span className="tuition-table-item-stopApply">
                  Ngừng áp dụng
                </span>
              </span>
              <span className="tuition-table-item tuition-table-item-detail">
                <img
                  src={iconInfo}
                  className="tuition-table-item-detail-icon"
                />
              </span>
            </li>
            <li className="board-detailCourse-tuition-table-item">
              <span className="tuition-table-item tuition-table-item-name">
                2. Biểu phí thu Bảo hiểm Y tế
              </span>
              <span className="tuition-table-item tuition-table-item-update">
                02/07/2021
              </span>
              <span className="tuition-table-item tuition-table-item-status">
                Đang áp dụng
                <span className="tuition-table-item-stopApply">
                  Ngừng áp dụng
                </span>
              </span>
              <span className="tuition-table-item tuition-table-item-detail">
                <img
                  src={iconInfo}
                  className="tuition-table-item-detail-icon"
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
