import React from 'react';

class TimeoutTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    handleCounterIncrement() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render(props) {
        return (
            <div>
                THIS IS REACT {this.state.counter}
                <button onClick={() => this.handleCounterIncrement()}>
                    Click Me
                </button>
            </div>
        );
    }
}

export default TimeoutTest;