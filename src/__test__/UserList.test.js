import {render, screen, within} from '@testing-library/react';
import UserList from '../components/UserList';

test('render one row per user', () => {
    //Render the component
    const users = [
        { name: 'jane', email: 'jane@gmail.com' },
        { name: 'sam', email: 'sam@gmail.com' }
    ];
    render(<UserList users={users} />);

    //Find all the rows in the table
    //screen.logTestingPlaygroundURL(); 
    // const rows = screen.getAllByRole('row') encontro 3 rows 
    const rows = within(screen.getByTestId('users')).getAllByRole('row')

    //Assertion: correct number or rows in the table
    expect(rows).toHaveLength(2);

});

test('render the email and name or each user', () => {

});