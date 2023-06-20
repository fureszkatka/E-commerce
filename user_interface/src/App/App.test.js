import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import {App} from "./App"


describe("The Component is rendering everithing?", () => {
    test("Render the component?", () => {
        const { container } = render(<App />)
        expect(container.childElementCount).toBe(1)
    })
})