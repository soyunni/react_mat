import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';//라우터를 애플리케이션 상태와 동기화 상태로 유지
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom'; //브라우저에서 사용되는 리액트 라우터.
import ScrollToTop from './components/ScrollToTop/index';
import App from './App';

class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ScrollToTop>
              <Route path="/" component={App} />
          </ScrollToTop>
        </ConnectedRouter>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
