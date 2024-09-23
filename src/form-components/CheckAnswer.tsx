import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const setStateToText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    };
    return (
        <div>
            <Form>
                <Form.Group controlId="answer">
                    <Form.Label>
                        User Answer:
                        <Form.Control
                            type="text"
                            value={answer}
                            onChange={setStateToText}
                        />
                    </Form.Label>
                </Form.Group>
                <div>
                    <h3>Check Answer</h3>
                    {answer === expectedAnswer ?
                        <div>✔️</div>
                    :   <div>❌</div>}
                </div>
            </Form>
        </div>
    );
}
