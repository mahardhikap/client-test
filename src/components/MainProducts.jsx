import React, { useState, useEffect } from 'react';
import axios from 'axios';
let url = import.meta.env.VITE_BASE_URL;
import Swal from 'sweetalert2';
export function MainProducts() {
  const [mainProduct, setMainProduct] = useState([]);
  const handleMainProduct = () => {
    axios
      .get(`${url}/product`)
      .then((result) => {
        setMainProduct(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const slicedProduct = mainProduct.slice(3);
  const handleSendToCart = async (id, product) => {
    await axios
      .post(`${url}/cart/${id}`)
      .then(() => Swal.fire(`item ${product} telah ditambahkan ke keranjang`))
      .then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
  };
  useEffect(() => {
    handleMainProduct();
  }, []);
  return (
    <div className="my-8 mx-auto w-11/12 sm:w-10/12 flex-wrap flex justify-evenly gap-3 sm:gap-8 container">
      {slicedProduct.map((item, index) => {
        return (
          <div
            className="flex max-w-32 sm:max-w-36 h-auto flex-col rounded-2xl shadow-[1px_1px_2px_1px_rgba(0,0,0,0.3)]"
            key={index}
          >
            <img
              src={item.foto_produk}
              alt="headphone"
              className="max-w-32 sm:max-w-36 h-auto rounded-t-2xl"
            />
            <div className="flex flex-col p-2">
              <div>
                <div className="font-medium break-words truncate">
                  {item.nama_produk}
                </div>
                <div className="flex text-xs text-[#BFBFBF]">
                  <img src="/star-icon.svg" alt="rating" />
                  <span>4.5/5</span>
                </div>
              </div>
              <div className="w-full mt-5">
                <div className="font-medium text-2xl">
                  {item.harga}{' '}
                  <span className="line-through text-[#BFBFBF] text-sm">
                    $350
                  </span>
                </div>
                <button
                  className="bg-[#40BFFF] py-2 w-full rounded-lg font-medium text-xs text-white"
                  onClick={() =>
                    handleSendToCart(item.id_produk, item.nama_produk)
                  }
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
