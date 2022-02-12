import React, { useState } from "react";
import "./SidebarBtn.scss";

const SidebarBtn = ({ toggle, setToggle }) => {
    // const [toggle, setToggle] = useState(false);

    return (
        <div
            onClick={() => setToggle((p) => !p)}
            className={`sidebar__btn ${toggle ? "toggle" : ""}`}
        >
            <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default SidebarBtn;
