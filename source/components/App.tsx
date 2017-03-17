import * as React from 'react';

export class App extends React.Component<void, void> {
render() {
    return (
        <div>
            <header>
                <div className="header-wrapper">
                    <img src="/assets/images/logo.png" />
                    <h4>Curse-React-Test</h4>
                </div>
            </header>
            <main id="main-content">
                {this.props.children}
            </main>
            <footer></footer>
        </div>
        );
    }
}
