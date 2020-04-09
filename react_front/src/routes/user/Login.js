import React from 'react';
import TextField from '@material-ui/core/TextField';
import QueueAnim from 'rc-queue-anim';
import './styles.scss'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: "Tower Defense Admin"
    };
  }

  render() {
    return (
      <div className="body-inner">
        <div className="card card-white">
          <div className="card-content">

            <section className="logo text-center">
              <h1><a href="#/">{this.state.brand}</a></h1>
            </section>

            <form className="form-horizontal">
              <fieldset>
                <div className="form-group">
                  <TextField
                    label="ID"
                    type="text"
                    fullWidth
                  />
                </div>
                <div className="form-group">
                  <TextField
                    label="Password"
                    type="password"
                    className="mt-3"
                    fullWidth
                  />
                </div>
              </fieldset>
            </form>
          </div>
          <div className="card-action border-0 text-right">
            <a href="#/" className="color-primary">Login</a>
          </div>
        </div>
      </div>
    );
  }
}

const Page = () => (
  <div className="page-login">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <Login />
        </div>
      </QueueAnim>
    </div>
  </div>
);

export default Page;
