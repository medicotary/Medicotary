import React from "react";
import "../index.css";
import { connect } from "react-redux";
import Header from "../components/header";
import Sidebar from "../components/sidebar/sidebar";
import WeightedScore from "../components/dashboard/graphs/weighted-score";
import StockPercentage from "../components/dashboard/graphs/stock-percentage";
import TopBanner from "../components/dashboard/topbanner";
import OutOfStockProducts from "../components/dashboard/middle-section/out-of-stock-products";
import ProductsOnLowStock from "../components/dashboard/middle-section/products-on-low-stock";
import ProductsToBeArrived from "../components/dashboard/middle-section/products-to-be-arrived";
import { HomeActions } from "../redux/actions";
import { store } from "../redux";
import Loader from "../components/loader";
class Dashboard extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    const lowStock = this.props.data.lowStock
      ? this.props.data.lowStock.length
      : 0;
    const outOfStock = this.props.data.outOfStock
      ? this.props.data.outOfStock.length
      : 0;
    console.log(lowStock, outOfStock);
    let rndInt = Math.floor(Math.random() * 10) + 1;
    rndInt = 2;
    return (
      <div>
        <Header />
        <div className="flex h-9/10">
          <Sidebar place="1" />
          {/* main content container */}
          <div className=" mt-auto lg:w-4/5 w-full p-10 bg-gray-50 lg:ml-auto">
            <TopBanner />
            {/* middle section */}
            {this.props.isLoading && !this.props.data ? (
              <Loader />
            ) : (
              <div className="md:flex-row flex-col flex gap-4 items-stretch justify-between my-6">
                <OutOfStockProducts amt={outOfStock} />
                <ProductsOnLowStock amt={lowStock} />
                <ProductsToBeArrived amt={rndInt} />
              </div>
            )}
            {/* bottom graphs */}

            <div className="md:flex-row flex-col flex">
              {this.props.isLoading && !this.props.data ? (
                <Loader />
              ) : (
                <WeightedScore
                  lowStock={
                    (lowStock / (lowStock + outOfStock + rndInt + 1)) * 100
                  }
                  outOfStock={
                    (outOfStock / (lowStock + outOfStock + rndInt + 1)) * 100
                  }
                  arrivingStock={
                    100 -
                    (lowStock / (lowStock + outOfStock + rndInt + 1)) * 100 -
                    (outOfStock / (lowStock + outOfStock + rndInt + 1)) * 100
                  }
                />
              )}
              {this.props.isLoading ? (
                <Loader />
              ) : (
                <StockPercentage percentage={0.5} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const Dashboard = () => {
//   return (
//     <div>
//       <Header />
//       <div className="flex h-9/10">
//         <Sidebar place="1" />
//         {/* main content container */}
//         <div className=" mt-auto w-4/5 p-10 bg-gray-50 ml-auto">
//           <TopBanner />
//           {/* middle section */}
//           <div className="flex gap-4 items-stretch justify-between my-6">
//             <OutOfStockProducts amt="4" />
//             <ProductsOnLowStock amt="4" />
//             <ProductsToBeArrived amt="4" />
//           </div>
//           {/* bottom graphs */}
//           <div className="flex space-x-6">
//             <WeightedScore />
//             <StockPercentage percentage="0.4" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const mapStateToProps = (state) => {
  return {
    data: state.home.home,
    isLoading: state.home.isLoading,
    isError: state.home.isError,
    maxLimit: state.auth.user.user.maxLimit,
  };
};

const mapDispatchToProps = (dispatch) => {
  const state = store.getState();
  return {
    loadData: () => dispatch(HomeActions.read(state.auth.user.token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
