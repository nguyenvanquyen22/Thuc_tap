import { products } from "../products/products.js";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

console.log(products);
const ProductDetail = () => {
  const { id } = useParams(); // Lấy giá trị ID từ tham số URL

  const [product, setProduct] = useState(null); // Khởi tạo state để lưu sản phẩm

  useEffect(() => {
    // Tìm sản phẩm trong danh sách theo ID
    const foundProduct = products.find((item) => item.id === id);

    // Cập nhật state với sản phẩm tìm thấy
    setProduct(foundProduct);
  }, [id]);

  // Kiểm tra nếu sản phẩm không tồn tại
  if (!product) {
    return <div>Loading...</div>;
  }

  // Hiển thị thông tin sản phẩm
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>Price: {product.price}</p>
      <ul>
        {product.detail.map((item) => (
          <li key={item.id}>
            {item.name}: {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
