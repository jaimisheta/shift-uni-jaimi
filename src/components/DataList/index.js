import React from "react";
import "./DataList.css";
function DataList(props) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <div className="relative overflow-x-auto ">
          <table className="table ">
            <thead className="table-head sticky  ">
              <tr>
                <th scope="col" className="table-header ">
                  Name
                </th>
                <th scope="col" className="table-header ">
                  State/Province
                </th>
                <th scope="col" className="table-header ">
                  Website
                </th>
                <th scope="col" className="table-header !text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="table-body overflow-y-scroll !height-[50vh]">
              {props.children}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataList;
