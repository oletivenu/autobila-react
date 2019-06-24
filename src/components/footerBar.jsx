import React from "react";
import FootBar from "./common/footBar";
import Address from "./common/address";
import TopBrands from "./common/topBrands";
import TopCities from "./common/topCities";
import SecurityPolicy from "./common/securityPolicy";

const FooterBar = () => {
  return (
    // <!-- FOOTER -->
    <footer id="mc-footer" className="clearfix">
      {/* <!-- Footer top //Start--> */}
      <div className="footer-top clearfix">
        <div className="container">
          {/* <!-- Footer link //Start--> */}
          <ul className="footer-link">
            <Address />
            <TopBrands />
            <TopCities />
            <SecurityPolicy />
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="text-bottom">
          <p>
            <b>About Us:</b> With the idea of creating the ideal destination for
            online shopping in UAE, ShopyMall.com was created back in 2013 with
            catalog of all electronic gadgets. It branched out to one-stop shop
            for products of all categories. ShopyMall.com makes it easy for you
            to shop easily from the comfort of your home. Shopping online at
            ShopyMall.com is simple, fast, secure and easy.
          </p>
          <p>
            <b>Products:</b> From mobiles to tablets, laptops to electronics,
            jewellery to cosmetics, watches to sunglasses, television to gaming
            consoles we pride ourselves on selling all the products that are
            hip, trend and are valuable to our customers at ShopyMall.com. We
            sell plethora of items from the brands you love to shop from
            including but not limited to Adidas, Apple, CK (Calvin Klein), HP
            (Hewlett-Packard), Microsoft and more.
          </p>
          <p>
            <b>Offers:</b> Shopping.com is one of the preferred stores for
            online shopping in UAE and for all the right reasons such as
            convenience, cost-effective, product quality and personalized
            service. We have wide range of offers available which provides you
            with an opportunity to buy always at low prices. We provided
            thousands of deals every day along with bundle of products to
            provide you even more savings. Payment & Shipping: We at
            ShopyMall.com make best effort for your shopping experience to be as
            hassle free and smooth as possible. We provide you multiple payment
            methods including cash on delivery and online payments. We also run
            our own logistics to make sure your purchased item(s) reaches you as
            quick as possible in the best possible condition.
          </p>
        </div>

        <div className="link-bottom clearfix">
          <div className="links">
            <label>ALL OFFERS IN DUBAI:</label>
            <ul>
              <li>
                <a href="#">Special offers</a>
              </li>
              <li>
                <a href="#">Daily Deals</a>
              </li>
              <li>
                <a href="#">Bundle offers</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <label>NEW CAR &amp; ACCESSORIES IN DUBAI:</label>
            <ul>
              <li>
                <a href="#">Mobile Phones</a>
              </li>
              <li>
                <a href="#">Mobiles Accessories</a>
              </li>
              <li>
                <a href="#">Mobile Cases &amp; Covers</a>
              </li>
              <li>
                <a href="#">Mobile Power Banks</a>
              </li>
              <li>
                <a href="#">Mobile Memory Cards</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <label>USED CAR &amp; ACCESSORIES IN UAE:</label>
            <ul>
              <li>
                <a href="#">Tablets</a>
              </li>
              <li>
                <a href="#">Tablet Accessories</a>
              </li>
              <li>
                <a href="#">Tablet Cases &amp; Covers</a>
              </li>
              <li>
                <a href="#">Tablet Power Banks</a>
              </li>
              <li>
                <a href="#">Tablet Memory Cards</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <label>APPLIANCES IN UAE:</label>
            <ul>
              <li>
                <a href="#">Blenders</a>
              </li>
              <li>
                <a href="#">Food Processors</a>
              </li>
              <li>
                <a href="#">Irons</a>
              </li>
              <li>
                <a href="#">Kettle</a>
              </li>
              <li>
                <a href="#">Kitchen Ware</a>
              </li>
              <li>
                <a href="#">Meat Grinders</a>
              </li>
              <li>
                <a href="#">Mincers</a>
              </li>
              <li>
                <a href="#">Microwave Ovens</a>
              </li>
              <li>
                <a href="#">Other Home Appliances</a>
              </li>
              <li>
                <a href="#">Cooker</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Footer top //end--> */}
      <FootBar />
    </footer>
  );
};

export default FooterBar;
