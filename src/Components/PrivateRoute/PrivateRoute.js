import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';


const PrivateRouter = ({children, ...rest}) => {
    const [loggedInUser, ] = useContext(userContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivateRouter;