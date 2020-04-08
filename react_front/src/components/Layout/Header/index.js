import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import NavRightList from './NavRightList';
import $ from 'jquery';
import DEMO from '../../../constants/demoData';


class Header extends React.Component {
  componentDidMount() {
    const sidebarToggler = this.sidebarBtn;
    const $sidebarToggler = $(sidebarToggler);
    const $body = $('#body');

    $sidebarToggler.on('click', (e) => {
      // _sidebar.scss, _page-container.scss
      $body.toggleClass('sidebar-mobile-open');
    });
  }

  render() {

    return (
      <section className="app-header">
        <div
          className={classnames('app-header-inner', { 'bg-color-warning': true })} >
          <div className="d-lg-none d-xl-none float-left">
            <a href="/" className="header-icon toggle-sidebar-btn" ref={(c) => { this.sidebarBtn = c; }}>
              <i className="material-icons">menu</i>
            </a>
          </div>

          <div className="brand d-none d-lg-inline-block d-xl-inline-block">
            <h2><Link to="/">Tower Defense (Stage info)</Link></h2>
          </div>

          {/* <div className="top-nav-left d-none d-lg-inline-block d-xl-inline-block">
            <NavLeftList />
          </div> */}

          <div className="top-nav-right">
            <NavRightList />
          </div>
        </div>
      </section>
    );
  }
}

export default connect()(Header);

