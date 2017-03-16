import * as React from 'react';
import { Well } from 'react-bootstrap';

export class App extends React.Component<void, void> {
	render() {
		return (
			<div>
				<header>
					<div className="header-wrapper">
				   	<h4>Curse Redux Test</h4>
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
