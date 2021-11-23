import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { ProductActions } from ".././redux/actions";
import { PlusIcon } from ".././icons/index";
import { Link } from "react-router-dom";
import { SearchIcon } from ".././icons/index";
import Loader from "./loader";
import { store } from ".././redux";
class ProductComponent extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  constructor(props) {
    super(props);
    this.state = {
      search_product: "",
    };
  }

  inputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value, event.target.name);
    this.setState({ [name]: value });
  };

  render() {
    const renderList =
      !this.props.isLoading && this.props.products ? (
        this.state.search_product.length > 0 ? (
          this.props.products
            .filter((product) =>
              product.name
                .toLowerCase()
                .includes(this.state.search_product.toLowerCase())
            )
            .map((product) => {
              const {
                productsId,
                name,
                picture,
                quantity,
                lowStock,
                costPrice,
                sellingPrice,
              } = product;
              return (
                <tr key={productsId}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={picture}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {name}
                        </div>
                        <div className="text-sm text-gray-500">{quantity}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{lowStock}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {costPrice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {sellingPrice}
                  </td>
                </tr>
              );
            })
        ) : (
          this.props.products.map((product) => {
            const {
              productsId,
              name,
              picture,
              quantity,
              lowStock,
              costPrice,
              sellingPrice,
            } = product;
            return (
              <tr key={productsId}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={picture}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {name}
                      </div>
                      <div className="text-sm text-gray-500">{quantity}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{lowStock}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {costPrice}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {sellingPrice}
                </td>
              </tr>
            );
          })
        )
      ) : (
        <div className="align-center w-full">
          <Loader />
        </div>
      );
    return (
      <div className="mt-auto w-4/5 p-10 bg-gray-50 ml-auto">
        <div className="mt-8"></div>
        {/* top search bar */}
        <div className="flex justify-between items-stretch">
          {/* search box */}
          <div className="flex space-x-1 items-stretch">
            <input
              value={this.search_product}
              onChange={(e) => this.inputChange(e)}
              type="search"
              className={`w-full p-4 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out`}
              id="search"
              placeholder="Search for product"
            />
            <button
              type="search"
              className={`cursor-pointer bg-primary p-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
            >
              <SearchIcon></SearchIcon>
            </button>
          </div>
          {/* filter dropdown */}
          <div className="w-1/5">
            <select class="appearance-none bg-transparent text-gray-500 font-medium text-sm focus:outline-none focus:text-gray-900 transition-colors duration-200 p-4 rounded-lg  w-full">
              <option value="v5">Name</option>
              <option value="v4">Cost price</option>
              <option value="v3">Selling price</option>
              <option value="v2">Profit</option>
              <option value="v1">Qty in stock</option>
            </select>
          </div>
          {/* add vendor button */}
          <Link to="/addproduct">
            <button className="flex space-x-2 justify-center button px-16 py-4 bg-indigo-600 rounded-lg text-sm font-medium text-center text-white">
              <PlusIcon></PlusIcon>
              Add a product
            </button>
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Medicine
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        instock
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        cost price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        selling price
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {renderList}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapToState = (state) => {
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
  };
};

export default connect(mapToState, mapDispatchToProps)(ProductComponent);
