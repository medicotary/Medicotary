import React from "react";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.product.product);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <tr key={id}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-full" src="" alt="" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{title}</div>
              <div className="text-sm text-gray-500">{category}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{price}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <a href={"product.price"}>{price}</a>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <a href={price}>{price}</a>
        </td>
      </tr>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
