import { render, screen, fireEvent } from '@testing-library/react'
import Form from '../components/Form1';

describe('Form Component', () => {

    let form;
    let button;
    let label1;
    let label2;
    beforeEach(() => {
        render(<Form />);
        form = screen.getByRole('form')
        button = screen.getByRole('button', { name: 'Enviar' })
        label1 = screen.getByLabelText('Nombre:')
        label2 = screen.getByLabelText('Edad:')
    })

    test('Renderiza el componente Form correctamente', () => {
        expect(formulario).toBeInTheDocument()
    })
    test('Renderiza el button y los label correctamente', () => {
        expect(button).toBeInTheDocument()
        expect(label1).toBeInTheDocument();
        expect(label2).toBeInTheDocument();
    })
    test('El botón está deshabilitado al inicio', () => {
        expect(button).toBeDisabled();
    });

    test('El botón se habilita cuando se llenan los campos', () => {
        fireEvent.change(label1, { target: { value: 'Sofi' } });
        fireEvent.change(label2, { target: { value: '26' } });

        expect(button).not.toBeDisabled();
    });

    test('El botón se habilita cuando se llena solo el campo obligatorio', () => {
        fireEvent.change(label1, { target: { value: 'Fabri' } });

        expect(button).not.toBeDisabled();
    });
    test('El botón se deshabilita cuando se llena solo el campo edad', () => {
        fireEvent.change(label2, { target: { value: '26' } });

        expect(button).toBeDisabled();
    });

})