import React from "react";
import "../../index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar/sidebar";
import { Link } from "react-router-dom";
import { PlusIcon, SearchIcon } from "../../icons/index";
import { VendorActions } from "../../redux/actions";
import { store } from "../../redux";
import { connect } from "react-redux";

class Vendor extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }
  constructor(props) {
    super(props);
    this.state = {
      search_vendor: "",
    };
  }
  inputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value, event.target.name);
    this.setState({ [name]: value });
  };
  render() {
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
    // console.log(filteredData);
    return (
      <div>
        <Header />
        {/* sidebar */}
        <div className="flex w-full overflow-x-hidden">
          <Sidebar place="4" />
          {/* main content container */}
          <div className="mt-10 w-4/5 p-6 bg-gray-50 ml-auto">
            {/* top search bar */}
            <div className="flex justify-between items-stretch">
              {/* search box */}
              <div className="flex space-x-1 items-stretch">
                <input
                  value={this.state.search_vendor}
                  onChange={(event) => this.inputChange(event)}
                  type="text"
                  name="search_vendor"
                  className={`w-full p-4 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out`}
                  id="search"
                  placeholder="Search for vendor"
                />
                <button
                  type="search"
                  className={`cursor-pointer bg-primary p-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
                >
                  <SearchIcon></SearchIcon>
                </button>
              </div>
              {/* add vendor button */}
              <Link to="/addvendor">
                <button className="flex space-x-2 justify-center button px-16 py-4 bg-indigo-600 rounded-lg text-sm font-medium text-center text-white">
                  <PlusIcon></PlusIcon>
                  Add a vendor
                </button>
              </Link>
            </div>
            {/* table */}
            <div className="flex flex-col my-4">
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
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            phone
                          </th>
                          {/* <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th> */}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredData.map((person) => (
                          <tr key={person.vendorId}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={
                                      person.picture
                                        ? person.picture
                                        : "https://github.com/medicotary/Medicotary/blob/main/src/assets/profile/toy%20faces-male-03.png?raw=true"
                                    }
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {person.name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {person.email}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <a href={person.phone}>{person.phone}</a>
                            </td>
                            {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <a
                                  href={
                                    "/vendors/" + person.vendorId + "/update"
                                  }
                                  className="text-indigo-600 hover:text-indigo-900 rounded-lg border py-3 px-8"
                                >
                                  Edit
                                </a>
                              </td>
                            </td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vendor: state.vendor.vendor.vendors,
    isLoading: state.vendor.isLoading,
    isError: state.vendor.isError,
  };
};

const mapDispatchToProps = (dispatch) => {
  const state = store.getState();
  return {
    loadData: () => dispatch(VendorActions.readVendor(state.auth.user.token)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Vendor);
