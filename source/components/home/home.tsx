//home
import * as React from 'react';
import { Link } from 'react-router';
import { Panel } from 'react-bootstrap';
export default class Home extends React.Component<void, void> {
  render() {
    return (
        <div className='GameDetails--root'>
            <h5 className="bread-crumb"> Home</h5>
            <div className="container-home">
                <img src="/assets/images/flame.png" />
                <h1>Curse React Test</h1>
                <h5>Click <Link to="/games">here</Link> to view games.</h5>

                <div className="test-comments">
                    <Panel header="Q: Provide details on choices on UI layout?">
                        <p>For the sake of time I used some bootstrap components to create a vary simple layout. I decided to go with a card approach to render the list of games. It looks more visual appealing than just a table of games.</p>
                    </Panel>

                    <Panel header="Thank You!">
                        <p>I want to thank you for allowing me to take this test. Since this is my first time with Redux, React and Typescript I learned immensely about these frameworks from this exercise.</p>
                    </Panel>
                </div>
                
            </div>
        </div>
    );
  }
}