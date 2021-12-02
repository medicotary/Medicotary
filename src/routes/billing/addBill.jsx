import React from "react";
import "../../index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar/sidebar";
import { TrashIcon } from "../../icons/index";
import { ProductActions, BillActions } from "../../redux/actions";
import { store } from "../../redux";
import { connect } from "react-redux";
import Loader from "../../components/loader";

// Filtered Data has all the products

function getCurrentDate(separator = "-") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${date}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${year}`;
}

class AddBill extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }
  //to get data of the medicine dropdown
  getOption() {
    let selectElement = document.querySelector("#product-dropdown");
    let output = selectElement.value;
    return output;
  }
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      userInput: "",
      name: "",
      billdesc: "",
      date: getCurrentDate(),
      total: 0,
      productName: "",
      productQty: 0,
      productPrice: 0,
      productID: 0,
      maxLimit: 10,
      productList: [],
      search_product: "",
    };
  }
  addItem() {
    let nameoftile =
      this.getMedicineData()[this.searchMedicineData(this.getOption())].name;
    let priceoftile =
      this.getMedicineData()[this.searchMedicineData(this.getOption())]
        .sellingPrice * this.state.productQty;
    let pictureoftile =
      this.getMedicineData()[this.searchMedicineData(this.getOption())].picture;

    const userInput = {
      id: this.state.productID,
      productName: nameoftile,
      productQty: this.state.productQty,
      productPrice: priceoftile,
      picture: pictureoftile,
    };

    // Update productList
    const productList = [...this.state.productList];
    productList.push(userInput);

    // reset state
    this.setState({
      productList,
      userInput: "",
      productName: "",
      productQty: 0,
      productPrice: 0,
      productID: this.state.productID + 1,
      total: this.state.total + priceoftile,
    });
  }
  // Function to delete item from productList use id to delete
  deleteItem(key) {
    const productList = [...this.state.productList];
    const deletetile = productList.filter((item) => item.id === key);
    let priceoftile = deletetile[0].productPrice;

    // Filter values and leave value which we need to delete
    const updateproductList = productList.filter((item) => item.id !== key);

    // Update productList in state
    this.setState({
      productList: updateproductList,
      total: this.state.total - priceoftile,
    });
  }

  inputChange = (event) => {
    const { name, value } = event.target;
    console.log(value, name);
    this.setState({ [name]: value });
    let maxLimit =
      this.getMedicineData()[this.searchMedicineData(this.getOption())]
        .quantity;
    this.setState({
      maxLimit: maxLimit,
    });
  };

  clearForm = (event) => {
    this.setState({
      userInput: "",
      name: "",
      billdesc: "",
      date: getCurrentDate(),
      total: 0,
      productName: "",
      productQty: 0,
      productPrice: 0,
      productID: 0,
      productList: [],
      search_product: "",
    });
  };

  submitForm = async (event) => {
    event.preventDefault();
    console.log(this.state);
    let data = {};

    let someList = [];
    for (let i = 0; i < this.state.productList.length; i++) {
      someList[i] = {
        productName: this.state.productList[i].productName,
        quantity: this.state.productList[i].productQty,
      };
    }
    console.log(someList);
    data.data = {
      phoneNumber: this.state.name,
      products: someList,
    };
    data.token = this.props.token;
    await this.props.sendData(data);
    this.clearForm(event);
  };

  getMedicineData() {
    let filteredData = [];
    const products = this.props.products ? this.props.products : [];
    if (this.state.search_product.length > 0) {
      filteredData = [];
      filteredData = products.filter(({ name }) => {
        return name
          .toLowerCase()
          .includes(this.state.search_product.toLowerCase());
      });
    } else {
      filteredData = [];
      filteredData = products;
    }
    return filteredData;
  }
  getAllMedicineData() {
    let filteredData = [];
    const products = this.props.products ? this.props.products : [];
    filteredData = [];
    filteredData = products;
    return filteredData;
  }

  searchMedicineData(search) {
    let fullMedicineData = this.getMedicineData();
    return fullMedicineData.findIndex(checkName);
    function checkName(name) {
      return name.name === search;
    }
  }
  searchAllMedicineData(search = "") {
    let fullMedicineData = this.getAllMedicineData()
      ? this.getAllMedicineData()
      : [];
    return fullMedicineData.findIndex(checkName);
    function checkName(name) {
      return name.name === search;
    }
  }

  render() {
    console.log(this.getMedicineData());
    // this.getOption();
    console.log(this.state.maxLimit);
    // let limit =
    //   this.getAllMedicineData()[
    //     this.searchAllMedicineData(this.getOption() ? this.getOption() : "")
    //   ].quantity;
    // console.log(limit);
    // this.setState({
    //   maxLimit: limit,
    // });

    return (
      <div>
        <Header />
        {/* sidebar */}
        <div className="h-9/10 ">
          <Sidebar />
          {/* main content container */}
          <div className=" mt-auto lg:w-4/5 w-full lg:px-20 p-4 ml-auto bg-gray-50">
            <div className="container bg-white border rounded-lg border-subtle mt-12 lg:p-10 p-2">
              {/* total amount date showcase */}
              <div className="flex flex-row justify-center">
                <div className="w-1/2 flex flex-col">
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
                <div className="w-1/2">
                  <div className="w-1/2 flex flex-col ml-auto">
                    <div>
                      <h1 className="text-xl font-medium antialiased mb-1 text-left">
                        Date
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-2xl text-primary font-bold  antialiased mb-3 text-left">
                        {getCurrentDate()}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* name*/}
              <div className="mt-4">
                <label htmlFor="name" className="text-sm font-medium">
                  Customer Name
                </label>
                <input
                  type="text"
                  autofocus
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={(e) => this.inputChange(e)}
                  placeholder="Jhon Doe"
                  required
                />
              </div>
              {/* description */}
              <div>
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <textarea
                  type="text"
                  rows="2"
                  className={`w-full p-2 text-primary form-textarea border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="description"
                  name="billdesc"
                  value={this.state.billdesc}
                  onChange={(e) => this.inputChange(e)}
                  placeholder="small description about the bill (if any)"
                />
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="lg:text-3xl text-xl font-medium mt-4 text-primary">
                  Products
                </h1>
                <div className="py-2 flex flex-row">
                  <div className="flex flex-col px-2">
                    <label htmlFor="product-dropdown" className="text-sm">
                      Medicine Name
                    </label>
                    <div className="w-56">
                      <select
                        name="products"
                        required
                        id="product-dropdown"
                        class="appearance-none bg-transparent text-gray-500 font-medium text-sm focus:outline-none focus:text-gray-900 transition-colors p-2 rounded-lg  w-full"
                      >
                        {this.getMedicineData().map(({ name }) => (
                          <option value={name}>{name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col px-2">
                    <label htmlFor="qty" className="text-sm">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className={`w-full p-2 border rounded-md outline-none text-sm`}
                      id="qty"
                      name="productQty"
                      value={this.state.productQty}
                      onChange={(e) => this.inputChange(e)}
                      placeholder="10"
                      required
                    />
                    {this.state.productQty > this.state.maxLimit ? (
                      <div className="text-error text-xs py-1 font-medium">
                        {" "}
                        not enough stock{" "}
                      </div>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    onClick={() => this.addItem()}
                    className={`max-width-min bg-primary hover:bg-indigo-700 transition-all text-white py-2 px-6 text-sm  cursor-pointer  rounded-lg`}
                  >
                    Add Product
                  </button>
                </div>
              </div>
              {/* add multiple products */}
              <ul>
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
                      <button
                        type="button"
                        onClick={() => this.deleteItem(item.id)}
                        className="bg-red-100 p-2 rounded-lg"
                      >
                        <TrashIcon stroke="red"></TrashIcon>
                      </button>
                    </li>
                  );
                })}
              </ul>
              {/* <BillProduct items={this.state.productList} deleteFunc={() => this.deleteItem(item.id)} /> */}
              {/* <Link to="/products" class="w-full"> */}
              {!this.props.isLoading ? (
                <button
                  type="submit"
                  onClick={this.submitForm}
                  className={`w-full border bg-primary hover:bg-indigo-700 transition-all text-white py-2 px-10 text-sm  cursor-pointer  rounded-lg`}
                >
                  Create Bill
                </button>
              ) : (
                <button
                  className={`w-full flex disable cursor-pointer justify-center items-center bg-primary py-2 px-4 rounded border focus:outline-none`}
                >
                  <div className="justify-self-center">
                    <Loader color="#ffffff" />
                  </div>
                </button>
              )}
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.user.token,
    products: state.product.product.products,
    isLoading: state.product.isLoading,
    isError: state.product.isError,
  };
};

const mapDispatchToProps = (dispatch) => {
  const state = store.getState();
  return {
    loadData: () => dispatch(ProductActions.readProduct(state.auth.user.token)),
    sendData: (data) => dispatch(BillActions.addBill(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBill);
