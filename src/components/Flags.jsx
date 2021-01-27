import React from "react";

import { Link } from "@reach/router";

export default function Flags() {
  const countries = ["england", "france", "spain"];

  return (
    <div className="flags-container">
      {countries.map((country) => {
        console.log(country);
        return (
          <Link to={`/countries/${country}`}>
            <img
              className="flags"
              src={`images/${country}.png`}
              alt={country}
            />
          </Link>
        );
      })}
    </div>
  );
}
