import {Navbar} from "flowbite-react";
import React from "react";
import ToggleButton from "./toggleButton";

export default function TopNavbar() {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ml-5">
      Hacker News Plus
    </span>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <ToggleButton></ToggleButton>
            </Navbar.Collapse>
        </Navbar>
    )
}