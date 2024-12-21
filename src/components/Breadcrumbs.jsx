import React from "react";

const Breadcrumbs = ({ title, Children = () => {} }) => {
  return (
    <section className="breadcrumbs center">
      <h2 className="breadcrumbs__title">{title}</h2>
      <Children />
    </section>
  );
};

export default Breadcrumbs;
