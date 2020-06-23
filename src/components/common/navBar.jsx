import React from "react";
import { Link, NavLink } from "react-router-dom";
import history from "../../history";
const NavBar = () => {
  return (
    <div className="container-fluid navbar-fixed-top">
      <div className="row white">
        <div className="top-header ">
          <div className="container">
            <div className="col-xs-12 col-sm-6 col-lg-6 hidden-xs hidden-sm">
              <div className="row">
                <ul>
                  <li>
                    <a to="">
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                      contact@gmail.com
                    </a>
                  </li>
                  <li>+1 125 1256 125</li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-lg-6 right_nav pull-right">
              <div className="row">
                <ul className="pull-right ">
                  <li>
                    <Link to="#" data-toggle="modal" data-target="#login">
                      <i className="fa fa-sign-in" aria-hidden="true"></i> Login
                    </Link>
                    {/* <a to="#" data-toggle="modal" data-target="#login">
                      <i className="fa fa-sign-in" aria-hidden="true"></i> Login
                    </a> */}
                  </li>
                  <li>
                    <Link to="#" data-toggle="modal" data-target="#register">
                      <i className="fa fa-file-text-o" aria-hidden="true"></i>
                      Register
                    </Link>
                    {/* <a to="#" data-toggle="modal" data-target="#register">
                      <i className="fa fa-file-text-o" aria-hidden="true"></i>
                      Register
                    </a> */}
                  </li>
                  <li>
                    <Link to="/saveauto">Sell Your Car</Link>
                  </li>
                  <button type="button" className="btn lan_btn">
                    EN
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- HEADER --> */}
        <div className="container">
          <nav className="navbar navbar-default ">
            <div className="container-fluid">
              <div className="row">
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <Link to="/">
                    <img src="images/logo.png" className="img-responsive" />
                  </Link>
                </div>

                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/">
                        Home <span className="slider"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/list">Used Cars</Link>
                    </li>
                    <li>
                      <Link to="/list">New Cars</Link>
                    </li>
                    {/* <li>
                      <a to="#">Accessories</a>
                    </li>
                    <li>
                      <a to="#">Media</a>
                    </li>
                    <li>
                      <a to="#">Moto Directory</a>
                    </li>
                    <li className="dropdown">
                      <a
                        to="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Forums <span className="caret"></span>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a to="#">Action</a>
                        </li>
                        <li>
                          <a to="#">Another action</a>
                        </li>
                        <li>
                          <a to="#">Something else here</a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li>
                          <a to="#">Separated link</a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
                {/* <!-- /.navbar-collapse --> */}
              </div>
              {/* <!-- /.container-fluid --> */}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
