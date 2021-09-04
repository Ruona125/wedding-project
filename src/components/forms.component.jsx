import React from "react";

import "../styles/form.styles.css";

export const Forms = () => {
  return (
    <div className="forms">
      <h1>RSVP</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="Email" placeholder="Email" />
        <input type="Number" placeholder="Number of guests" />
      </form>
    </div>
  );
};
