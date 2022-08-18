import { Input } from "@material-ui/core";
import { React, useState } from "react";
import ButtonStyled from "../reusableComponents/Buttons/ButtonStyled";
import { Moralis } from "moralis";
Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";
function Admin() {
  const [Admin, setAdmin] = useState("");
  return (
    <div className="d-flex justify-content-center">
      <Input
        value={Admin}
        onChange={(e) => {
          setAdmin(e.target.value);
        }}
      />
      <ButtonStyled
        onClick={async () => {
          const AddAdmin = Moralis.Object.extend("AddingAddressesAdmin");
          const ADMIN = new AddAdmin();
          ADMIN.set("address", Admin);
          await ADMIN.save();
        }}
      >
        Add
      </ButtonStyled>
    </div>
  );
}

export default Admin;
