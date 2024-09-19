import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type holidays = "🎄" | "🦃" | "🐇" | "🎃" | "🎆";
    const [holiday, setHoliday] = useState<string>("🎄");
    const ALPHABETICAL_TRANSITIONS: Record<holidays, holidays> = {
        "🎄": "🐇",
        "🐇": "🎃",
        "🎃": "🎆",
        "🎆": "🦃",
    };
    const TOY_TRANSITIONS: Record<holidays, holidays> = {
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🎆",
        "🎆": "🐇",
    };
    return <div>Cycle Holiday</div>;
}
// C, E, H, N, T
// Decemeber, November, March/April, October, Janurary
