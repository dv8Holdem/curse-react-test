import * as React from 'react';
import { Well } from 'react-bootstrap';

export class App extends React.Component<void, void> {
    render() {
        return (
            <div class="wrapper">
            	<header>Header</header>
                <main id="main-content">
                    {this.props.children}
                </main>
                <footer></footer>
            </div>
        );
    }
}
