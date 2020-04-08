import React from 'react';
import { Route } from 'react-router-dom';
import loadable from 'react-loadable';
import Header from '../Header/index';
import Sidenav from '../Sidenav/index';
import Footer from '../Footer/index';
import MainApp2 from '../../../pages/MainApp';
import LoadingComponent from '../../Loading/index';


class MainApp extends React.Component {

  render() {
    const { match } = this.props;

    return (
      <div className="main-app-container">
        <Sidenav />

        <section id="page-container" className="app-page-container">
          <Header />

          <div className="app-content-wrapper">
            <div className="app-content">
              <div className="h-100">
                <Route component={MainApp2} path="/app" />
              </div>
            </div>

            <Footer />
          </div>
        </section>
      </div>
    );
  }
}

export default MainApp;
