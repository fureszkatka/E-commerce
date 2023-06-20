import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from "react";
import Menu from "./Menu";

describe("Menu renders correctly? ", ()=>{
    test("All divs are rendered? ", ()=>{
        render(<Menu/>)
        const divs = screen.getByRole("div")
        expect(divs).toBeEqualTo(2)
    })
})