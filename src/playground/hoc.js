// Higher Order Component (HOC) - A component(HOC) that renders another component
// Reuse code
// Render hijacking
// Props manipulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> Info</h1>
        <p> This id info: {props.info} </p>
    </div>
);

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>This is private info, plase don't share!</p>}
//             <WrappedComponent {...props} />
//         </div>
//     );
// };

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            <h1>Heloo</h1>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please authenticate</p>}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="Info here!" />, document.getElementById('app'));