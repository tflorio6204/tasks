import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attemptCounter, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setProgress(true);
                    setAttempt(attemptCounter - 1);
                    return;
                }}
                disabled={progress || attemptCounter <= 0}
            >
                Start Quiz {attemptCounter}
            </Button>
            <Button
                onClick={() => {
                    setProgress(false);
                    return;
                }}
                disabled={!progress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttempt(attemptCounter + 1);
                    return;
                }}
                disabled={progress}
            >
                Mulligan
            </Button>
        </div>
    );
}
