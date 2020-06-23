import React from "react";
import { Link, NavLink } from "react-router-dom";
const AutoDetails = () => {
  return (
    <div>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <h3>product details </h3>
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Details
            </li>
          </ol>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          <div className="details_section">
            <div className="col-sm-8">
              <div className="details_section_slider">
                <div
                  id="carousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="item active">
                      <img src="images/details/3_-798x466.jpg" />
                    </div>
                    <div className="item">
                      <img src="images/details/15-798x466.jpg" />
                    </div>
                    <div className="item">
                      <img src="images/details/44-798x466.jpg" />
                    </div>
                    <div className="item">
                      <img src="images/details/55-798x466.jpg" />
                    </div>
                    <div className="item">
                      <img src="images/details/62-798x466.jpg" />
                    </div>
                    <div className="item">
                      <img src="images/details/44-798x466.jpg" />
                    </div>
                    <div className="item">
                      <img src="images/details/55-798x466.jpg" />
                    </div>
                    <div className="item">
                      <img src="images/details/62-798x466.jpg" />
                    </div>
                  </div>
                </div>
                <div className="clearfix">
                  <div
                    id="thumbcarousel"
                    className="carousel slide"
                    data-interval="false"
                  >
                    <div className="carousel-inner">
                      <div className="item active">
                        <div
                          data-target="#carousel"
                          data-slide-to="0"
                          className="thumb"
                        >
                          <img src="images/details/3_-798x466.jpg" />
                        </div>
                        <div
                          data-target="#carousel"
                          data-slide-to="1"
                          className="thumb"
                        >
                          <img src="images/details/15-798x466.jpg" />
                        </div>
                        <div
                          data-target="#carousel"
                          data-slide-to="2"
                          className="thumb"
                        >
                          <img src="images/details/44-798x466.jpg" />
                        </div>
                        <div
                          data-target="#carousel"
                          data-slide-to="3"
                          className="thumb"
                        >
                          <img src="images/details/55-798x466.jpg" />
                        </div>
                      </div>
                      <div className="item">
                        <div
                          data-target="#carousel"
                          data-slide-to="4"
                          className="thumb"
                        >
                          <img src="images/details/62-798x466.jpg" />
                        </div>
                        <div
                          data-target="#carousel"
                          data-slide-to="1"
                          className="thumb"
                        >
                          <img src="images/details/15-798x466.jpg" />
                        </div>
                        <div
                          data-target="#carousel"
                          data-slide-to="2"
                          className="thumb"
                        >
                          <img src="images/details/44-798x466.jpg" />
                        </div>
                        <div
                          data-target="#carousel"
                          data-slide-to="3"
                          className="thumb"
                        >
                          <img src="images/details/55-798x466.jpg" />
                        </div>
                      </div>
                    </div>
                    <a
                      className="left carousel-control"
                      href="#thumbcarousel"
                      role="button"
                      data-slide="prev"
                    >
                      <span className="fa fa-arrow-circle-o-left"></span>
                    </a>
                    <a
                      className="right carousel-control"
                      href="#thumbcarousel"
                      role="button"
                      data-slide="next"
                    >
                      <span className="fa fa-arrow-circle-o-right"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="details_section_tabs">
                <input id="tab1" type="radio" name="tabs" checked="checked" />
                <label for="tab1">Vehicle overview</label>
                <input id="tab2" type="radio" name="tabs" />
                <label for="tab2">Technical</label>
                <input id="tab3" type="radio" name="tabs" />
                <label for="tab3">Features Options</label>
                <input id="tab4" type="radio" name="tabs" />
                <label for="tab4">Contact</label>
                <section id="content1">
                  <p>
                    Bacon ipsum dolor sit amet beef venison beef ribs kielbasa.
                    Sausage pig leberkas, t-bone sirloin shoulder bresaola.
                    Frankfurter rump porchetta ham. Pork belly prosciutto
                    brisket meatloaf short ribs.
                  </p>
                  <p>
                    Brisket meatball turkey short loin boudin leberkas meatloaf
                    chuck andouille pork loin pastrami spare ribs pancetta rump.
                    Frankfurter corned beef beef tenderloin short loin meatloaf
                    swine ground round venison.
                  </p>
                </section>
                <section id="content2">
                  <p>
                    Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky
                    drumstick fatback boudin ball tip turducken. Pork belly
                    meatball t-bone bresaola tail filet mignon kevin turkey
                    ribeye shank flank doner cow kielbasa shankle. Pig swine
                    chicken hamburger, tenderloin turkey rump ball tip sirloin
                    frankfurter meatloaf boudin brisket ham hock. Hamburger
                    venison brisket tri-tip andouille pork belly ball tip short
                    ribs biltong meatball chuck. Pork chop ribeye tail short
                    ribs, beef hamburger meatball kielbasa rump corned beef
                    porchetta landjaeger flank. Doner rump frankfurter meatball
                    meatloaf, cow kevin pork pork loin venison fatback spare
                    ribs salami beef ribs.
                  </p>
                  <p>
                    Jerky jowl pork chop tongue, kielbasa shank venison.
                    Capicola shank pig ribeye leberkas filet mignon brisket beef
                    kevin tenderloin porchetta. Capicola fatback venison shank
                    kielbasa, drumstick ribeye landjaeger beef kevin tail
                    meatball pastrami prosciutto pancetta. Tail kevin spare ribs
                    ground round ham ham hock brisket shoulder. Corned beef
                    tri-tip leberkas flank sausage ham hock filet mignon beef
                    ribs pancetta turkey.
                  </p>
                </section>
                <section id="content3">
                  <p>
                    Bacon ipsum dolor sit amet beef venison beef ribs kielbasa.
                    Sausage pig leberkas, t-bone sirloin shoulder bresaola.
                    Frankfurter rump porchetta ham. Pork belly prosciutto
                    brisket meatloaf short ribs.
                  </p>
                  <p>
                    Brisket meatball turkey short loin boudin leberkas meatloaf
                    chuck andouille pork loin pastrami spare ribs pancetta rump.
                    Frankfurter corned beef beef tenderloin short loin meatloaf
                    swine ground round venison.
                  </p>
                </section>
                <section id="content4">
                  <p>
                    Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky
                    drumstick fatback boudin ball tip turducken. Pork belly
                    meatball t-bone bresaola tail filet mignon kevin turkey
                    ribeye shank flank doner cow kielbasa shankle. Pig swine
                    chicken hamburger, tenderloin turkey rump ball tip sirloin
                    frankfurter meatloaf boudin brisket ham hock. Hamburger
                    venison brisket tri-tip andouille pork belly ball tip short
                    ribs biltong meatball chuck. Pork chop ribeye tail short
                    ribs, beef hamburger meatball kielbasa rump corned beef
                    porchetta landjaeger flank. Doner rump frankfurter meatball
                    meatloaf, cow kevin pork pork loin venison fatback spare
                    ribs salami beef ribs.
                  </p>
                  <p>
                    Jerky jowl pork chop tongue, kielbasa shank venison.
                    Capicola shank pig ribeye leberkas filet mignon brisket beef
                    kevin tenderloin porchetta. Capicola fatback venison shank
                    kielbasa, drumstick ribeye landjaeger beef kevin tail
                    meatball pastrami prosciutto pancetta. Tail kevin spare ribs
                    ground round ham ham hock brisket shoulder. Corned beef
                    tri-tip leberkas flank sausage ham hock filet mignon beef
                    ribs pancetta turkey.
                  </p>
                </section>
              </div>
            </div>
            <div className="col-sm-4">
              <h3>Ford Mustang 2016 Turbo</h3>
              <div className="product_comments_block_extra">
                <div className="comments_note">
                  <span className="average">Average grade&nbsp;</span>
                  <div className="star_content clearfix">
                    <i className="fa fa-star fa-star_on" aria-hidden="true"></i>
                    <i className="fa fa-star fa-star_on" aria-hidden="true"></i>
                    <i className="fa fa-star fa-star_on" aria-hidden="true"></i>
                    <i className="fa fa-star fa-star_on" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="comments_advices">
                  <a className="nb-comments" href="#idTab5">
                    1 Reviews
                  </a>
                  <a
                    className="open-comment-form"
                    href="#"
                    data-toggle="modal"
                    data-target="#productcomment-modal"
                  >
                    Write a review
                  </a>
                </div>
              </div>
              <div className="product_content">
                <p>
                  Product description goes here. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus. Donec quam
                  felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  Nulla consequat massa quis enim.
                </p>
              </div>
              <div className="overall_details">
                <div className="pricerange">
                  <span className="our_price">Our Price</span>$ 3,50,456
                </div>
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td className="t-label">BODY</td>
                      <td className="t-value">Convertible</td>
                    </tr>
                    <tr>
                      <td className="t-label">MILEAGE</td>
                      <td className="t-value">18000</td>
                    </tr>
                    <tr>
                      <td className="t-label">FUEL TYPE</td>
                      <td className="t-value">Gasoline</td>
                    </tr>
                    <tr>
                      <td className="t-label">ENGINE</td>
                      <td className="t-value">5000</td>
                    </tr>
                    <tr>
                      <td className="t-label">YEAR</td>
                      <td className="t-value">2015</td>
                    </tr>
                    <tr>
                      <td className="t-label">TRANSMISSION</td>
                      <td className="t-value">Semi-automatic</td>
                    </tr>
                    <tr>
                      <td className="t-label">DRIVE</td>
                      <td className="t-value">RWD</td>
                    </tr>
                    <tr>
                      <td className="t-label">FUEL ECONOMY</td>
                      <td className="t-value">35.3</td>
                    </tr>
                    <tr>
                      <td className="t-label">EXTERIOR COLOR</td>
                      <td className="t-value">Silver Metallic</td>
                    </tr>
                    <tr>
                      <td className="t-label">INTERIOR COLOR</td>
                      <td className="t-value">Jet Red</td>
                    </tr>
                    <tr>
                      <td className="t-label">VIN</td>
                      <td className="t-value">5YFBURHE6FP219</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoDetails;
