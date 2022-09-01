import {Navbar} from "flowbite-react";
import React from "react";
import ToggleButton from "./toggleButton";
import {FaHackerNews} from "react-icons/fa";

export default function TopNavbar() {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">
                <FaHackerNews className="h-5 w-5 m1-5" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ml-2">
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