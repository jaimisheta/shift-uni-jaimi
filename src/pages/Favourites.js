import React, { useMemo, useState } from "react";
import Button from "../components/Button";
import DataList from "../components/DataList";
import TextField from "../components/TexField";
import { useSelector, useDispatch } from "react-redux";
import { removeFromfavouritemList } from "../store/dataListSlice";
function Favourites() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.favouritemList);

  const filteredData = useMemo(
    () =>
      data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ),
    [data, search]
  );

  return (
    <main className="p-4">
      <div className="mb-2 items-center flex bg-gray-700 p-2 rounded-lg">
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={"University search ..."}
        />
        <Button onClick={() => setSearch("")}>Clear</Button>
      </div>

      <DataList>
        {filteredData.map((item, index) => (
          <tr key={index} className="table-row">
            <td className="table-data ">{item.name || "N/A"}</td>
            <td className="table-data ">{item["state-province"] || "N/A"}</td>
            <td className="table-data ">{`${item.web_pages[0] || "N/A"}`}</td>
            <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
              <button
                onClick={() => dispatch(removeFromfavouritemList(item))}
                className="text-red-400 bg-transparent "
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </DataList>
    </main>
  );
}

export default Favourites;
