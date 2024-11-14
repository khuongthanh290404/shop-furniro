import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="bg-[#FFF7ED] py-16 mt-16">
        <div className="container max-w-screen-xl m-auto grid grid-cols-4 pl-20">
          <div className="flex gap-5 items-center">
            <img src="../../img/cup.png" alt="" />
            <div>
              <h3 className="font-semibold text-xl mb-1">High Quality</h3>
              <p className="text-[#898989]">Crafted from top materials</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img src="../../img/wmn.png" alt="" />
            <div>
              <h3 className="font-semibold text-xl mb-1">24 / 7 Support</h3>
              <p className="text-[#898989]">Dedicated support</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img src="../../img/tick.png" alt="" />
            <div>
              <h3 className="font-semibold text-xl mb-1">
                Warranty Protection
              </h3>
              <p className="text-[#898989]">Over 2 years</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img src="../../img/ship.png" alt="" />
            <div>
              <h3 className="font-semibold text-xl mb-1">Free Shipping</h3>
              <p className="text-[#898989]">Order over 150 $</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#262626] text-white pt-16 pb-8">
        <div className="container max-w-screen-xl grid grid-cols-4 gap-8 m-auto mb-16">
          <div>
            <img src="../../img/logo2.svg" alt="" />
            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-4">Sitemap</h3>
            <ul>
              <li className="mb-4">
                <a href="">Home</a>
              </li>
              <li className="mb-4">
                <a href="">Shop</a>
              </li>
              <li className="mb-4">
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-4">Help</h3>
            <ul>
              <li className="mb-4">
                <a href="">Payment Options</a>
              </li>
              <li className="mb-4">
                <a href="">Returns</a>
              </li>
              <li>
                <a href="">Privacy Policies</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-4">Location</h3>
            <ul>
              <li className="mb-4">
                <a href="">support@euphoria.in</a>
              </li>
              <li className="mb-4">
                <a href="">Ahmedabad Main Road</a>
              </li>
              <li>
                <a href="">Udaipur, India- 313002</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center mt-8">
          Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
