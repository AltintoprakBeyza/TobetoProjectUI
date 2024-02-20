import { Row } from "react-bootstrap";
import ResponseData from "../../../hooks/ResponseData";
import courseService from "../../../services/courseService";
import Courses from "../../../pages/Platform/Courses/Courses";


const EducationComponent = () => {
  const courseResponse = ResponseData(courseService.getAll(0,4));
  return (
    <Row>
      {courseResponse && courseResponse.items.map((education: any) => (
        <div key={education.id} className="col-md-3 mb-4">
          <div className="corp-edu-card">
            <div
              className="card-img"
              style={{
                backgroundImage:
                  'url("https://tobeto.s3.cloud.ngn.com.tr/23_MES_6_6c76eef420.jpg")',
              }}
            />
            <div className="card-content">
              <div className="d-flex flex-column">
                <span>{education.name}</span>
                <span className="platform-course-date">21 Eylül 2023 15:20</span>
              </div>
              <a className="apply-btn">Eğitime Git</a>
            </div>
          </div>
        </div>
      ))}
    </Row>
  );
};

export default EducationComponent;
