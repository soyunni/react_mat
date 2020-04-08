import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { MuiThemeProvider } from "@material-ui/core/styles";
import classnames from "classnames";
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import DEMO from './constants/appConfig';
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

const App = () => {
  return (
    <MuiThemeProvider theme={lightTheme}>
      <div id="app-inner">
        <div className="preloaderbar hide"><span className="bar"/></div>
        <div
            className={classnames("app-main h-100", {
              "fixed-header": DEMO.fixedHeader,
              "nav-collapsed": DEMO.navCollapsed,
              "nav-behind": DEMO.navBehind,
              "layout-boxed": DEMO.layoutBoxed,
              "theme-gray": DEMO.theme === "gray",
              "theme-dark": DEMO.theme === "dark",
              "sidebar-sm": DEMO.sidebarWidth === "small",
              "sidebar-lg": DEMO.sidebarWidth === "large"
            })
            }>
          <Route component={MainApp} path="/" />
        </div>
      </div>
    </MuiThemeProvider>
  )
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