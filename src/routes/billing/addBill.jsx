import React from "react";
import "../../index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar/sidebar";
import { TrashIcon } from "../../icons/index";
import { ProductActions,BillActions } from "../../redux/actions";
import { store } from "../../redux";
import { connect } from "react-redux";


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
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      userInput: "",
      name: "",
      date: getCurrentDate(),
      total: 0,
      productName: "",
      productQty: "",
      productID: 0,
      productList: [],
      search_product: "",
    };
  }
  addItem() {
    const userInput = {
      id: this.state.productID,
      productName: this.state.productName,
      productQty: this.state.productQty,
    };

    // Update productList
    const productList = [...this.state.productList];
    productList.push(userInput);

    // reset state
    this.setState({
      productList,
      userInput: "",
      productName: "",
      productQty: "",
      productID: this.state.productID + 1,
    });
  }
  // Function to delete item from productList use id to delete
  deleteItem(key) {
    const productList = [...this.state.productList];

    // Filter values and leave value which we need to delete
    const updateproductList = productList.filter((item) => item.id !== key);

    // Update productList in state
    this.setState({
      productList: updateproductList,
    });
  }

  inputChange = (event) => {
    const { name, value } = event.target;
    console.log(value, name);
    this.setState({ [name]: value });
  };
  submitForm = async (event) => {
    event.preventDefault();
    console.log(this.state);
    let data = {};
    data.data = {
      phoneNumber: this.state.name,
      products: this.state.productList,
    };
    data.token = this.props.token;
    this.props.sendData(data);
  };

  render() {
    // const { name, description } = this.state;
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
    console.log(filteredData);
    return (
      <div>
        <Header />
        {/* sidebar */}
        <div className="h-9/10 ">
          <Sidebar place="3" />
          {/* main content container */}
          <div className=" mt-auto lg:w-4/5 w-full lg:px-20 p-4 ml-auto bg-gray-50">
            <div className="container bg-white border rounded-lg border-subtle mt-12 lg:p-10 p-2">
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
              <form className="mt-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={(e) => this.inputChange(e)}
                    placeholder="Jhon Doe"
                    required
                  />
                </div>
                {/* <div>
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <textarea
                    type="description"
                    rows="2"
                    className={`w-full p-2 text-primary form-textarea border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id="description"
                    name="description"
                    value={this.state.description}
                    onChange={(e) => this.inputChange(e)}
                    placeholder="small desction about the bill (if any)"
                  />
                </div> */}
              </form>
              <div className="flex flex-row justify-between">
                <h1 className="text-3xl font-medium mt-4 text-primary antialiased mb-1 text-left">
                  Products
                </h1>
                <div className="py-2 flex flex-row">
                  <div className="flex flex-col px-2">
                    <label htmlFor="name" className="text-sm">
                      Medicine Name
                    </label>
                    <input
                      type="name"
                      className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out `}
                      id="name"
                      name="productName"
                      value={this.state.productName}
                      onChange={(e) => this.inputChange(e)}
                      placeholder="Remdesivir"
                      required
                    />
                  </div>
                  <div className="flex flex-col px-2">
                    <label htmlFor="qty" className="text-sm">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out `}
                      id="qty"
                      name="productQty"
                      value={this.state.productQty}
                      onChange={(e) => this.inputChange(e)}
                      placeholder="10"
                      required
                    />
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
                      <div className="flex flex-col">
                        <h1>{item.productName}</h1>
                      </div>
                      <div className="flex flex-col">
                        <h1>{item.productQty}</h1>
                      </div>
                      <h1 className="text-2xl text-black font-medium antialiased  text-left">
                        ₹ 0
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
              <button
                type="submit"
                onClick={this.submitForm}
                className={`w-full border bg-primary hover:bg-indigo-700 transition-all text-white py-2 px-10 text-sm  cursor-pointer  rounded-lg`}
              >
                Create Bill
              </button>
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
    sendData: (data)=> dispatch(BillActions.addBill(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBill);
