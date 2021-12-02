import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ProductActions } from "../../redux/actions";
import Loader from "../loader";
import { VendorActions } from "../../redux/actions";
import { store } from "../../redux";
class ProductForm extends Component {
  componentDidMount() {
    this.props.loadData();
  }
  getOption() {
    let selectElement = document.querySelector("#preffered-vendor");
    let output = selectElement.value;
    return output;
  }
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sellingPrice: 0,
      quantity: 0,
      lowStock: 0,
      costPrice: 0,
      preferredVendor: "",
      additionalNotes: "",
      search_vendor: "",
      errors: {
        name: "Enter User Name!",
        sellingPrice: undefined,
        quantity: undefined,
        lowStock: undefined,
        costPrice: undefined,
        preferredVendor: "",
        additionalNotes: "",
      },
    };
  }

  clearForm = (event) => {
    this.setState({
      name: "",
      sellingPrice: 0,
      quantity: 0,
      lowStock: 0,
      costPrice: 0,
      preferredVendor: "",
      additionalNotes: "",
    });
  };

  inputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value, event.target.name);
    this.setState({ [name]: value });
    this.validationErrorMessage(event);
  };

  validationErrorMessage = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "name":
        errors.name = value.length < 1 ? "Enter User Name" : "";
        break;
      case "sellingPrice":
        errors.sellingPrice = value > 1 ? "Enter Greater value than 1" : "";
        break;
      default:
        break;
    }
    this.setState({ errors });
  };

  submitForm = async (event) => {
    event.preventDefault();
    let data = {};
    data.data = {
      name: this.state.name,
      sellingPrice: this.state.sellingPrice,
      quantity: this.state.quantity,
      lowStock: this.state.lowStock,
      costPrice: this.state.costPrice,
      preferredVendor: this.getOption(),
      additionalNotes: this.state.additionalNotes,
    };
    data.token = this.props.token;
    this.props.addData(data);
    this.clearForm(event);
  };

  getVendorData() {
    let filteredData = [];
    const vendor = this.props.vendor ? this.props.vendor : [];
    if (this.state.search_vendor.length > 0) {
      filteredData = [];
      filteredData = vendor.filter(({ name }) => {
        return name
          .toLowerCase()
          .includes(this.state.search_vendor.toLowerCase());
      });
    } else {
      filteredData = [];
      filteredData = vendor;
    }
    return filteredData;
  }

  render() {
    const {
      name,
      sellingPrice,
      quantity,
      lowStock,
      costPrice,
      preferredVendor,
      additionalNotes,
    } = this.state;

    console.log(this.getVendorData());
    return (
      <div className=" mt-auto lg:w-4/5 w-full lg:p-10 p-4 bg-gray-50 ml-auto">
        <div className="mt-12">
          <div className="flex flex-row justify-center">
            <div className="w-1/3">
              <div class="flex flex-col mt-3">
                <div className="flex">
                  <div className="">
                    <img
                      src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1130&q=80"
                      alt=""
                      class="rounded w-2/3  object-scale-down"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="py-3">
                    {/* <Link to="/login" class="w-full"> */}
                    <button
                      className={`w-2/3 border bg-primary hover:bg-indigo-700 transition-all text-white py-2 px-8 text-sm  cursor-pointer  rounded-lg`}
                    >
                      Browse Photos
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
                <div className="">
                  <div className="">
                    {/* <Link to="/login" class="w-full"> */}
                    <button
                      className={`w-2/3 border bg-error text-white py-2 px-8 text-sm  cursor-pointer  rounded-lg`}
                    >
                      Remove Photo
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 px-10">
              <form>
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    value={name}
                    name="name"
                    onChange={(e) => this.inputChange(e)}
                    type="text"
                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id="name"
                    placeholder="Remdesivir"
                  />
                </div>
                <div>
                  <label htmlFor="qty" className="text-sm font-medium">
                    Quantity in stock
                  </label>
                  <input
                    value={quantity}
                    name="quantity"
                    onChange={(e) => this.inputChange(e)}
                    type="number"
                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 `}
                    id="qty"
                    placeholder="220"
                  />
                </div>
                <div>
                  <label htmlFor="lqty" className="text-sm font-medium">
                    Low stock warning
                  </label>
                  <input
                    value={lowStock}
                    name="lowStock"
                    onChange={(e) => this.inputChange(e)}
                    type="number"
                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id="lqty"
                    placeholder="15"
                  />
                </div>
                <div class="flex lg:flex-row flex-col justify-evenly w-full">
                  <div>
                    <label htmlFor="cp" className="text-sm font-medium">
                      Cost Price (1 item)
                    </label>
                    <input
                      value={costPrice}
                      name="costPrice"
                      onChange={(e) => this.inputChange(e)}
                      type="number"
                      className={`w-3/7 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                      id="cp"
                      placeholder="	₹ 150"
                    />
                  </div>
                  <div>
                    <label htmlFor="sp" className="text-sm font-medium">
                      Selling Price (1 item)
                    </label>
                    <input
                      name="sellingPrice"
                      value={sellingPrice}
                      onChange={(e) => this.inputChange(e)}
                      type="number"
                      className={`w-3/7 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                      id="sp"
                      placeholder="₹ 170"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="vendor" className="text-sm font-medium">
                    Preffered vendor
                  </label>
                  <select
                    name="vendor"
                    id="preffered-vendor"
                    className="rounded-lg"
                  >
                    {this.getVendorData().map(({ name }) => (
                      <option value={name}>{name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="vendor" className="text-sm font-medium">
                    Additional Notes
                  </label>
                  <textarea
                    value={additionalNotes}
                    onChange={(e) => this.inputChange(e)}
                    type="text"
                    name="additionalNotes"
                    rows="3"
                    className={`w-full p-2 text-primary form-textarea border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-2`}
                    id="vendor"
                    placeholder="Enter some small description"
                  />
                </div>
                <div class="flex flex-row justify-between mt-3">
                  <div className="py-5">
                    <Link to="/products" class="w-full">
                      <button
                        onClick={this.clearForm}
                        className={`w-full cursor-pointer py-2 px-12 text-sm text-primary rounded-lg border border-primary focus:outline-none focus:`}
                      >
                        Cancel
                      </button>
                    </Link>
                  </div>
                  {this.props.isLoading ? (
                    <div className="py-5">
                      <button
                        className={`w-full border bg-primary hover:bg-indigo-700 transition-all text-white py-2 px-10 text-sm  cursor-pointer  rounded-lg`}
                      >
                        <Loader color="#fff" />
                      </button>
                    </div>
                  ) : (
                    <div className="py-5">
                      <button
                        type="submit"
                        onClick={this.submitForm}
                        className={`w-full border bg-primary hover:bg-indigo-700 transition-all text-white py-2 px-10 text-sm  cursor-pointer  rounded-lg`}
                      >
                        Add Product
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapToState = (state) => {
  return {
    vendor: state.vendor.vendor.vendors,
    isVendorLoading: state.vendor.isLoading,
    token: state.auth.user.token,
    isLoading: state.product.isLoading,
    isError: state.product.isError,
  };
};

const mapDispatchToProps = (dispatch) => {
  const state = store.getState();
  return {
    loadData: () => dispatch(VendorActions.readVendor(state.auth.user.token)),
    addData: (data) => dispatch(ProductActions.addProduct(data)),
  };
};

export default connect(mapToState, mapDispatchToProps)(ProductForm);
