import React, { useEffect, useLayoutEffect, useRef } from "react";

function LayoutExample() {
  const boxRef = useRef();

  useEffect(() => {
    console.log("useEffect called");
    boxRef.current.style.backgroundColor = "lightgreen";
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect called");
    boxRef.current.style.backgroundColor = "pink";
  });   

  return (
    <div
      ref={boxRef}
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: "lightblue",
        textAlign: "center",
        paddingTop: "40px",
      }}
    >
      Box
    </div>
  );
}

export default LayoutExample;
