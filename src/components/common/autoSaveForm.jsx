import React from "react";

const AutoSaveForm = () => {
  return (
    <div>
      <div className="container">
        <div className="sell_car box_shadow clearfix">
          <form action="" method="post" id="sell_car">
            <legend>Basic Information </legend>

            <div className="col-sm-4 col-md-4 col-xs-12">
              <div className="form-group">
                <label for="">Select a Manufacturer</label>
                <select
                  name="state"
                  className="form-control selectpicker"
                  data-bv-field="state"
                >
                  <option value="">Select Model</option>
                  <option value="172">Acura MDX</option>
                  <option value="169">Acura NSX</option>
                  <option value="173">Acura Others</option>
                  <option value="170">Acura RSX/Integra</option>
                  <option value="174">Alfa Romeo 145/146/147</option>
                  <option value="177">Alfa Romeo 156/159</option>
                  <option value="175">Alfa Romeo 166</option>
                  <option value="685">Alfa Romeo 4C</option>
                  <option value="178">Alfa Romeo Brera</option>
                  <option value="770">Alfa Romeo Giulia</option>
                  <option value="771">Alfa Romeo Giulietta</option>
                  <option value="176">Alfa Romeo GTV/GT</option>
                  <option value="686">Alfa Romeo MiTo</option>
                  <option value="180">Alfa Romeo Other</option>
                  <option value="179">Alfa Romeo Spider</option>
                  <option value="721">Aston Martin Cygnet</option>
                  <option value="761">Aston Martin DB11</option>
                  <option value="181">Aston Martin DB7/DB9</option>
                  <option value="182">Aston Martin DBS</option>
                  <option value="722">Aston Martin Lagonda</option>
                  <option value="186">Aston Martin Other</option>
                  <option value="183">Aston Martin Rapide</option>
                  <option value="185">Aston Martin Vanquish</option>
                  <option value="184">Aston Martin Vantage</option>
                  <option value="723">Aston Martin Zagato</option>
                  <option value="187">Audi A1</option>
                  <option value="188">Audi A3</option>
                  <option value="189">Audi A4</option>
                  <option value="190">Audi A5</option>
                  <option value="191">Audi A6</option>
                  <option value="192">Audi A7</option>
                  <option value="193">Audi A8</option>
                  <option value="204">Audi Other</option>
                  <option value="856">Audi Q2</option>
                  <option value="194">Audi Q3</option>
                  <option value="195">Audi Q5</option>
                  <option value="196">Audi Q7</option>
                  <option value="197">Audi R8</option>
                  <option value="732">Audi RS3</option>
                  <option value="200">Audi RS4</option>
                  <option value="201">Audi RS5</option>
                  <option value="198">Audi RS6</option>
                  <option value="687">Audi RS7</option>
                  <option value="742">Audi S3</option>
                  <option value="700">Audi S5</option>
                  <option value="199">Audi S6</option>
                  <option value="688">Audi S7</option>
                  <option value="202">Audi S8</option>
                  <option value="203">Audi TT</option>
                  <option value="810">BAIC A1</option>
                  <option value="811">BAIC A5</option>
                  <option value="223">Bentley Arnage</option>
                  <option value="224">Bentley Azure</option>
                  <option value="764">Bentley Bentayga</option>
                  <option value="225">Bentley Brooklands</option>
                  <option value="226">Bentley Continental</option>
                  <option value="227">Bentley Continental Flying Spur</option>
                  <option value="228">Bentley Continental GT</option>
                  <option value="229">Bentley Mulsanne</option>
                  <option value="230">Bentley Other</option>
                  <option value="171">BMW 1-Series</option>
                  <option value="702">BMW 2-Series</option>
                  <option value="205">BMW 3-Series</option>
                  <option value="206">BMW 4-Series</option>
                  <option value="207">BMW 5-Series</option>
                  <option value="208">BMW 6-Series</option>
                  <option value="209">BMW 7-Series</option>
                  <option value="210">BMW 8-Series</option>
                  <option value="705">BMW i8</option>
                  <option value="212">BMW M-Roadster</option>
                  <option value="211">BMW M2</option>
                  <option value="213">BMW M3</option>
                  <option value="704">BMW M4</option>
                  <option value="214">BMW M5</option>
                  <option value="216">BMW M6</option>
                  <option value="222">BMW Other</option>
                  <option value="217">BMW X1</option>
                  <option value="218">BMW X3</option>
                  <option value="703">BMW X4</option>
                  <option value="215">BMW X5</option>
                  <option value="219">BMW X6</option>
                  <option value="220">BMW Z3</option>
                  <option value="221">BMW Z4</option>
                  <option value="234">Bugatti Bugatti EB110</option>
                  <option value="236">Bugatti Bugatti Type 18 Garros</option>
                  <option value="233">Bugatti Bugatti Type 252</option>
                  <option value="231">Bugatti Bugatti Type 35</option>
                  <option value="235">Bugatti Bugatti Type 41 Royale</option>
                  <option value="232">Bugatti Bugatti Veyron EB16.4</option>
                  <option value="783">Bugatti Chiron</option>
                  <option value="785">Bugatti Veyron</option>
                  <option value="241">Buick Buick Enclave</option>
                  <option value="240">Buick Buick Encore</option>
                  <option value="239">Buick Buick Lacrosse</option>
                  <option value="238">Buick Buick Regal</option>
                  <option value="237">Buick Buick Verano</option>
                  <option value="242">Cadillac ATS</option>
                  <option value="243">Cadillac BLS</option>
                  <option value="730">Cadillac CT6</option>
                  <option value="244">Cadillac CTS/Catera</option>
                  <option value="245">Cadillac DTS/De Ville</option>
                  <option value="246">Cadillac Escalade</option>
                  <option value="247">Cadillac FleetWood</option>
                  <option value="252">Cadillac Other</option>
                  <option value="248">Cadillac SRX</option>
                  <option value="249">Cadillac STS/Seville</option>
                  <option value="250">Cadillac XLR</option>
                  <option value="731">Cadillac XT5</option>
                  <option value="251">Cadillac XTR/Eldorado</option>
                  <option value="701">Cadillac XTS</option>
                  <option value="859">Changan Alsvin V7</option>
                  <option value="813">Changan CS35</option>
                  <option value="814">Changan CS75</option>
                  <option value="812">Changan Eado</option>
                  <option value="824">Chery Arrizo3</option>
                  <option value="826">Chery Arrizo5</option>
                  <option value="825">Chery Arrizo7</option>
                  <option value="822">Chery Tiggo3</option>
                  <option value="823">Chery Tiggo5</option>
                  <option value="253">Chevrolet Astro</option>
                  <option value="254">Chevrolet Avalanche</option>
                  <option value="255">Chevrolet Aveo</option>
                  <option value="256">Chevrolet Camaro</option>
                  <option value="257">Chevrolet Caprice</option>
                  <option value="258">Chevrolet Captiva</option>
                  <option value="259">Chevrolet Cavalier</option>
                  <option value="260">Chevrolet Corvette</option>
                  <option value="261">Chevrolet Cruze</option>
                  <option value="262">Chevrolet Epica</option>
                  <option value="738">Chevrolet Express</option>
                  <option value="263">Chevrolet Impala</option>
                  <option value="264">Chevrolet Lumina</option>
                  <option value="265">Chevrolet Malibu</option>
                  <option value="266">Chevrolet Optra</option>
                  <option value="277">Chevrolet Other</option>
                  <option value="267">Chevrolet Pickup</option>
                  <option value="269">Chevrolet Silverado</option>
                  <option value="270">Chevrolet Sonic</option>
                  <option value="271">Chevrolet Spark</option>
                  <option value="268">Chevrolet SSR</option>
                  <option value="272">Chevrolet Suburban</option>
                  <option value="273">Chevrolet Tahoe</option>
                  <option value="274">Chevrolet Trailblazer</option>
                  <option value="275">Chevrolet Traverse</option>
                  <option value="713">Chevrolet Trax</option>
                  <option value="276">Chevrolet Uplander</option>
                  <option value="278">Chrysler 200C</option>
                  <option value="279">Chrysler 300C</option>
                  <option value="280">Chrysler Concorde</option>
                  <option value="281">Chrysler Crossfire</option>
                  <option value="282">Chrysler Neon</option>
                  <option value="287">Chrysler Other</option>
                  <option value="284">Chrysler Prowler</option>
                  <option value="283">Chrysler PT Cruiser</option>
                  <option value="285">Chrysler Sebring</option>
                  <option value="286">Chrysler Voyager/Caravan</option>
                  <option value="781">Citroen Berlingo</option>
                  <option value="777">Citroen C- Elysee</option>
                  <option value="775">Citroen C3</option>
                  <option value="288">Citroen C4</option>
                  <option value="776">Citroen C5</option>
                  <option value="778">Citroen DS3</option>
                  <option value="779">Citroen DS4</option>
                  <option value="780">Citroen DS5</option>
                  <option value="782">Citroen Jumper</option>
                  <option value="289">Citroen Other</option>
                  <option value="292">CMC Other</option>
                  <option value="290">CMC Veryca</option>
                  <option value="291">CMC Z7</option>
                  <option value="293">Daewoo Lanos</option>
                  <option value="294">Daewoo Leganza</option>
                  <option value="295">Daewoo Nubira</option>
                  <option value="296">Daewoo Other</option>
                  <option value="297">Daihatsu Charade</option>
                  <option value="784">Daihatsu Gran Max</option>
                  <option value="300">Daihatsu Materia</option>
                  <option value="303">Daihatsu Other</option>
                  <option value="298">Daihatsu Rocky</option>
                  <option value="301">Daihatsu Sirion</option>
                  <option value="299">Daihatsu Terios</option>
                  <option value="302">Daihatsu YRV</option>
                  <option value="304">Dodge Avenger</option>
                  <option value="305">Dodge Caliber</option>
                  <option value="306">Dodge Caravan</option>
                  <option value="307">Dodge Challenger</option>
                  <option value="308">Dodge Charger</option>
                  <option value="712">Dodge Dart</option>
                  <option value="309">Dodge Durango</option>
                  <option value="310">Dodge Magnum</option>
                  <option value="751">Dodge Neon</option>
                  <option value="311">Dodge Nitro</option>
                  <option value="314">Dodge Other</option>
                  <option value="312">Dodge Ram</option>
                  <option value="313">Dodge Viper</option>
                  <option value="315">Ferrari 355</option>
                  <option value="316">Ferrari 360</option>
                  <option value="317">Ferrari 458</option>
                  <option value="756">Ferrari 488</option>
                  <option value="318">Ferrari 512</option>
                  <option value="319">Ferrari 599 GTB</option>
                  <option value="320">Ferrari California</option>
                  <option value="322">Ferrari F 430</option>
                  <option value="321">Ferrari F12</option>
                  <option value="323">Ferrari FF</option>
                  <option value="804">Ferrari GTC4</option>
                  <option value="325">Ferrari Other</option>
                  <option value="324">Ferrari Scaglietti</option>
                  <option value="326">Fiat Barchetta</option>
                  <option value="327">Fiat Brava</option>
                  <option value="328">Fiat Fiat-500</option>
                  <option value="786">Fiat Linea</option>
                  <option value="329">Fiat Marea</option>
                  <option value="330">Fiat Other</option>
                  <option value="331">Ford Bronco</option>
                  <option value="332">Ford Crown Victoria</option>
                  <option value="717">Ford EcoSport</option>
                  <option value="333">Ford Edge</option>
                  <option value="334">Ford Escape</option>
                  <option value="335">Ford Excursion</option>
                  <option value="336">Ford Expedition</option>
                  <option value="337">Ford Explorer</option>
                  <option value="338">Ford F-Series Pickup</option>
                  <option value="339">Ford Fiesta</option>
                  <option value="340">Ford Figo</option>
                  <option value="341">Ford Flex</option>
                  <option value="342">Ford Focus</option>
                  <option value="343">Ford Fusion</option>
                  <option value="344">Ford GT</option>
                  <option value="345">Ford Mondeo</option>
                  <option value="346">Ford Mustang</option>
                  <option value="351">Ford Other</option>
                  <option value="347">Ford Pickup</option>
                  <option value="348">Ford Ranger</option>
                  <option value="349">Ford Taurus</option>
                </select>
              </div>
            </div>

            <div className="col-sm-4 col-md-4 col-xs-12">
              <div className="form-group">
                <label for="">Model Year</label>
                <select className="form-control" id="" data-bv-field="state">
                  <option>Select a Manufacturer</option>
                  <option value="">Select Year</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                </select>
              </div>
            </div>

            <div className="col-sm-4 col-md-4 col-xs-12">
              <div className="form-group">
                <label for="name" className="cols-sm-2 control-label">
                  Mileage (km)
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Enter your Name"
                      data-error="some error"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-md-4 col-xs-12">
              <div className="form-group">
                <label for="name" className="cols-sm-2 control-label">
                  Price
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-money" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Enter your Name"
                      data-error="some error"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-md-4 col-xs-12">
              <div className="form-group">
                <label for="name" className="cols-sm-2 control-label">
                  Phone No
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Enter your Name"
                      data-error="some error"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-md-4 col-xs-12">
              <div className="form-group">
                <label for="">Emirate Location</label>
                <select
                  name="state"
                  className="form-control selectpicker"
                  data-bv-field="state"
                >
                  <option value=" ">Select Location</option>
                  <option>Dubai</option>
                  <option>Abu Dhabi</option>
                  <option>Sharjah</option>
                  <option>Ajman</option>
                  <option>Ras al-Khaimah</option>
                  <option>Fujairah</option>
                  <option>Umm al-Quwain</option>
                </select>
              </div>
            </div>

            <div className="col-sm-4 col-md-4 col-xs-12">
              <div className="form-group">
                <label for="">Registration Emirate</label>
                <select
                  name="state"
                  className="form-control selectpicker"
                  data-bv-field="state"
                >
                  <option value=" ">Select Emirate</option>
                  <option>Dubai</option>
                  <option>Abu Dhabi</option>
                  <option>Sharjah</option>
                  <option>Ajman</option>
                  <option>Ras al-Khaimah</option>
                  <option>Fujairah</option>
                  <option>Umm al-Quwain</option>
                </select>
              </div>
            </div>

            <div className="col-sm-4 col-md-4 col-xs-12">
              <div className="form-group">
                <label for="">Body Type</label>
                <select
                  name="state"
                  className="form-control selectpicker"
                  data-bv-field="state"
                >
                  <option value=" ">Select Body Type</option>
                  <option>Coupe</option>
                  <option>Crossover</option>
                  <option>Hard Top Convertible</option>
                  <option>Hatchback</option>
                </select>
              </div>
            </div>

            <div className="col-sm-4 col-md-4 col-xs-12">
              <div className="form-group">
                <label for="">Exterior Colors</label>
                <select
                  name="state"
                  className="form-control selectpicker"
                  data-bv-field="state"
                >
                  <option value=" ">Please select your state</option>
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>Arizona</option>
                </select>
              </div>
            </div>

            <div className="clearfix"></div>
            <legend>Select Features </legend>

            <div className="col-sm-4 col-md-4 col-xs-12">
              <div className="form-group">
                <label for="">Fuel Type</label>
                <select
                  name="state"
                  className="form-control selectpicker"
                  data-bv-field="state"
                >
                  <option value=" ">Please select your state</option>
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>Arizona</option>
                </select>
              </div>
            </div>

            <div className="col-sm-4 col-md-4 col-xs-12">
              <div className="form-group">
                <label for="">Engine Capacity (HP)</label>
                <select
                  name="state"
                  className="form-control selectpicker"
                  data-bv-field="state"
                >
                  <option value=" ">Please select your state</option>
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>Arizona</option>
                </select>
              </div>
            </div>

            <div className="clearfix"></div>
            <legend>Additional Features </legend>

            <div className="col-sm-4 col-md-4 col-xs-12">
              <div className="input-group mb-3">
                <label for="">Upload Photos</label>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                  />
                  <label className="custom-file-label" for="inputGroupFile01">
                    Choose Photos
                  </label>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-md-4 col-xs-12">
              <div className="form-group">
                <label for="">Exterior Colors</label>
                <textarea
                  className="form-control"
                  name="comment"
                  placeholder="About "
                  data-bv-field="comment"
                ></textarea>
              </div>
            </div>

            <div className="clearfix"></div>
            <div className="form-group pull-right">
              <div className="col-md-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-icon-right m_t_25"
                >
                  Send
                  <div className="btn-icon">
                    <i className="fa fa-paper-plane"></i>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="save_details"></div>
      </div>
    </div>
  );
};

export default AutoSaveForm;
