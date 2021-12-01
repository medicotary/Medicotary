import React from "react";
import "../../index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar/sidebar";
import DeliveryMainCard from "../../components/delivery/maincard";

const Delivery = () => {
  return (
    <div>
      <Header />
      {/* sidebar */}
      <Sidebar place="5" />
      {/* main content container */}
      <div className="mt-auto lg:w-4/5 w-full p-10 bg-gray-50 ml-auto">
        <div className="flex flex-col">
          <DeliveryMainCard
            imgsrc="https://www.dpdhl-brands.com/dhl/en/guides/design-basics/logo-and-claim/_jcr_content/parsys/imagetext/imagetextcontainer/image.coreimg.100.1024.png/1591965147742/versions-01.png"
            name="DHL"
            cardtype="new"
            to="/dhl"
            desc="Get expert shipping advice and customs support to prepare and manage
            your express shipments! DHL offers a wide range of delivery options.
            DHL offers special promotions and programs to our valued customers!"
          />
          <DeliveryMainCard
            imgsrc="https://static.startuptalky.com/2020/09/Delhivery-Success-Story_Startuptalky-2.jpg"
            name="Delhivery"
            desc="world is small"
            to="/delhivery"
          />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
