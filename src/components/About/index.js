import React from 'react';

class About extends React.Component {
    render(routes) {
        return (
            <div>
                About
                {this.props.children}
            </div>
        )
    }
}

export default About;