import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question",
    );
    function ToggleType(): void {
        setQuestion(
            question === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }
    return (
        <div>
            <Button onClick={ToggleType}>Change Type</Button>
            {question === "short_answer_question" ?
                <div> Short Answer</div>
            :   <div> Multiple Choice </div>}
        </div>
    );
}
