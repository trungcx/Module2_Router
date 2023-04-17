import React from "react";
import { useParams } from "react-router-dom";

function CourseDetailByTypeId(props) {
  const params = useParams();
  return (
    <div>
      Course Type: {params.courseType} <br />
      Course Id: {params.courseId}
    </div>
  );
}

export default CourseDetailByTypeId;
