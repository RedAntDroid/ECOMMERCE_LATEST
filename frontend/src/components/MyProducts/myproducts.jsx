import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Myproduct({ id, name, images, description, price }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images]);

  const currentImage = images && images.length > 0 ? images[currentIndex] : null;

  const handleEdit = () => {
    navigate(/create-product/$`{id}`);
  };

  // const handleDelete = async () => {
  //   try {
  //     const response = await axios.delete(
  //       http://localhost:8000/api/v1/product/delete-product/${id}
  //     );

  //     if (response.status === 200) {
  //       alert("Product deleted successfully!");
  //       // Reload the page or fetch products again
  //       window.location.reload();
  //     }
  //   } catch (error) {
  //     console.error("Error deleting product:", error);
  //   }
  // };
}