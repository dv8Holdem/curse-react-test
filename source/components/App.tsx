import * as React from 'react';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';
export class App extends React.Component<void, void> {
render() {
    return (
        <div>
            <header>
                <div className="header-wrapper">
                    <div className="logo-container">
                        <img src="/assets/images/logo.png" />
                        <h4>React-Test</h4>
                    </div>
                    <nav>
                        <ul>
                            <li className="nav-home-link"><Link to='/' onlyActiveOnIndex activeClassName ="nav-active-link"><Glyphicon glyph="home" ></Glyphicon></Link></li>
                            <li className="divider"></li>
                            <li className="games-home-link"><Link to='/games' activeClassName ="nav-active-link"><Glyphicon glyph="fire" ></Glyphicon></Link></li>
                        </ul>
                    </nav>
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
