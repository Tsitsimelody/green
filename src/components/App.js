import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.scss';

import Login from './Login';
import Home from './Home';

const App = () => {
    const [user, setUser] = useState(false);

    useEffect(() => {
        fetch('/api/user')
            .then((res) => res.json())
            .then((res) => {
                if (res.user) {
                    setUser(res.user);
                }
            });
    }, []);

    return (
        <div>
            {user ? (
                <Router>
                    <Switch>
                        <Route path='/'>
                            <Home user={user} />
                        </Route>
                    </Switch>
                </Router>
            ) : (
                <Router>
                    <Switch>
                        <Route path='/'>
                            <Login setUser={setUser} />
                        </Route>
                    </Switch>
                </Router>
            )}
        </div>
    );
};

export default App;
