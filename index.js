import React from "react";
import ReactDOM from "react-dom/client";

// react element...   =>   "object"    =>   html element (rendering)
const heading = React.createElement("h1",{id: "heading"},"hello stupid world !!!");

// JSX  =>  JSX (JavaScript XML) is a syntax extension for JavaScript 
// that allows you to write HTML-like code inside JavaScript, primarily
//  used with React to describe what the UI should look like.
 
const Jsxheading = () => <h1 id="heading">glad to be here ...</h1>

// react component...    
// 1) class based component - OLD     
// 2) functional component  - NEW   - a function that returns some jsx code (react element). 

const HeadingComponent = function() {
    return <h1>it's a functional component...</h1>;
}

// component composition...

const HeadingComponent2 = () => (
    <div id='container'>
        <Jsxheading />
        {Jsxheading()}    
        <h1>it's a functional component2...</h1>
    </div>
);

// HeadingComponent and HeadingComponent2 are same syntax

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent2/>);