import React from "react";
import "../../index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar/sidebar";
import Loader from "../../components/loader";

function getCurrentDate(separator = "-") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${date}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${year}`;
}

function changeCurrentDate(billDay = getCurrentDate(), separator = "-") {
  let newDate = new Date(billDay);
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${date}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${year}`;
}

class Invoice extends React.Component {
  // const [search_invoice, setSearchInvoice] = useState("");
  //   componentDidMount() {
  //     this.props.loadData();
  //   }
  constructor(props) {
    super(props);
    this.state = {
      date: changeCurrentDate(),
      total: 0,
      productList: [
        {
          id: 0,
          picture: null,
          productName: "Calpol",
          productQty: 11,
          productPrice: "110",
        },
        {
          id: 1,
          picture: null,
          productName: "remdesivir",
          productQty: 14,
          productPrice: "214",
        },
      ],
      search_bill: "",
    };
  }
  inputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value, event.target.name);
    this.setState({ [name]: value });
  };

  getBillData() {
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
    return filteredData;
  }
  render() {
    console.log("bill data👇🏻", this.getBillData());
    return (
      <div>
        <Header />
        {/* sidebar */}
        <Sidebar />
        {/* main content container */}
        <div className=" mt-auto lg:w-4/5 w-full lg:px-20 p-4 ml-auto bg-gray-50">
          <div className="container bg-white border rounded-lg border-subtle mt-12 lg:p-12 p-2">
            {/* total amount date showcase */}
            <div className="flex flex-row justify-between">
              <div className="w-full flex flex-col">
                <div>
                  <h1 className="text-xl font-medium antialiased mb-1 text-left">
                    Total amount
                  </h1>
                </div>
                <div>
                  <h1 className="text-2xl text-primary font-bold antialiased mb-1 text-left">
                    ₹ {this.state.total}
                  </h1>
                </div>
              </div>
              <div className="w-1/4">
                <div className="flex flex-col ml-auto">
                  <div>
                    <h1 className="text-xl font-medium mb-1 text-left">Date</h1>
                  </div>
                  <div>
                    <h1 className="text-2xl text-primary font-bold  mb-3 text-left">
                      {getCurrentDate()}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <hr className="new2" />
            {/* name*/}
            <div className="mt-4 flex justify-between">
              <div className="text-lg font-medium">Customer Name</div>
              <div className="text-md font-bold">Hayat</div>
            </div>
            {/* description */}
            <div className="mt-4 flex justify-between">
              <div className="text-lg font-medium">Invoice ID</div>
              <div className="text-md font-bold">abcdefg</div>
            </div>
            {/* total number of items */}
            <div className="mt-4 flex justify-between">
              <div className="text-lg font-medium">Total number of items</div>
              <div className="text-md font-bold">40</div>
            </div>
            {/* total amount */}
            <div className="mt-4 flex justify-between">
              <div className="text-lg font-medium">Total amount</div>
              <div className="text-md font-bold">₹ {this.state.total}</div>
            </div>
            <hr className="new2 mt-4" />
            <div className="flex">
              <h1 className="lg:text-2xl text-xl font-medium mt-4 text-primary">
                Products
              </h1>
            </div>
            {/* add multiple products */}
            <ul>
              <li className="flex flex-row justify-between items-center">
                <div className="flex items-center justify-start w-48">
                  <div className="flex-shrink-0 h-12 w-12"></div>
                  <div className="text-md font-bold">Name</div>
                </div>
                <div className="w-20 text-md font-bold">Quantity</div>
                <h1 className="w-20 text-md font-bold">Price</h1>
              </li>
              <hr />
              {this.state.productList.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="flex flex-row justify-between items-center my-2"
                  >
                    <div className="flex items-center justify-start w-48">
                      <div className="flex-shrink-0 h-12 w-12">
                        <img
                          className="h-12 w-12 rounded-lg"
                          src={
                            item.picture
                              ? item.picture
                              : "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1130&q=80"
                          }
                          alt="medicine pic"
                        />
                      </div>
                      <div className="flex flex-col text-bold text-lg capitalize ml-2">
                        {item.productName}
                      </div>
                    </div>
                    <div className="flex w-20">{item.productQty}</div>
                    <h1 className="w-20 text-2xl text-black font-medium antialiased  text-left">
                      ₹ {item.productPrice}
                    </h1>
                  </li>
                );
              })}
            </ul>
            {/* </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Invoice;
