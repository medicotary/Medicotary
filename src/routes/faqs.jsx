import React from "react";
import "../index.css";
import Header from "../components/header";
import FAQCard from "../components/faqcard";

const Faq = () => {
  return (
    <div className="bg-gray-50">
      <Header back="true" />
      <div className="h-9/10 flex ">
        <div className="justify-center mt-12 ml-auto mr-auto w-2/3">
          <div className="">
            <h1 className="text-center text-3xl font-medium mt-8 mb-4 antialiased p-5">
              Have any question?
            </h1>
          </div>
          <FAQCard
            question="How can I create a new bill?"
            answer="1. Click the create bill button on homepage in the main banner 2. Use quick add  3. Navigate to Billing page and click 'Create bill' button"
          />
          <FAQCard
            question="How can I add a new product?"
            answer="Use the quick add feature or Navigate to Products page and click the 'Add product' button"
          />
          <FAQCard question="Who are vendors?" answer="Vendors are those people who you can contact and order more medicines if you want to , you can make a directory of thema dn that directory can be daved in the vendors page, which you can refer at any time" />
          <FAQCard question="How is Dashboard useful for me?" answer="At a glance you will get to know what all medicines are out of stock and how many are on low stock, so that you can then look at your notifications and directly buy them from the vendors" />
          <FAQCard question="How can I see history of bills?" answer="You have to Navigate to the billings page and scroll down, you will find all the invoices present in your history" />
          {/* <FAQCard question="How to track delivery?" answer="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Faq;
