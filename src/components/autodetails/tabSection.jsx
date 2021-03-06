import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const TabSection = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>INTERIOR DESIGN</Tab>
          <Tab>EXTERIOR FEATURES</Tab>
          <Tab>SECURITY & ENVIRONMENT</Tab>
          <Tab>SERVICE</Tab>
        </TabList>

        <TabPanel>
          <p>
            Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage
            pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump
            porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
          </p>
          <p>
            Brisket meatball turkey short loin boudin leberkas meatloaf chuck
            andouille pork loin pastrami spare ribs pancetta rump. Frankfurter
            corned beef beef tenderloin short loin meatloaf swine ground round
            venison.
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky
            drumstick fatback boudin ball tip turducken. Pork belly meatball
            t-bone bresaola tail filet mignon kevin turkey ribeye shank flank
            doner cow kielbasa shankle. Pig swine chicken hamburger, tenderloin
            turkey rump ball tip sirloin frankfurter meatloaf boudin brisket ham
            hock. Hamburger venison brisket tri-tip andouille pork belly ball
            tip short ribs biltong meatball chuck. Pork chop ribeye tail short
            ribs, beef hamburger meatball kielbasa rump corned beef porchetta
            landjaeger flank. Doner rump frankfurter meatball meatloaf, cow
            kevin pork pork loin venison fatback spare ribs salami beef ribs.
          </p>
          <p>
            Jerky jowl pork chop tongue, kielbasa shank venison. Capicola shank
            pig ribeye leberkas filet mignon brisket beef kevin tenderloin
            porchetta. Capicola fatback venison shank kielbasa, drumstick ribeye
            landjaeger beef kevin tail meatball pastrami prosciutto pancetta.
            Tail kevin spare ribs ground round ham ham hock brisket shoulder.
            Corned beef tri-tip leberkas flank sausage ham hock filet mignon
            beef ribs pancetta turkey.
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage
            pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump
            porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
          </p>
          <p>
            Brisket meatball turkey short loin boudin leberkas meatloaf chuck
            andouille pork loin pastrami spare ribs pancetta rump. Frankfurter
            corned beef beef tenderloin short loin meatloaf swine ground round
            venison.
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky
            drumstick fatback boudin ball tip turducken. Pork belly meatball
            t-bone bresaola tail filet mignon kevin turkey ribeye shank flank
            doner cow kielbasa shankle. Pig swine chicken hamburger, tenderloin
            turkey rump ball tip sirloin frankfurter meatloaf boudin brisket ham
            hock. Hamburger venison brisket tri-tip andouille pork belly ball
            tip short ribs biltong meatball chuck. Pork chop ribeye tail short
            ribs, beef hamburger meatball kielbasa rump corned beef porchetta
            landjaeger flank. Doner rump frankfurter meatball meatloaf, cow
            kevin pork pork loin venison fatback spare ribs salami beef ribs.
          </p>
          <p>
            Jerky jowl pork chop tongue, kielbasa shank venison. Capicola shank
            pig ribeye leberkas filet mignon brisket beef kevin tenderloin
            porchetta. Capicola fatback venison shank kielbasa, drumstick ribeye
            landjaeger beef kevin tail meatball pastrami prosciutto pancetta.
            Tail kevin spare ribs ground round ham ham hock brisket shoulder.
            Corned beef tri-tip leberkas flank sausage ham hock filet mignon
            beef ribs pancetta turkey.
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabSection;
