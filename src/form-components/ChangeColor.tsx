import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colorList = [
        "yellow",
        "red",
        "blue",
        "green",
        "pink",
        "gray",
        "orange",
        "white",
    ];
    const [color, setColor] = useState<string>("yellow");
    const updateColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };
    return (
        <div>
            <h3>Change Color</h3>
            {colorList.map((chosenColor: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    value={chosenColor}
                    style={{ backgroundColor: chosenColor }}
                    onChange={updateColor}
                    label={
                        <span style={{ fontWeight: "bold" }}>
                            {chosenColor}
                        </span>
                    }
                    key={chosenColor}
                />
            ))}
            <div>
                Current Color:
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {" "}
                    {color}
                </span>
            </div>
        </div>
    );
}
