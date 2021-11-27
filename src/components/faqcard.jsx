import React, { Component } from "react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";

class FAQCard extends Component {
  render() {
    return (
        <div>
        <Disclosure>
          {({ open }) => (
            <div className="container shadow-md bg-white rounded-lg my-6">
              <Disclosure.Button className="w-full flex justify-between p-4 text-2xl text-left text-black  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className={`${!open ? "text-black " : "text-primary"}`}>
                  {this.props.question}
                </span>
                <ChevronUpIcon
                  className={`${
                    !open ? "transform rotate-180 text-black " : "text-primary"
                  } w-7 h-7 ml-auto item-end`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="p-4 text-md text-black">
              {this.props.answer}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    );
  }
}

export default FAQCard;
