import React from 'react'
import { render } from '@testing-library/react'
import FirebaseContext from '../context/firebase'
import UserContext from '../context/user'
import { BrowserRouter as Router } from 'react-router-dom'
import NotFound from '../pages/not-found'

describe('<NotFound />', () => {
    it('renders the not found page with a logged in user', () => {
        const {getByText} = render(
            <Router>
                <FirebaseContext.Provider value={{}}>
                    <UserContext.Provider value={{user: {uid: 1}}}>
                        <NotFound />
                    </UserContext.Provider>
                </FirebaseContext.Provider>
            </Router>
        )
    })
})