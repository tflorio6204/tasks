import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    const updateChoice = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setChoice(event.target.value);
    };
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="userAnswer">
                    <Form.Label>Choose the best answer:</Form.Label>
                    <Form.Label>
                        <Form.Select value={choice} onChange={updateChoice}>
                            {options.map((option: string) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Label>
                </Form.Group>
            </div>
            <div>
                {choice === expectedAnswer ?
                    <div>Correct: ✔️</div>
                :   <div>Incorrect: ❌</div>}
            </div>
        </div>
    );
}
