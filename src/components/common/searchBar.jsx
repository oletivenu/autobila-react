import React from "react";

const SearchBar = () => {
  return (
    <div className="container search_section">
      <div className="search_bg box_shadow clearfix">
        <form>
          <div className="col-lg-12 m_b_10 clearfix">
            <div className="col-lg-10 col-sm-6 col-xs-12">
              <div className="row">
                <div className="sr_tit">I Want to Buy</div>
                <div className="check_section">
                  <div className="checkbox checkbox-primary">
                    <div className="checkbox checkbox-inline">
                      <input
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label htmlFor="inlineCheckbox1"> Used Vichcle </label>
                    </div>
                    <div className="checkbox checkbox-success checkbox-inline">
                      <input
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option1"
                      />
                      <label htmlFor="inlineCheckbox2"> New Vichcle </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-xs-12 text-right">
              <div className="row">
                <a
                  className="cursor"
                  value="Show/Hide"
                  // onClick="showHideDiv('divMsg')"
                >
                  Advanced Search
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-10">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="form-group">
                <label htmlFor="">Select a Manufacturer</label>
                <select className="form-control" id="">
                  <option>Select a Manufacturer</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="form-group">
                <label htmlFor="">Select Model</label>
                <select className="form-control" id="">
                  <option>Select Model</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="form-group">
                <label htmlFor="">Fuel Type</label>
                <input
                  type="email"
                  className="form-control"
                  id=""
                  placeholder="Fuel Type"
                  name=""
                />
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="form-group">
                <label htmlFor="">Price Range</label>
                <input
                  type="email"
                  className="form-control"
                  id=""
                  placeholder="Price Range"
                  name=""
                />
              </div>
            </div>

            <div id="divMsg" className="sr_show">
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="">Select a Manufacturer</label>
                  <select className="form-control" id="">
                    <option>Select a Manufacturer</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="">Select Model</label>
                  <select className="form-control" id="">
                    <option>Select Model</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="">Fuel Type</label>
                  <input
                    type="email"
                    className="form-control"
                    id=""
                    placeholder="Fuel Type"
                    name=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="">Price Range</label>
                  <input
                    type="email"
                    className="form-control"
                    id=""
                    placeholder="Price Range"
                    name=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-12 col-xs-12">
            {/* <!-- <button type="submit" className="btn btn-default sr_btn pull-right">search <i className="fa fa-search" aria-hidden="true"></i></button>--> */}

            <a className="btn btn-primary btn-lg btn-icon-right m_t_25">
              SEARCH
              <div className="btn-icon">
                <i className="fa fa-search" />
              </div>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
