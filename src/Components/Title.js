import React from "react";

function Title(props) {
  return (
    <div>
      <h6 className="mb-4 text-xl font-black text-left md:text-2xl text-darkgray/80">
        {props.title}
      </h6>
    </div>
  );
}

export default Title;
