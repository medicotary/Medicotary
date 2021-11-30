import "../../index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar/sidebar";
import ProductComponent from "../../components/productTile";

const Product = () => {
  // const [search_product, setSearchProduct] = useState("");
  console.log("Product Reached");
  return (
    <div>
      <Header />
      {/* sidebar */}
      <div className="flex w-full overflow-x-hidden">
        <Sidebar place="2" />
        {/* main content container */}
        <ProductComponent />
      </div>
    </div>
  );
};

export default Product;
