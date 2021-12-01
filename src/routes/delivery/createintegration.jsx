import React from "react";
import "../../index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar/sidebar";
import IntegrationDetails from "../../components/delivery/integration-details";
// import { Link } from "react-router-dom";

const CreateIntegration = () => {
  return (
    <div>
      <Header />
      {/* sidebar */}
      <Sidebar />
      {/* main content container */}
      <div className="mt-auto w-4/5 p-10 bg-gray-50 ml-auto">
        <IntegrationDetails
          imgsrc="https://www.dpdhl-brands.com/dhl/en/guides/design-basics/logo-and-claim/_jcr_content/parsys/imagetext/imagetextcontainer/image.coreimg.100.1024.png/1591965147742/versions-01.png"
          name="DHL"
          desc="Get expert shipping advice and customs support to prepare and manage
            your express shipments! DHL offers a wide range of delivery options.
            DHL offers special promotions and programs to our valued customers!"
        />
        <form className="bg-white border-2 p-6 rounded-lg w-3/5">
          <h2 className="text-bold text-xl font-medium mb-2">
            Setup Integration
          </h2>
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              API key
            </label>
            <input
              // value={cname}
              // onChange={(e) => setName(e.target.value)}
              required
              type="text"
              className={`w-full p-2 text-primary border rounded outline text-sm transition duration-150 ease-in-out mb-4`}
              id="API key"
              placeholder="XXX-XXX-123"
            />
          </div>
          <div class="flex mt-4">
            <label class="flex items-center">
              <input
                type="checkbox"
                class="form-checkbox cursor-pointer rounded"
                required
              ></input>
              <span class="ml-2 text-xs">
                Give permission to access the data from the third party site and
                provide with the neccesary services.{" "}
                <button className="text-secondary">
                  Click here to read terms and conditions.
                </button>
              </span>
            </label>
          </div>
          {/* <Link to="/delivery"> */}
            <button
              className="bg-primary text-white rounded-lg px-6 py-3 mt-2 w-full"
              type="submit"
            >
              Create Integration
            </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

export default CreateIntegration;
