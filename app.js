import React from "react";
const heading=React.createElement("h1",{},"Hello form React JS");

const Title = ()=>(
    <h1 className="head">This is Title component ..</h1>
)
const HeadingCompont=()=>(
    <div id="container">
        {heading}
        <Title/>
        <h1>Namast react functional component </h1>
    </div>
)








const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingCompont/>);