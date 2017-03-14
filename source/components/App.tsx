import * as React from 'react';

export class App extends React.Component<void, void> {
    render() {
        return (
        	
            <div>
            	<header>Header</header>
                <div>{this.props.children}</div>
                <footer>footer</footer>
            </div>


        );
    }
}
