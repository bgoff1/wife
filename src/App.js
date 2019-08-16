import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: `rgba(255, 255, 255, 0.2)`,
            backgroundColor: `rgb(0, 0, 0)`
        }
    }

    getColor() {
        const rgb = [];
        for (let i = 0; i < 3; i++) {
            const r = Math.floor(Math.random() * 256);
            rgb.push(r);
        }
        return rgb;
    }

    render() {
        return (
            <div className="App">
                <header className="App-header" style={ { backgroundColor: this.state.backgroundColor } }
                        onClick={ () => {
                            this.setState({ backgroundColor: `rgb(${ this.getColor() })` });
                            this.setState({ color: `rgb(${ this.getColor() }` });
                        } }>
                    <span id='wife' style={ { color: this.state.color } }>I love my wife</span>
                </header>
            </div>
        );
    }
}

export default App;
