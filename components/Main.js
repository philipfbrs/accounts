import { Table } from "./Table/Table";
import { Sidebar } from "./Nav/Sidebar";
import { useState } from "react";
import { AccHeader } from "./HeaderMain/AccHeader";



export const Main = (props) => {
  const { show, showModal,account,setSearchById,accountsSearch,searchById } = props;
 

  const account_thead = [
    { table_name: "Id" },
    { table_name: "Role" },
    { table_name: "Username" },
    { table_name: "Password" },
    { table_name: "Name" },
    { table_name: "Actions" },
  ];
 
  return (
    <div className=" flex-row">
      <Sidebar />
      <div className="ml-0 md:ml-60 w-auto bg-gray-100 h-screen">
        <Table
          accountsSearch={accountsSearch}
          Header={AccHeader}
          thead={account_thead}
          td_data={account}
          showModal={showModal}
          searchById={searchById}
          setSearchById={setSearchById}
        />
      </div>
    </div>
  );
};
