import React, { useState, useEffect } from 'react';

import Login from './Login';
import Home from './Home';
import './App.css';
import { USER_STORAGE_KEY } from '../constants';

const storeUser = (user) => {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
};

const readStoredUser = () => {
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
};

function App() {
    const storedUser = readStoredUser();
    const [user, setUser] = useState(storedUser);

    useEffect(() => {
        storeUser(user);
    }, [user]);

    const logout = () => {
        localStorage.setItem(USER_STORAGE_KEY, null);
        setUser(null);
    };

    return (
        <div className="App">
            <Login open={!user} setUser={setUser} />
            {user ? (
                <Home user={user} setUser={setUser} logout={logout} />
            ) : null}
        </div>
    );
}

export default App;
