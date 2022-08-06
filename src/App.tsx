import React from 'react';
import './App.css';
import Counter from "./component/Counter";
import Setting from "./component/Setting/Setting";

function App() {
    return (
        <div className="App">
            <Setting/>
            <Counter/>
        </div>
    );
}

export default App;
