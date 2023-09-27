import { useState } from "react"

function UserForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    return (
        <form>
            <div>
                <label>Name</label>
                <input/>
            </div>
            <div>
                <label>Email</label>
                <input/>
            </div>
            <button>Add User</button>
        </form>
    )
}