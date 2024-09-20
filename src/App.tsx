import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { ChangeType } from "./components/ChangeType";
import { CycleHoliday } from "./components/CycleHoliday";
import { TwoDice } from "./components/TwoDice";

function App(): React.JSX.Element {
    return (
        <div>
            <h3 className="title"> Tommys Website</h3>
            <div className="App">
                <header className="App-header">
                    Thomas Florio: UD CISC275 with React Hooks and TypeScript
                </header>
                <hr></hr>
                <Counter></Counter>
                <hr />
                <RevealAnswer></RevealAnswer>
                <hr />
                <StartAttempt></StartAttempt>
                <hr />
                <TwoDice></TwoDice>
                <hr />
                <ChangeType></ChangeType>
                <hr />
                <CycleHoliday></CycleHoliday>
            </div>
        </div>
    );
}

export default App;
