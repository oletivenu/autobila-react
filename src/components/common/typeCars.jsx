import React from "react";
import { Link, NavLink } from "react-router-dom";
const TypeCars = () => {
  return (
    <div className="container">
      <main className="o-main">
        <div className="o-section">
          <div id="tabs" className="c-tabs no-js">
            <div className="c-tabs-nav">
              <a href="#" className="c-tabs-nav__link is-active">
                <i className="fa fa-car" aria-hidden="true" />
                <span>Featured Used Cars</span>
              </a>
              <a href="#" className="c-tabs-nav__link">
                <i className="fa fa-car" aria-hidden="true" />
                <span>New Car In Dubai</span>
              </a>
            </div>
            <div className="c-tab is-active">
              <div className="c-tab__content">
                <div
                  id="adv_gp_products_4_columns_carousel"
                  className="carousel slide four_shows_one_move gp_products_carousel_wrapper"
                  data-ride="carousel"
                  data-interval="2000"
                >
                  {/* <!--========= Wrapper for slides =========--> */}
                  <div className="carousel-inner" role="listbox">
                    {/* <!--========= 1st slide =========--> */}
                    <div className="item active">
                      <Link to="/details">
                        <div className="col-xs-12 col-sm-6 col-md-3 gp_products_item">
                          <div className="gp_products_inner">
                            <div className="gp_products_item_image">
                              <img src="images/car.jpg" />
                            </div>
                            <div className="gp_products_item_caption">
                              <ul className="gp_products_caption_name">
                                <li className="date">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />
                                  April08, 2018
                                </li>
                                <li>
                                  2018 Cadillac CT6 Super Cruise can the car
                                  Really drive itself?
                                </li>
                                <li className="rate">ACD 19,000</li>
                              </ul>
                            </div>
                            <div className="product_footer clearfix">
                              <div className="col-lg-6 col-xs-6 col-sm-6">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  Diesel
                                </div>
                              </div>
                              <div className="col-lg-6 col-xs-6 col-sm-6 text-right">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  20,000 KM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* <!--========= 2nd slide =========--> */}
                    <div className="item">
                      <Link to="/details">
                        <div className="col-xs-12 col-sm-6 col-md-3 gp_products_item">
                          <div className="gp_products_inner">
                            <div className="gp_products_item_image">
                              <img src="images/car10.jpg" />
                            </div>
                            <div className="gp_products_item_caption">
                              <ul className="gp_products_caption_name">
                                <li className="date">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />
                                  April08, 2018
                                </li>
                                <li>
                                  2018 Cadillac CT6 Super Cruise can the car
                                  Really drive itself?
                                </li>
                                <li className="rate">ACD 19,000</li>
                              </ul>
                            </div>
                            <div className="product_footer clearfix">
                              <div className="col-lg-6 col-xs-6 col-sm-6">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  Diesel
                                </div>
                              </div>
                              <div className="col-lg-6 col-xs-6 col-sm-6 text-right">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  20,000 KM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* <!--========= 3rd slide =========--> */}
                    <div className="item">
                      <Link to="/details">
                        <div className="col-xs-12 col-sm-6 col-md-3 gp_products_item">
                          <div className="gp_products_inner">
                            <div className="gp_products_item_image">
                              <img src="images/car9.jpg" />
                            </div>
                            <div className="gp_products_item_caption">
                              <ul className="gp_products_caption_name">
                                <li className="date">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />
                                  April08, 2018
                                </li>
                                <li>
                                  2018 Cadillac CT6 Super Cruise can the car
                                  Really drive itself?
                                </li>
                                <li className="rate">ACD 19,000</li>
                              </ul>
                            </div>
                            <div className="product_footer clearfix">
                              <div className="col-lg-6 col-xs-6 col-sm-6">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  Diesel
                                </div>
                              </div>
                              <div className="col-lg-6 col-xs-6 col-sm-6 text-right">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  20,000 KM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* <!--========= 4th slide =========--> */}
                    <div className="item">
                      <Link to="/details">
                        <div className="col-xs-12 col-sm-6 col-md-3 gp_products_item">
                          <div className="gp_products_inner">
                            <div className="gp_products_item_image">
                              <img src="images/car8.jpg" />
                            </div>
                            <div className="gp_products_item_caption">
                              <ul className="gp_products_caption_name">
                                <li className="date">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />
                                  April08, 2018
                                </li>
                                <li>
                                  2018 Cadillac CT6 Super Cruise can the car
                                  Really drive itself?
                                </li>
                                <li className="rate">ACD 19,000</li>
                              </ul>
                            </div>
                            <div className="product_footer clearfix">
                              <div className="col-lg-6 col-xs-6 col-sm-6">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  Diesel
                                </div>
                              </div>
                              <div className="col-lg-6 col-xs-6 col-sm-6 text-right">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  20,000 KM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* <!--========= 5th slide =========--> */}
                    <div className="item">
                      <Link to="/details">
                        <div className="col-xs-12 col-sm-6 col-md-3 gp_products_item">
                          <div className="gp_products_inner">
                            <div className="gp_products_item_image">
                              <img src="images/car7.jpg" />
                            </div>
                            <div className="gp_products_item_caption">
                              <ul className="gp_products_caption_name">
                                <li className="date">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />
                                  April08, 2018
                                </li>
                                <li>
                                  2018 Cadillac CT6 Super Cruise can the car
                                  Really drive itself?
                                </li>
                                <li className="rate">ACD 19,000</li>
                              </ul>
                            </div>
                            <div className="product_footer clearfix">
                              <div className="col-lg-6 col-xs-6 col-sm-6">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  Diesel
                                </div>
                              </div>
                              <div className="col-lg-6 col-xs-6 col-sm-6 text-right">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  20,000 KM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* <!--========= 6th slide =========--> */}
                    <div className="item">
                      <Link to="/details">
                        <div className="col-xs-12 col-sm-6 col-md-3 gp_products_item">
                          <div className="gp_products_inner">
                            <div className="gp_products_item_image">
                              <img src="images/car6.jpg" />
                            </div>
                            <div className="gp_products_item_caption">
                              <ul className="gp_products_caption_name">
                                <li className="date">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />
                                  April08, 2018
                                </li>
                                <li>
                                  2018 Cadillac CT6 Super Cruise can the car
                                  Really drive itself?
                                </li>
                                <li className="rate">ACD 19,000</li>
                              </ul>
                            </div>
                            <div className="product_footer clearfix">
                              <div className="col-lg-6 col-xs-6 col-sm-6">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  Diesel
                                </div>
                              </div>
                              <div className="col-lg-6 col-xs-6 col-sm-6 text-right">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  20,000 KM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* <!--========= 7th slide =========--> */}
                    <div className="item">
                      <Link to="/details">
                        <div className="col-xs-12 col-sm-6 col-md-3 gp_products_item">
                          <div className="gp_products_inner">
                            <div className="gp_products_item_image">
                              <img src="images/car.jpg" />
                            </div>
                            <div className="gp_products_item_caption">
                              <ul className="gp_products_caption_name">
                                <li className="date">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />
                                  April08, 2018
                                </li>
                                <li>
                                  2018 Cadillac CT6 Super Cruise can the car
                                  Really drive itself?
                                </li>
                                <li className="rate">ACD 19,000</li>
                              </ul>
                            </div>
                            <div className="product_footer clearfix">
                              <div className="col-lg-6 col-xs-6 col-sm-6">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  Diesel
                                </div>
                              </div>
                              <div className="col-lg-6 col-xs-6 col-sm-6 text-right">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  20,000 KM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* <!--========= 8th slide =========--> */}
                    <div className="item">
                      <Link to="/details">
                        <div className="col-xs-12 col-sm-6 col-md-3 gp_products_item">
                          <div className="gp_products_inner">
                            <div className="gp_products_item_image">
                              <img src="images/car.jpg" />
                            </div>
                            <div className="gp_products_item_caption">
                              <ul className="gp_products_caption_name">
                                <li className="date">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />
                                  April08, 2018
                                </li>
                                <li>
                                  2018 Cadillac CT6 Super Cruise can the car
                                  Really drive itself?
                                </li>
                                <li className="rate">ACD 19,000</li>
                              </ul>
                            </div>
                            <div className="product_footer clearfix">
                              <div className="col-lg-6 col-xs-6 col-sm-6">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  Diesel
                                </div>
                              </div>
                              <div className="col-lg-6 col-xs-6 col-sm-6 text-right">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  20,000 KM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* <!--======= Navigation Buttons =========--> */}

                  {/* <!--======= Left Button =========--> */}
                  <a
                    className="left carousel-control gp_products_carousel_control_left"
                    href="#adv_gp_products_4_columns_carousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="fa fa-angle-left gp_products_carousel_control_icons"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>

                  {/* <!--======= Right Button =========--> */}
                  <a
                    className="right carousel-control gp_products_carousel_control_right"
                    href="#adv_gp_products_4_columns_carousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="fa fa-angle-right gp_products_carousel_control_icons"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="c-tab">
              <div className="c-tab__content">
                <div
                  id="adv_gp_products_3_columns_carousel"
                  className="carousel slide four_shows_one_move gp_products_carousel_wrapper"
                  data-ride="carousel"
                  data-interval="2000"
                >
                  {/* <!--========= Wrapper for slides =========--> */}
                  <div className="carousel-inner" role="listbox">
                    {/* <!--========= 1st slide =========--> */}
                    <div className="item active">
                      <Link to="/details">
                        <div className="col-xs-12 col-sm-6 col-md-3 gp_products_item">
                          <div className="gp_products_inner">
                            <div className="gp_products_item_image">
                              <img src="images/car.jpg" />
                            </div>
                            <div className="gp_products_item_caption">
                              <ul className="gp_products_caption_name">
                                <li className="date">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />
                                  April08, 2018
                                </li>
                                <li>
                                  2018 Cadillac CT6 Super Cruise can the car
                                  Really drive itself?
                                </li>
                                <li className="rate">ACD 19,000</li>
                              </ul>
                            </div>
                            <div className="product_footer clearfix">
                              <div className="col-lg-6 col-xs-6 col-sm-6">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  Diesel
                                </div>
                              </div>
                              <div className="col-lg-6 col-xs-6 col-sm-6 text-right">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  20,000 KM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* <!--========= 2nd slide =========--> */}
                    <div className="item">
                      <Link to="/details">
                        <div className="col-xs-12 col-sm-6 col-md-3 gp_products_item">
                          <div className="gp_products_inner">
                            <div className="gp_products_item_image">
                              <img src="images/car.jpg" />
                            </div>
                            <div className="gp_products_item_caption">
                              <ul className="gp_products_caption_name">
                                <li className="date">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />
                                  April08, 2018
                                </li>
                                <li>
                                  2018 Cadillac CT6 Super Cruise can the car
                                  Really drive itself?
                                </li>
                                <li className="rate">ACD 19,000</li>
                              </ul>
                            </div>
                            <div className="product_footer clearfix">
                              <div className="col-lg-6 col-xs-6 col-sm-6">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  Diesel
                                </div>
                              </div>
                              <div className="col-lg-6 col-xs-6 col-sm-6 text-right">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  20,000 KM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* <!--========= 3rd slide =========--> */}
                    <div className="item">
                      <Link to="/details">
                        <div className="col-xs-12 col-sm-6 col-md-3 gp_products_item">
                          <div className="gp_products_inner">
                            <div className="gp_products_item_image">
                              <img src="images/car.jpg" />
                            </div>
                            <div className="gp_products_item_caption">
                              <ul className="gp_products_caption_name">
                                <li className="date">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />
                                  April08, 2018
                                </li>
                                <li>
                                  2018 Cadillac CT6 Super Cruise can the car
                                  Really drive itself?
                                </li>
                                <li className="rate">ACD 19,000</li>
                              </ul>
                            </div>
                            <div className="product_footer clearfix">
                              <div className="col-lg-6 col-xs-6 col-sm-6">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  Diesel
                                </div>
                              </div>
                              <div className="col-lg-6 col-xs-6 col-sm-6 text-right">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  20,000 KM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* <!--========= 4th slide =========--> */}
                    <div className="item">
                      <Link to="/details">
                        <div className="col-xs-12 col-sm-6 col-md-3 gp_products_item">
                          <div className="gp_products_inner">
                            <div className="gp_products_item_image">
                              <img src="images/car4.jpg" />
                            </div>
                            <div className="gp_products_item_caption">
                              <ul className="gp_products_caption_name">
                                <li className="date">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />
                                  April08, 2018
                                </li>
                                <li>
                                  2018 Cadillac CT6 Super Cruise can the car
                                  Really drive itself?
                                </li>
                                <li className="rate">ACD 19,000</li>
                              </ul>
                            </div>
                            <div className="product_footer clearfix">
                              <div className="col-lg-6 col-xs-6 col-sm-6">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  Diesel
                                </div>
                              </div>
                              <div className="col-lg-6 col-xs-6 col-sm-6 text-right">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  20,000 KM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* <!--========= 5th slide =========--> */}
                    <div className="item">
                      <Link to="/details">
                        <div className="col-xs-12 col-sm-6 col-md-3 gp_products_item">
                          <div className="gp_products_inner">
                            <div className="gp_products_item_image">
                              <img src="images/car5.jpg" />
                            </div>
                            <div className="gp_products_item_caption">
                              <ul className="gp_products_caption_name">
                                <li className="date">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />
                                  April08, 2018
                                </li>
                                <li>
                                  2018 Cadillac CT6 Super Cruise can the car
                                  Really drive itself?
                                </li>
                                <li className="rate">ACD 19,000</li>
                              </ul>
                            </div>
                            <div className="product_footer clearfix">
                              <div className="col-lg-6 col-xs-6 col-sm-6">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  Diesel
                                </div>
                              </div>
                              <div className="col-lg-6 col-xs-6 col-sm-6 text-right">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  20,000 KM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* <!--========= 6th slide =========--> */}
                    <div className="item">
                      <Link to="/details">
                        <div className="col-xs-12 col-sm-6 col-md-3 gp_products_item">
                          <div className="gp_products_inner">
                            <div className="gp_products_item_image">
                              <img src="images/car6.jpg" />
                            </div>
                            <div className="gp_products_item_caption">
                              <ul className="gp_products_caption_name">
                                <li className="date">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />
                                  April08, 2018
                                </li>
                                <li>
                                  2018 Cadillac CT6 Super Cruise can the car
                                  Really drive itself?
                                </li>
                                <li className="rate">ACD 19,000</li>
                              </ul>
                            </div>
                            <div className="product_footer clearfix">
                              <div className="col-lg-6 col-xs-6 col-sm-6">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  Diesel
                                </div>
                              </div>
                              <div className="col-lg-6 col-xs-6 col-sm-6 text-right">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  20,000 KM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* <!--========= 7th slide =========--> */}
                    <div className="item">
                      <Link to="/details">
                        <div className="col-xs-12 col-sm-6 col-md-3 gp_products_item">
                          <div className="gp_products_inner">
                            <div className="gp_products_item_image">
                              <img src="images/car7.jpg" />
                            </div>
                            <div className="gp_products_item_caption">
                              <ul className="gp_products_caption_name">
                                <li className="date">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />
                                  April08, 2018
                                </li>
                                <li>
                                  2018 Cadillac CT6 Super Cruise can the car
                                  Really drive itself?
                                </li>
                                <li className="rate">ACD 19,000</li>
                              </ul>
                            </div>
                            <div className="product_footer clearfix">
                              <div className="col-lg-6 col-xs-6 col-sm-6">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  Diesel
                                </div>
                              </div>
                              <div className="col-lg-6 col-xs-6 col-sm-6 text-right">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  20,000 KM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* <!--========= 8th slide =========--> */}
                    <div className="item">
                      <Link to="/details">
                        <div className="col-xs-12 col-sm-6 col-md-3 gp_products_item">
                          <div className="gp_products_inner">
                            <div className="gp_products_item_image">
                              <img src="images/car8.jpg" />
                            </div>
                            <div className="gp_products_item_caption">
                              <ul className="gp_products_caption_name">
                                <li className="date">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />
                                  April08, 2018
                                </li>
                                <li>
                                  2018 Cadillac CT6 Super Cruise can the car
                                  Really drive itself?
                                </li>
                                <li className="rate">ACD 19,000</li>
                              </ul>
                            </div>
                            <div className="product_footer clearfix">
                              <div className="col-lg-6 col-xs-6 col-sm-6">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  Diesel
                                </div>
                              </div>
                              <div className="col-lg-6 col-xs-6 col-sm-6 text-right">
                                <div className="row">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  />
                                  20,000 KM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* <!--======= Navigation Buttons =========--> */}

                  {/* <!--======= Left Button =========--> */}
                  <a
                    className="left carousel-control gp_products_carousel_control_left"
                    href="#adv_gp_products_3_columns_carousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="fa fa-angle-left gp_products_carousel_control_icons"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>

                  {/* <!--======= Right Button =========--> */}
                  <a
                    className="right carousel-control gp_products_carousel_control_right"
                    href="#adv_gp_products_3_columns_carousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="fa fa-angle-right gp_products_carousel_control_icons"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="o-section">
          <div id="github-icons" />
        </div>
      </main>
    </div>
  );
};

export default TypeCars;
