import React, { PureComponent } from 'react';

class App extends PureComponent {
    render() {
      
        return (
            <div> 
                {this.props.children}
            </div>
        )
    }
}

export default App