import React from 'react';

export default function Register() {
    return(
        <form>
            <label>
                <p>Username</p>
                <input type="text" />
            </label>
            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            <label>
                <p>Email</p>
                <input type="email" />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}
