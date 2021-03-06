import React from 'react';
import ImageCycle from '../ImageCycle/index';
import styles from './ButtonClick.css';

class ButtonClick extends React.Component {
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

    render() {
        return (
            <div className={styles.test}>
                THIS IS REACT {this.state.counter}
                <button onClick={() => this.handleCounterIncrement()}>
                    Click Me
                </button>
                <ImageCycle />
            </div>
        );
    }
}

export default ButtonClick;