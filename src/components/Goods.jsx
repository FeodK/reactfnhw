import React from "react";
import PropductList from "./PropductList";

import { Link } from "react-router-dom";

import img1 from "../img/Rectangle15copy.jpg";
import img2 from "../img/Image.png";
import img3 from "../img/3.svg";
import img4 from "../img/4.svg";
import img5 from "../img/5.svg";
import img6 from "../img/6.svg";

const Goods = () => {
  const products = [
    {
      id: 1,
      image: img1,
      title: "ELLERY X M'O CAPSULE",
      description:
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "52.00",
    },
    {
      id: 2,
      image: img2,
      title: "ELLERY X M'O CAPSULE",
      description:
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "52.00",
    },
    {
      id: 3,
      image: img3,
      title: "ELLERY X M'O CAPSULE",
      description:
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "52.00",
    },
    {
      id: 4,
      image: img4,
      title: "ELLERY X M'O CAPSULE",
      description:
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "52.00",
    },
    {
      id: 5,
      image: img5,
      title: "ELLERY X M'O CAPSULE",
      description:
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "52.00",
    },
    {
      id: 6,
      image: img6,
      title: "ELLERY X M'O CAPSULE",
      description:
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "52.00",
    },
  ];

  return (
    <section className="goods center">
      <h2 className="goods__title">Fetured Items</h2>
      <p className="goods__subtitle">
        Shop for items based on what we featured in this week
      </p>
      <PropductList products={products} />
      <Link to="/catalogue" class="goods__button">
        Browse All Product
      </Link>
    </section>
  );
};

export default Goods;
