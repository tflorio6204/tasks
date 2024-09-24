import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [userAttempts, setAttemptNum] = useState<number>(3);
    const [newRequest, setNewRequest] = useState<number>(0);

    const requestAttempt = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!Number.isNaN(parseInt(event.target.value))) {
            setNewRequest(parseInt(event.target.value));
        }
    };
    return (
        <div>
            <Form.Group controlId="totalAttempt">
                <Form.Label>
                    Attempts Left: {userAttempts}
                    <Form.Control
                        type="number"
                        value={newRequest}
                        onChange={requestAttempt}
                    ></Form.Control>
                </Form.Label>
            </Form.Group>
            <div>
                <h3>Give Attempts</h3>
                <Button
                    onClick={() => {
                        setAttemptNum(userAttempts - 1);
                    }}
                    disabled={userAttempts <= 0}
                >
                    use
                </Button>
                <Button
                    onClick={() => {
                        setAttemptNum(userAttempts + newRequest);
                    }}
                >
                    gain
                </Button>
            </div>
        </div>
    );
}
