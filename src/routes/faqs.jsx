import React from "react";
import "../index.css";
import Header from "../components/header";
// import MyDisclosure from "../components/disclosure";
import { Disclosure } from '@headlessui/react'

function MyDisclosure() {
  return (
    <Disclosure>
      <Disclosure.Button className="py-2">
        Is team pricing available?
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
        Yes! You can purchase a license that you can share with your entire
        team.
      </Disclosure.Panel>
    </Disclosure>
  )
}

const Delivery = () => {
  return (
    <div>
      <Header />
      {/* main content container */}
      <div className="m-72">
        <MyDisclosure></MyDisclosure>
      </div>
    </div>
  );
};

export default Delivery;
