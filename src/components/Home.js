import React from 'react';
import './Home.scss';

const Home = ({ user }) => (
    <div className='page'>
        <div className='panel'>
            <h2> Welcome {user}</h2>
        </div>
    </div>
);

export default Home;
