import React, { useState } from "react";
import "../../index.css";
import Popup from "reactjs-popup";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar/sidebar";
import MiddleStats from "../../components/billing/middle-stats";
import { PieChart } from "react-minimal-pie-chart";
import { PlusIcon, SearchIcon } from "../../icons/index";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import Loader from "../../components/loader";
import { BillActions, HomeActions } from "../../redux/actions";
import { store } from "../../redux";
import { connect } from "react-redux";
import Invoice from "../../components/billing/invoice";

// const invoices = [
//   {
//     name: "Hayat Tamboli",
//     totalamount: "₹ 1100",
//     date: "10-10-2021",
//     desc: "Lorem ipsum dolor sit amet, consectet ui i",
//   },
//   {
//     name: "Manas gupta",
//     totalamount: "₹ 500",
//     date: "9-10-2021",
//     desc: "Lorem ipsum dolor sit amet, consectet ui i",
//   },
//   // More invoices...
// ];

function changeCurrentDate(billDay, separator = "-") {
  let newDate = new Date(billDay);
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${date}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${year}`;
}

class Billing extends React.Component {
  // const [search_invoice, setSearchInvoice] = useState("");
  componentDidMount() {
    this.props.loadData();
    this.props.loadHomeData();
  }
  constructor(props) {
    super(props);
    this.state = {
      search_bill: "",
    };
  }
  inputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value, event.target.name);
    this.setState({ [name]: value });
  };
  render() {
    let filteredData = [];
    const bill = this.props.bills ? this.props.bills : [];
    if (this.state.search_bill.length > 0) {
      filteredData = [];
      filteredData = bill.filter(({ phoneNumber }) => {
        return phoneNumber
          .toLowerCase()
          .includes(this.state.search_bill.toLowerCase());
      });
    } else {
      filteredData = [];
      filteredData = bill;
    }
    return (
      <div>
        <Header />
        {/* sidebar */}
        <div>
          <Sidebar place="3" />
          {/* main content container */}
          <div className=" mt-auto lg:w-4/5 w-full p-10 bg-gray-50 ml-auto flex flex-col space-y-6">
            {/* addcharts here */}
            <div className="mt-10 lg:flex-row flex-col flex space-10">
              {/* sales chart */}
              <div className="flex flex-col space-y-6 items-center justify-start flex-1 p-10 my-2 lg:m-0 lg:mr-2 bg-white border-2 rounded-2xl border-gray-300">
                <p className="text-xl font-bold text-gray-900">Sales</p>
                <div className="w-full -mt-4">
                  <Chart
                    width={"400px"}
                    height={"250px"}
                    chartType="BarChart"
                    loader={<Loader color="#8776EE" />}
                    data={[
                      [
                        "Date",
                        "Sales",
                        { role: "style" },
                        {
                          sourceColumn: 0,
                          role: "annotation",
                          type: "string",
                          calc: "stringify",
                        },
                      ],
                      [null, 40, "#8776EE", null],
                      [null, 70, "#8776EE", null],
                      [null, 50, "#8776EE", null],
                      [null, 20, "#8776EE", null],
                      [null, 40, "#8776EE", null],
                      [null, 50, "#8776EE", null],
                      [null, 70, "#8776EE", null],
                    ]}
                    options={{
                      is3D: true,
                      backgroundColor: "#00ffff00",
                      width: 400,
                      height: 250,
                      bar: { groupWidth: "70%" },
                      legend: { position: "none" },
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-6 items-center justify-start flex-1 p-10 my-2 lg:m-0 lg:ml-2 bg-white border-2 rounded-2xl border-gray-300">
                <p className="text-xl font-bold text-gray-900">Statistics</p>
                <div className="w-48 object-scale-down">
                  <PieChart
                    animate
                    animationDuration={500}
                    animationEasing="ease-out"
                    center={[50, 50]}
                    data={[
                      { title: "Two", value: 15, color: "#31D0AA" },
                      { title: "Three", value: 20, color: "#E85B81" },
                    ]}
                    lengthAngle={360}
                    lineWidth={20}
                    paddingAngle={0}
                    radius={50}
                    rounded
                    startAngle={90}
                    viewBoxSize={[100, 100]}
                  />
                </div>
              </div>
            </div>
            {this.props.isHomeLoading ? (
              <Loader color="#8776EE" />
            ) : (
              <MiddleStats
                remaining={this.props.maxLimit ? this.props.maxLimit - 100 : 0}
                limit={this.props.maxLimit ? this.props.maxLimit : 100}
              />
            )}
            <p className="text-4xl font-medium text-gray-900">Invoices</p>
            {/* top search bar */}
            <div className="flex justify-between items-stretch">
              {/* search box */}
              <div className="flex space-x-1 items-stretch">
                <input
                  value={this.state.search_bill}
                  onChange={(event) => this.inputChange(event)}
                  type="text"
                  name="search_bill"
                  className={`w-full p-4 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out`}
                  id="search"
                  placeholder="Search for Invoice"
                />
                <button
                  type="search"
                  className={`cursor-pointer bg-primary p-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
                >
                  <SearchIcon></SearchIcon>
                </button>
              </div>
              {/* add bill button */}
              <Link to="/addbill">
                <button className="flex space-x-2 justify-center button lg:px-16 px-8 py-4 bg-primary hover:bg-indigo-700 transition-all rounded-lg text-sm font-medium text-center text-white">
                  <PlusIcon></PlusIcon>
                  Add a bill
                </button>
              </Link>
            </div>
            {/* table */}
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      total amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      date
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">View</span>
                    </th>
                  </tr>
                </thead>
                {this.props.isLoading ? (
                  <Loader color="#8776EE" />
                ) : (
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredData.map((bill) => (
                      <tr key={bill.billId}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {/* <a href={"/billing/" + bill.billId}> */}
                          <div className="text-sm font-medium text-gray-900">
                            {bill.phoneNumber}
                          </div>
                          {/* </a> */}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {bill.cost}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm ">
                          {changeCurrentDate(bill.createdAt)}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
                          <Popup
                            trigger={
                              <button className="px-6 py-3 whitespace-nowrap text-sm text-indigo-600 hover:text-indigo-900 rounded-lg border">
                                View
                              </button>
                            }
                            modal
                          >
                            {(close) => (
                              <Invoice
                                name={bill.phoneNumber}
                                totalAmount={bill.cost}
                                date={changeCurrentDate(bill.createdAt)}
                                products={ bill.products}
                              ></Invoice>
                            )}
                          </Popup>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bills: state.bill.bill.bills,
    isLoading: state.bill.isLoading,
    isError: state.bill.isError,
    data: state.home.home,
    isHomeLoading: state.home.isLoading,
    isHomeError: state.home.isError,
    maxLimit: state.auth.user.user.maxLimit,
  };
};

const mapDispatchToProps = (dispatch) => {
  const state = store.getState();
  return {
    loadData: () => dispatch(BillActions.readBill(state.auth.user.token)),
    loadHomeData: () => dispatch(HomeActions.read(state.auth.user.token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Billing);
