import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type holiday = "🎄" | "🦃" | "🐇" | "🎃" | "🎆";
    const [myHoliday, setHoliday] = useState<{
        alphaHoliday: holiday; // code written by ChatGPT
        yearHoliday: holiday;
    }>({
        alphaHoliday: "🎄",
        yearHoliday: "🎃",
    });
    const ALPHABETICAL_TRANSITIONS: Record<holiday, holiday> = {
        "🎄": "🐇",
        "🐇": "🎃",
        "🎃": "🎆",
        "🎆": "🦃",
        "🦃": "🎄",
    };
    const TOY_TRANSITIONS: Record<holiday, holiday> = {
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🎆",
        "🎆": "🐇",
        "🐇": "🎃",
    };
    function changeHolidaybyAlpha(): void {
        const newHoliday = ALPHABETICAL_TRANSITIONS[myHoliday.alphaHoliday];
        setHoliday((prev) => ({
            //code written by ChatGPT
            ...prev,
            alphaHoliday: newHoliday,
        }));
    }
    function changeHolidaybyYear(): void {
        const newHoliday = TOY_TRANSITIONS[myHoliday.yearHoliday];
        setHoliday((prev) => ({
            //code written by ChatGPT
            ...prev,
            yearHoliday: newHoliday,
        }));
    }
    return (
        <div>
            <div>
                <Button onClick={changeHolidaybyAlpha}>
                    Advance by Alphabet
                </Button>{" "}
                <div>Holiday:</div>
            </div>
            <div>
                <Button onClick={changeHolidaybyYear}>Advance by Year</Button>
                <div>Holiday:</div>
            </div>
        </div>
    );
}

//{myHoliday.yearHoliday}
//{myHoliday.alphaHoliday}
// C, E, H, N, T
// Decemeber, November, March/April, October, Janurary
