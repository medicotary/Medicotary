import React from "react";
import "../../index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar/sidebar";
import IntegrationDetails from "../../components/delivery/integration-details";

class Delhivery extends React.Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      productList: [
        {
          picture:
            "https://www.bigbasket.com/media/uploads/p/xxl/253537-2_6-dettol-antiseptic-disinfectant-liquid.jpg",
          name: "Dettol liquid",
          description:
            "Disinfectant for Floor Cleaner, Surface Disinfection Personal Hygiene (Lime Fresh , 1L)",
          date: "24-12-2021",
          quantity: 12,
        },
        {
          picture:
            "https://m.media-amazon.com/images/I/81CZXIgv7qL._SY450_.jpg",
          name: "Vicks vaporub",
          description:
            "Relief From Cold, Cough, Blocked Nose, Headache, Body Ache, Muscular Stiffness And Breathing Difficulty (50ml)",
          date: "28-12-2021",
          quantity: 20,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Header />
        {/* sidebar */}
        <Sidebar />
        {/* main content container */}
        <div className="mt-auto lg:w-4/5 w-full p-10 bg-gray-50 ml-auto">
          <div className="flex flex-col">
            <IntegrationDetails
              imgsrc="https://static.startuptalky.com/2020/09/Delhivery-Success-Story_Startuptalky-2.jpg"
              name="Delhivery"
              desc="world is small"
            />
            <h1 className="lg:text-2xl text-xl font-medium">
              Products Ordered
            </h1>
            {this.state.productList.map((item) => {
              return (
                <div className="border container p-12 my-4 flex flox-col lg:flex-row bg-white rounded-2xl space-x-4 hover:translate-y-1 hover:shadow-lg hover:border-none transition-all">
                  <div className="flex items-end justify-center lg:w-1/5 h-full bg-white border-2 rounded-lg border-gray-300 overflow-clip">
                    <img src={item.picture} alt="dettol" />
                  </div>
                  <div>
                    <h2 className="font-bold lg:text-2xl text-xl">
                      {item.name}
                    </h2>
                    <h4 className="font-medium text-gray-600">
                      {item.description}
                    </h4>
                  </div>
                  <div className="w-64">
                    <h2 className="w-full bg-primary text-white px-4 py-2 rounded-xl m-2">
                      Arrival date : {item.date}
                    </h2>
                    <h4 className="w-full bg-green-600 text-white px-4 py-2 rounded-xl m-2">
                      Quantity : {item.quantity}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Delhivery;
