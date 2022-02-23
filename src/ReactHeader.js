import React from 'react';


function ReactHeader(props) {
    // default value of version is 16
    const { version = "16" } = props;
    return <h1>React {version} Documentation</h1>;
   }