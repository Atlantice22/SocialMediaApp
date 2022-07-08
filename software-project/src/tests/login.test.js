import React from 'react'
import {render, fireEvent, waitFor} from '@testing-library/react'
import FirebaseContext from '../context/firebase';
import Login from '../pages/login';
import { BrowserRouter as Router } from 'react-router-dom';


const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ... jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush
    })
}));

describe('<Login />', () => {
    it('renders the login page with a form submission and logs the user in', () => {
        const succedToLogin = jest.fn(() => Promise.resolve('I am signed in!'));

        const firebase = {
            auth: jest.fn(() => ({
                signWithEmailAndPassword: succedToLogin
            }))
        }

        const { getByTestId, getByPlaceholderText, queryByTestId} = render(
        <Router>
        <FirebaseContext.Provider value={{ firebase }}>
        <Login />
        </FirebaseContext.Provider>
        </Router>
        );

        expect(document.title).toEqual('Instagram');

        fireEvent.change(getByPlaceholderText('Email address'), {
            target: { value: 'test1@gmail.com'}
        });

        fireEvent.change(getByPlaceholderText('Password'), {
            target: { value: 'test-password'}
        });

        fireEvent.submit(getByTestId('login'));
    });
});