import React from "react";
import { useSearchParams } from "react-router-dom";

function Course(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <h3>Table Course</h3>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Course</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ReactJS</td>
            <td>1200</td>
            <td>
              <button
                onClick={() => {
                  setSearchParams({ course: "ReactJS", time: "1200" });
                }}
              >
                Detail
              </button>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>2</td>
            <td>HTML</td>
            <td>980</td>
            <td>
              <button
                onClick={() => {
                  setSearchParams({ course: "HTML", time: "980" });
                }}
              >
                Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Chi tiet khoa hoc</h3>
      <p>
        Detail course: {searchParams.get("course")} - time:{" "}
        {searchParams.get("time")}
      </p>
    </div>
  );
}

export default Course;
