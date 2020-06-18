import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import FallbackSuspense from './FallbackSuspense'

const PrivateRoute = ({ isAuthLoading, isAuthenticated, active, role, component: Component, ...rest }) => {
    return (


        <Route {...rest} render={props => (
            isAuthLoading === true && isAuthenticated === null ?
                <FallbackSuspense />
                : isAuthLoading === false && isAuthenticated === false ?
                    <Redirect to="/login?track=notauthenticated" /> :
                    isAuthLoading === false && isAuthenticated === null ?
                        <Redirect to="/login?track=notauthenticated" /> :
                        active === false ?
                            <Redirect to="/deactivated" /> :
                            <Component {...props} />
        )} />
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isAuthLoading: state.auth.isLoading,
    active: state.auth.active,
    role: state.auth.role,
    userData: state.auth.user,
});

export default connect(mapStateToProps, {})(PrivateRoute)
