import React from "react";
export default function details(props) {
  return (
    <div>
      <input
        type={props.type}
        className="details"
        placeholder={props.content}
      />
      <br />
    </div>
  );
}
details.defaultProps={
  type:"text"
}
