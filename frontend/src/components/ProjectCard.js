import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl, link, github }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href = {link} > Visit Website </a>
          <a href = {github} > Github Repo </a>
        </div>
      </div>
    </Col>
  )
}
