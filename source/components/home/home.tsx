//home
import * as React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component<void, void> {
  render() {
    return (
        <div className='GameDetails--root'>
            <h5 className="bread-crumb"> Home</h5>
            <div className="container-home">
                <img src="/assets/images/flame.png" />
                <h1>Curse React Test</h1>
                <h3>Click <Link to="/games">here</Link> to view games.</h3>
            </div>
        </div>
    );
  }
}