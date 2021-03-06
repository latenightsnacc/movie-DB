import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="wrapper">
                    <div className="container">
                        <div className="error404">
                            <h1>404 (Page Not Found)</h1>
                            <Link className="goBack" to="/"><i className="fa fa-arrow-left"></i>  Go back </Link>
                        </div>
                        
                    </div>
                </div>  
            );
        }

        return this.props.children;
    }
}

