import React, {useContext} from "react";
import PageCard from "../account/PageCard"
import AuthContext from "../AuthContext";

function Account() {

  const { userName } = useContext(AuthContext);

  return (
    <div>
      <h2>Hello {userName},</h2>
      <p>
        Welcome to Expense Management App! Please select one of the options below...
      </p>
      <PageCard />
    </div>
  );
}

export default Account;