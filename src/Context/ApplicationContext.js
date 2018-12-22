import React from 'react';

export const ApplicationContext = React.createContext();

export const ApplicationConsumer = ApplicationContext.Consumer;

class ApplicationProvider extends React.Component {
    state = {
        user: {
            isAuthenticated: false,
            updateAuth: (val) => {
                this.isAuthenticated = val
            }
        }
    }
    render() {
        return (
            <ApplicationContext.Provider value={this.state}>
                {this.props.children}
            </ApplicationContext.Provider>
        )
    }
}

export default ApplicationProvider;