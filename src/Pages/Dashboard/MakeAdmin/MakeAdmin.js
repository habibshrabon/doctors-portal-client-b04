import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handelOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handelAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    e.preventDefault();
  };
  return (
    <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handelAdminSubmit}>
        <TextField
          label="Email"
          type="email"
          onBlur={handelOnBlur}
          variant="standard"
        />
        <Button variant="contained" type="submit">
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
