import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type holiday = "🎄" | "🦃" | "🐇" | "🎃" | "🎆";
    const [myHoliday, setHoliday] = useState<holiday>("🎄");
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
        const newHoliday = ALPHABETICAL_TRANSITIONS[myHoliday];
        setHoliday(newHoliday);
    }
    function changeHolidaybyYear(): void {
        const newHoliday = TOY_TRANSITIONS[myHoliday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            Holiday: {myHoliday}
            <div>
                <Button onClick={changeHolidaybyAlpha}>
                    Advance by Alphabet
                </Button>
            </div>
            <div>
                <div>
                    <Button onClick={changeHolidaybyYear}>
                        Advance by Year
                    </Button>
                </div>
            </div>
            <div />
        </div>
    );
}

// C, E, H, N, T
// Decemeber, November, March/April, October, Janurary
