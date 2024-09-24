import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editable, setMode] = useState<boolean>(false);
    const [username, setUser] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    const changeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMode(event.target.checked);
    };
    const changeVerification = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStudent(event.target.checked);
    };
    const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    };
    return (
        <div>
            Switch Mode?
            <Form.Check
                type="switch"
                id="isEditable"
                checked={editable}
                onChange={changeMode}
            />
            Are you a student?
            <Form.Check
                type="checkbox"
                id="isStudent"
                checked={student}
                onChange={changeVerification}
                disabled={!editable}
            />
            <h3>Edit Mode</h3>
            {!editable ?
                student ?
                    <div> {username} is a student </div>
                :   <div> {username} is not a student </div>
            :   <div>
                    <Form.Label>
                        Name:
                        <Form.Control
                            value={username}
                            onChange={changeName}
                        ></Form.Control>
                    </Form.Label>
                </div>
            }
        </div>
    );
}
