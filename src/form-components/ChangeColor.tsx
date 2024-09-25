import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colorList = [
        "Yellow",
        "Red",
        "Blue",
        "Green",
        "Pink",
        "Black",
        "Orange",
        "White",
    ];
    const [color, setColor] = useState<string>(colorList[0]);
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
                    onChange={updateColor}
                    label={chosenColor}
                    key={chosenColor}
                />
            ))}
        </div>
    );
}
