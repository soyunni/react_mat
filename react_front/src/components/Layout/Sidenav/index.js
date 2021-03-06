import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery';
import APPCONFIG from '../../../constants/appConfig';
import {
    toggleCollapsedNav
} from '../../../actions/settingsActions';
import SidenavContent from './SidenavContent';
import DEMO from '../../../constants/demoData';

class Sidebar extends React.Component {

  componentDidMount() {
    // AutoCloseMobileNav
    const { history } = this.props;
    const $body = $('#body');

    if (APPCONFIG.AutoCloseMobileNav) {
      history.listen((location) => {
        setTimeout(() => {
          $body.removeClass('sidebar-mobile-open');
        }, 0);
      });
    }
  }

  onToggleCollapsedNav = (e) => {
    const val = !this.props.navCollapsed;
    const { handleToggleCollapsedNav } = this.props;
    handleToggleCollapsedNav(val);
  }

  render() {
    const { navCollapsed } = this.props;
    let toggleIcon = null;
    if (navCollapsed) {
      toggleIcon = <i className="material-icons">radio_button_unchecked</i>;
    } else {
      toggleIcon = <i className="material-icons">radio_button_checked</i>;
    }

    return (
      <nav
        className={classnames('app-sidebar', {
          'bg-color-light': false,
          'bg-color-dark': true })}
            >
        <section className={classnames('sidebar-header', { 'bg-color-warning': true })}>
          <svg className="logo-img logo-react" viewBox="0 0 3925 3525" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="react-dot" stroke="none" cx="1960" cy="1760" r="355" />
            <g className="react-curve" strokeWidth="170" fill="none">
              <ellipse cx="2575" cy="545" rx="715" ry="1875" transform="rotate(30)" />
              <ellipse cx="1760" cy="-1960" rx="715" ry="1875" transform="rotate(90)" />
              <ellipse cx="-815" cy="-2505" rx="715" ry="1875" transform="rotate(-210)" />
            </g>
          </svg>
          <Link to="/" className="brand">TD Admin</Link>
          <a href={DEMO.link} className="collapsednav-toggler" onClick={this.onToggleCollapsedNav}>
            {toggleIcon}
          </a>
        </section>

        <section className="sidebar-content">
          <SidenavContent />
        </section>

        <section className="sidebar-footer">
          <ul className="nav">
            <li></li>
          </ul>
        </section>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  navCollapsed: state.settings.navCollapsed
});

const mapDispatchToProps = dispatch => ({
  handleToggleCollapsedNav: (isNavCollapsed) => {
    dispatch(toggleCollapsedNav(isNavCollapsed));
  },
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar));

