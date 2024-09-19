import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [d1Value, setD1Value] = useState<number>(1);
    const [d2Value, setD2Value] = useState<number>(2);
    return (
        <div>
            <div>
                <Button
                    onClick={() => {
                        setD1Value(d6());
                    }}
                >
                    {" "}
                    Roll Left{" "}
                </Button>
                <span data-testid="left-die">Dice: {d1Value}</span>
            </div>
            <div>
                <Button
                    onClick={() => {
                        setD2Value(d6());
                    }}
                >
                    {" "}
                    Roll Right{" "}
                </Button>
                <span data-testid="right-die">Dice: {d2Value}</span>
            </div>
        </div>
    );
}
