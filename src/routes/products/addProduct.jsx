import React  from "react";
import "../../index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar/sidebar";
// import { Link } from "react-router-dom";
import ProductForm from "../../components/forms/ProductForm";

const AddProducts = () => {
  // const [name, setName] = useState("");
  // const [quantity, setQuantity] = useState("0");
  // const [lowStock, setLowStock] = useState("0");
  // const [costPrice, setCostPrice] = useState("0");
  // const [sellingPrice, setSellingPrice] = useState("0");
  // const [preferredVendor, setPreferredVendor] = useState("");
  // const [additionalNotes, setAdditionalNotes] = useState("");
  // const submit = () => {
  //   console.log({
  //     name,
  //     quantity,
  //     lowStock,
  //     costPrice,
  //     sellingPrice,
  //     preferredVendor,
  //     additionalNotes,
  //   });
  // };
  return (
    <div>
      <Header />
      {/* sidebar */}
      <div className="h-9/10 ">
        <Sidebar place="2" />
        {/* main content container */}
        <ProductForm />
      </div>
    </div>
  );
};

export default AddProducts;
