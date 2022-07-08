import React from "react";
import {render, waitFor, fireEvent} from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import Dashboard from '../pages/dashboard'
import UserContext from '../context/user'
import FirebaseContext from "../context/firebase";
import LoggedInUserContext from "../context/logged-in-user";


jest.mock('../services/firebase');
jest.mock('../hooks/use-user');

describe('<Dashboard />', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the dashboard with a user profile and follows a user from suggested profiles sidebar', async () => {
        await act(async () => {
            getPhotos.mockImplementation(() => photosFixture);

            const firebase = {
                firestore: jest.fn(() => ({
                    collection: jest.fn(() => ({
                        doc: jest.fn(() => ({
                            update: jest.fn(() => Promise.resolve('User added'))
                        }))
                    }))
                }))
            }
        })

        const {getByText} = render(
            <Router>
                <FirebaseContext.Provider value={{fierbase}}>
                    <UserContext.Provider value={{user: {uid: 'Dy2RJqlLk0WJXey8TLAe8rK9kVy2', displayName:'test1'}}}>
                        <Dashboard user={{ uid: 'Dy2RJqlLk0WJXey8TLAe8rK9kVy2', displayName: 'test1' }} />
                    </UserContext.Provider>
                </FirebaseContext.Provider>
            </Router>
        );

        await waitFor(() => {
            expect(document.title).toEqual('Instagram');
        })
    })
})