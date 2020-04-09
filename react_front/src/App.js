import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider } from "@material-ui/core/styles";
import classnames from "classnames";
import loadable from 'react-loadable';
import LoadingComponent from './components/Loading';

// = styles =
// 3rd
import "./styles/bootstrap/bootstrap.scss";
// custom
import "./styles/layout.scss";
import "./styles/theme.scss";
import "./styles/ui.scss";

import lightTheme from "./components/themes/lightTheme";

let MainApp = loadable({
  loader: () => import('./components/Layout/AppLayout/MainApp'),
  loading: LoadingComponent
})
let Account = loadable({
  loader: () => import("./routes/user/Login"),
  loading: LoadingComponent
});

class App extends Component {
  componentDidMount() {
  }

  render() {
    const { match, location } = this.props;
    console.log(this.props);
    
    const isRoot = location.pathname === "/" ? true : false;
    if (isRoot) {
      return (<Redirect to={"/main"}/>);
    }
    
    return (
      <MuiThemeProvider theme={lightTheme}>
        <div id="app-inner">
          <div className="preloaderbar hide"><span className="bar"/></div>
          <div
              className={classnames("app-main h-100", {
                "fixed-header": true,
                "nav-collapsed": false,
                "nav-behind": false,
                "layout-boxed": false,
                "sidebar-sm": true
              })
              }>
            <Route path={`${match.url}main`} component={MainApp} />
            <Route path={`${match.url}login`} component={Account} />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  layoutBoxed: state.settings.layoutBoxed,
  navCollapsed: state.settings.navCollapsed,
  navBehind: state.settings.navBehind,
  fixedHeader: state.settings.fixedHeader,
  sidebarWidth: state.settings.sidebarWidth,
  theme: state.settings.theme,
});

export default connect(
  mapStateToProps
)(App);