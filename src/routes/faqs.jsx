import React from "react";
import "../index.css";
import Header from "../components/header_advance";
import { ChevronUpIcon } from "@heroicons/react/solid";
// import MyDisclosure from "../components/disclosure";
import { Disclosure, Transition } from "@headlessui/react";

function MyDisclosure() {
  return (
    <div classname="">
      <Disclosure>
        {({ open }) => (
          <div className="container shadow bg-white rounded-lg my-3">
            <Disclosure.Button className="w-full flex justify-between p-4 text-2xl text-left text-black  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className={`${!open ? "text-black " : "text-primary"}`}>
                How does the dasboard display the data?
              </span>
              <ChevronUpIcon
                className={`${
                  !open ? "transform rotate-180 text-black " : "text-primary"
                } w-7 h-7 ml-auto item-end`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 text-md text-black">
              The data from the databse is used to display the data to the
              dashboard.
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}

const Faq = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <div className="h-9/10 flex ">
        <div className="justify-center mt-12 ml-auto mr-auto w-2/3">
          <div className="">
            <h1 className="text-center text-3xl font-medium mt-8 mb-4 antialiased p-5">
              Have any question?
            </h1>
          </div>
          <MyDisclosure />
        </div>
      </div>
    </div>
  );
};

export default Faq;
