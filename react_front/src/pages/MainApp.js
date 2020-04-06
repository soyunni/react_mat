import React from 'react';
import { Route } from 'react-router-dom';


class MainApp extends React.Component {

  render() {
    const { match } = this.props;

    return (
      <div className="main-app-container">
        <section id="page-container" className="app-page-container">
          <div className="app-content-wrapper">
            <div className="app-content">
              <div className="h-100">
              </div>
            </div>

            <section className="app-footer">
                <div className="container-fluid">
                <span className="float-left">
                    <span>Copyright © <a className="brand" target="_blank" href="/">footer</a> footer</span>
                </span>
                <span className="float-right">
                    <span>Built with Love <i className="material-icons">favorite_border</i></span>
                </span>
                </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default MainApp;
