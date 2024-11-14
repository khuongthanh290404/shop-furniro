import React from "react";
import { useProduct } from "../../hook/useProduct";
import { Link } from "react-router-dom";

const Home = () => {
  const { products } = useProduct();
  return (
    <div>
      <section>
        <img src="../../../img/banner.jpg" alt="" className="w-full" />
      </section>

      <section className="container max-w-screen-xl m-auto mt-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-[40px]">New Products</h2>
          <a
            href="shop.html"
            className="border border-solid border-yellow-500 px-4 py-2 font-semibold text-base text-yellow-500"
          >
            View all products
          </a>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {products.slice(0, 4).map((p) => (
            <div>
              <div className="overflow-hidden">
                <img src={p.image} alt="" />
              </div>
              <div className="bg-[#F5F5F5] p-4">
                <Link to={`/detail/${p._id}`}>
                  <h3 className="font-semibold text-xl">{p.name}</h3>
                </Link>
                <p className="text-[#898989] text-base mt-1 mb-2">
                  Stylish cafe chair
                </p>
                <p className="font-semibold text-xl text-red-600 mb-3">
                  {p.price}
                </p>
                <button className="border border-solid border-yellow-600 text-yellow-600 w-full font-semibold text-base py-2 hover:bg-yellow-600 hover:text-white">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container max-w-screen-xl m-auto mt-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-[40px]">Gallery</h2>
          <a
            href=""
            className="border border-solid border-yellow-500 px-4 py-2 font-semibold text-base text-yellow-500"
          >
            View all gallery
          </a>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <img src="../../../img/ga1.jpg" alt="" />
          <img src="../../../img/ga2.jpg" alt="" />
          <img src="../../../img/ga3.jpg" alt="" />
          <img src="../../../img/ga4.jpg" alt="" />
          <img src="../../../img/ga5.jpg" alt="" />
          <img src="../../../img/ga6.jpg" alt="" />
        </div>
      </section>
      <section className="container max-w-screen-xl m-auto mt-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-[40px]">News</h2>
          <a
            href=""
            className="border border-solid border-yellow-500 px-4 py-2 font-semibold text-base text-yellow-500"
          >
            View all news
          </a>
        </div>
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div>
              <img src="../../../img/new1.jpg" alt="" />
            </div>
            <div>
              <p className="text-[#9CA3AF] font-semibold text-sm flex items-center mt-4 mb-1">
                <span className="material-symbols-outlined mr-2">
                  calendar_month
                </span>
                24/4/2024
              </p>
              <h3 className="font-semibold text-xl mb-3">
                A bedroom must have something like this
              </h3>
              <a
                href=""
                className="text-red-600 font-semibold text-base flex items-center"
              >
                Xem chi tiết{" "}
                <span className="material-symbols-outlined ml-2">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div>
            <div>
              <img src="../../../img/new2.jpg" alt="" />
            </div>
            <div>
              <p className="text-[#9CA3AF] font-semibold text-sm flex items-center mt-4 mb-1">
                <span className="material-symbols-outlined mr-2">
                  calendar_month
                </span>
                24/4/2024
              </p>
              <h3 className="font-semibold text-xl mb-3">
                A bedroom must have something like this
              </h3>
              <a
                href=""
                className="text-red-600 font-semibold text-base flex items-center"
              >
                Xem chi tiết{" "}
                <span className="material-symbols-outlined ml-2">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div>
            <div>
              <img src="../../../img/new3.jpg" alt="" />
            </div>
            <div>
              <p className="text-[#9CA3AF] font-semibold text-sm flex items-center mt-4 mb-1">
                <span className="material-symbols-outlined mr-2">
                  calendar_month
                </span>
                24/4/2024
              </p>
              <h3 className="font-semibold text-xl mb-3">
                A bedroom must have something like this
              </h3>
              <a
                href=""
                className="text-red-600 font-semibold text-base flex items-center"
              >
                Xem chi tiết{" "}
                <span className="material-symbols-outlined ml-2">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div>
            <div>
              <img src="../../../img/new4.jpg" alt="" />
            </div>
            <div>
              <p className="text-[#9CA3AF] font-semibold text-sm flex items-center mt-4 mb-1">
                <span className="material-symbols-outlined mr-2">
                  calendar_month
                </span>
                24/4/2024
              </p>
              <h3 className="font-semibold text-xl mb-3">
                A bedroom must have something like this
              </h3>
              <a
                href=""
                className="text-red-600 font-semibold text-base flex items-center"
              >
                Xem chi tiết{" "}
                <span className="material-symbols-outlined ml-2">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
