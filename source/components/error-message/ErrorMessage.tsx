import * as React from 'react';

export default class ErrorMessage extends React.Component<void, void> {
  render() {
    return (
        <div className="errorContainer">
            <img src="/assets/images/flame.png" />
            <h3>Opps! An error has occurred.</h3>
        </div>
    );
  }
}