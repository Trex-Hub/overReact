import React from "react";
import './App.css'
import Greeting from "./component/Greeting";

const App = () => {
    return (
        <>
            {/* JSX Section Starts */}
            <h2>
                JSX Section
            </h2>
            {/* Difference between JSX and JS-HTML */}

            <div className="dummyClass">
                <h1> This is Normal JS-HTML  </h1>
            </div>

            {
                React.createElement('div', { id: 'jsxDiv', className: 'dummyClass' }, React.createElement('h1', null, 'This is JSX Based UI'))
            }

            {/* JSX Section Ends */}


            {/* Props Section Starts */}

            <h2>
                Props Section
            </h2>
            <Greeting name='Bruce Wayne' />
            <Greeting name='Clark Kent' />
            <Greeting name='Henry Allen' />
            <Greeting />

            {/* Props Section Ends */}

        </>
    )
}

export default App