import React from "react";
import {render, fireEvent} from '@testing-library/react'
import Form from "../components/Form";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

test("renders form properly", () => {
    const {getByText, getByLabelText} = render(<Form/>);

    const nameLabel = getByText(/Name:/i)

    const ageLabel = getByText(/Age:/i)
    expect(nameLabel).toBeInTheDocument();
    expect(ageLabel).toBeInTheDocument();

    const input = getByLabelText(/Age:/i);
    expect(input).toHaveAttribute('type', 'number');
})

test("btn should be disabled for empty name", () => {
    const {getByLabelText, getByRole} = render(<Form/>);

    const nameInput = getByLabelText(/Name:/i)
    fireEvent.change(nameInput, {'target': {'value': ''}})
    const btn = getByRole('button', {name: 'Submit'})
    expect(btn).toHaveAttribute('disabled');
})

test("btn should be enabled for non empty name", () => {
    const {getByLabelText, getByRole, debug} = render(<Form/>);

    const nameInput = getByLabelText(/Name:/i)
    fireEvent.change(nameInput, {'target': {'value': ''}})
    const btn = getByRole('button', {name: 'Submit'})
    expect(btn).toHaveAttribute('disabled');
    //debug(btn)
    fireEvent.change(nameInput, {'target': {'value': 'sofi'}})
    //debug(btn)
    expect(btn).not.toHaveAttribute('disabled');
})
