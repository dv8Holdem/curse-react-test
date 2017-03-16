import * as React from 'react';

export default class Spinner extends React.Component<void, void> {
  render() {
    return (
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>

    );
  }
}