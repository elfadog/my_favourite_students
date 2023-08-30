import React, { useState } from "react";
import DropMenu from "./DropMenu";

function ListGroup() {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <h1 className="mr-2">ManageMe</h1>
          <DropMenu />
        </div>
      </nav>
    </aside>
  );
}

export default ListGroup;
