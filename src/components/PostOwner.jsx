import React from "react";

export const PostOwner = ({ name, studentId }) => {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src="/profileImages/Profile_pic.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5">
          {name} {studentId}
        </span>
      </div>
    </div>
  );
};
