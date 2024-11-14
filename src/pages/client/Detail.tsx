import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../interface/Product";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/products/${id}`
      );
      setProduct(data);
    };
    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <div>
      <main className="container max-w-screen-xl m-auto">
        <section className="mt-16">
          {/* Product Image and Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Main Product Image */}
            <div className="col-span-1 flex justify-center">
              <img
                src={product?.image || "img/pro5.png"}
                alt="Main Product"
                className="w-full h-auto max-w-md"
              />
            </div>

            {/* Product Details */}
            <div className="col-span-1">
              <h1 className="font-medium text-xl">{product?.name}</h1>
              <p className="font-bold text-2xl text-[#EF4444] my-4">
                {product?.price}₫
              </p>

              {/* Product Rating */}
              <div className="flex items-center mb-4">
                <div className="text-[#FFC700] border-r border-solid border-neutral-400 pr-4 mr-4">
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                </div>
                <span className="font-medium text-sm text-[#9F9F9F]">
                  5 Customer Reviews
                </span>
              </div>

              {/* Product Description */}
              <p className="font-medium my-4 text-[#A3A3A3]">
                {product?.description}
              </p>

              {/* Size Options */}
              <div className="mt-4 mb-8">
                <p className="text-[#A3A3A3] mb-2">Size</p>
                <div className="flex gap-4">
                  <div className="bg-[#CA8A04] text-white w-[30px] h-[30px] flex items-center justify-center rounded-md cursor-pointer">
                    L
                  </div>
                  <div className="bg-[#A3A3A3] text-white w-[30px] h-[30px] flex items-center justify-center rounded-md cursor-pointer">
                    XL
                  </div>
                  <div className="bg-[#A3A3A3] text-white w-[30px] h-[30px] flex items-center justify-center rounded-md cursor-pointer">
                    XS
                  </div>
                </div>
              </div>

              {/* Color Options */}
              <div className="mt-4 mb-8">
                <p className="text-[#A3A3A3] mb-2">Color</p>
                <div className="flex gap-4">
                  <div className="bg-[#816DFA] w-[30px] h-[30px] rounded-full cursor-pointer"></div>
                  <div className="bg-[#000000] w-[30px] h-[30px] rounded-full cursor-pointer"></div>
                  <div className="bg-[#B88E2F] w-[30px] h-[30px] rounded-full cursor-pointer"></div>
                </div>
              </div>

              {/* Quantity and Buttons */}
              <div>
                <form action="">
                  <div className="border border-solid border-neutral-300 w-fit rounded inline-block mb-4">
                    <button className="py-2 px-4">-</button>
                    <input
                      type="text"
                      value="1"
                      className="w-[30px] text-center bg-transparent outline-none"
                    />
                    <button className="py-2 px-4">+</button>
                  </div>
                  <button
                    type="submit"
                    className="border border-solid border-yellow-600 text-yellow-600 rounded py-2 px-10 ml-3 hover:bg-yellow-600 hover:text-white"
                  >
                    Add To Cart
                  </button>
                  <button
                    type="submit"
                    className="border border-solid border-neutral-600 text-neutral-600 rounded py-2 px-10 ml-3 hover:bg-neutral-600 hover:text-white"
                  >
                    + Compare
                  </button>
                </form>
              </div>

              {/* SKU, Category, and Tags */}
              <hr className="text-neutral-400 mt-8 mb-4" />
            </div>
          </div>

          {/* Product Description and Additional Information */}
          <div>
            <div className="font-semibold text-xl mr-16 border-b pb-4 mb-8">
              <a href="" className="text-black">
                Description
              </a>
              <a href="" className="text-[#A3A3A3] ml-4">
                Additional Information
              </a>
              <a href="" className="text-[#A3A3A3] ml-4">
                Reviews [5]
              </a>
            </div>
            <div className="text-[#A3A3A3] font-medium">
              <p className="mb-2">
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
              <p className="mb-8">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage-styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio that boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
          </div>
        </section>

        {/* Related Products Section (optional) */}
      </main>
    </div>
  );
};

export default Detail;
