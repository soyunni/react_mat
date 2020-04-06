import React from 'react';
import { Route } from 'react-router-dom';
import { MuiThemeProvider } from "@material-ui/core/styles";
import classnames from "classnames";
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import MainApp from './components/Layout/AppLayout/MainApp';
import DEMO from './constants/appConfig';

// = styles =
// 3rd
import "./styles/bootstrap/bootstrap.scss";
// custom
import "./styles/layout.scss";
import "./styles/theme.scss";
import "./styles/ui.scss";

import lightTheme from "./components/themes/lightTheme";

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
          <Route component={MainApp} path="/app" />
          <Route component={PostListPage} path={['/@:username', '/']} exact />
          <Route component={LoginPage} path="/login" />
          <Route component={RegisterPage} path="/register" />
          <Route component={WritePage} path="/write" />
          <Route component={PostPage} path="/@:username/:postId" />
        </div>
      </div>
    </MuiThemeProvider>
  )
}

export default App;
