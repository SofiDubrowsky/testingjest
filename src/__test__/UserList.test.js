import {render, screen, within} from '@testing-library/react';
import UserList from '../components/UserList';

const renderComponent = () => {
    const users = [
        { name: 'jane', email: 'jane@gmail.com' },
        { name: 'sam', email: 'sam@gmail.com' }
    ];
    render(<UserList users={users} />);

    return {
        users,
    }
}

test('render one row per user', () => {
    //Render the component
    renderComponent();

    //const { container } = render(<UserList users={users} />); para el querySelectorAll 

    //Find all the rows in the table
    //screen.logTestingPlaygroundURL(); 
    // const rows = screen.getAllByRole('row') encontro 3 rows 
    
    //no esta tan bueno tener que modificar el codigo para que pase el test
    const rows = within(screen.getByTestId('users')).getAllByRole('row') 
    
    //const rows = container.querySelectorAll('tbody tr'); este es se supone el mejor
    

    //Assertion: correct number or rows in the table
    expect(rows).toHaveLength(2);

});

test('render the email and name or each user', () => {
    const { users } = renderComponent();

    for (let user of users) {
        const name = screen.getByRole('cell', { name: user.name });
        const email = screen.getByRole('cell', { name: user.email });

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
});