import Button from "./components/Button";
import DataList from "./components/DataList";
import Loader from "./components/Loader";
import Select from "./components/Select";
import TextField from "./components/TexField";

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "./api/axiosBaseService";
import {
  addTofavouritemList,
  removeFromfavouritemList,
  updateDataList,
} from "./store/dataListSlice";

function App() {
  const [search, setSearch] = useState("");
  const [countryList, setCountryList] = useState([]);

  const [country, setCountry] = useState("Canada");
  const [leader, setLoader] = useState(false);
  const data = useSelector((state) => state.data.dataList);
  const apiDetails = useSelector((state) => state.data.apiDetails);
  const favouritemList = useSelector((state) => state.data.favouritemList);

  const getCountries = useCallback(async () => {
    try {
      const res = await axios.get(`https://restcountries.com/v2/all`);
      setCountryList(res.data.map((country) => country.name));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getCountries();
  }, []);

  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    const startTime = Date.now();
    try {
      const res = await api.get(`/search?country=${country}`);
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      dispatch(
        updateDataList({
          data: res.data,
          apiDetails: {
            statusCode: res.status,
            responseTime: responseTime.toFixed(0),
          },
        })
      );
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  }, [country]);

  useEffect(() => {
    setLoader(true);
    countryList.length > 0 && getData();
  }, [countryList, country]);

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
        <div className="flex">
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={"search"}
          />
          <Select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            countryList={countryList || []}
          />
          <Button
            onClick={() => {
              setSearch("");
              setCountry("Canada");
            }}
          >
            Clear
          </Button>
        </div>
      </div>
      {leader || filteredData.lenght <= 0 ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="mb-2  text-white bg-gray-700 overflow-x-auto shadow-md rounded-lg">
            <table className="table ">
              <thead className="table-head">
                <tr>
                  <th scope="col" className="table-header ">
                    Status Code
                  </th>
                  <th scope="col" className="table-header ">
                    Response Time
                  </th>
                </tr>
              </thead>
              <tbody className="table-body overflow-y-scroll !height-[50vh]">
                <tr className="table-row hover:!bg-gray-800">
                  <td className="table-data ">{apiDetails.statusCode}</td>
                  <td className="table-data ">{`${apiDetails.responseTime} ms`}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <DataList>
            {filteredData.map((item, index) => {
              const addedToFav = favouritemList.some(
                (favItem) => favItem.name === item.name
              );
              return (
                <tr key={index} className="table-row">
                  <td className="table-data ">{item.name}</td>
                  <td className="table-data ">{`${item.country}/${item["state-province"]}`}</td>
                  <td className="table-data ">
                    <a target={"_blank"} href={`${item.web_pages[0] || ""}`}>
                      {" "}
                      {`${item.web_pages[0] || ""}`}
                    </a>
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    {!addedToFav ? (
                      <button
                        onClick={() => dispatch(addTofavouritemList(item))}
                        className="text-blue-400 bg-transparent disabled:text-gray-500"
                        disabled={addedToFav}
                      >
                        Add to favourite
                      </button>
                    ) : (
                      <button
                        onClick={() => dispatch(removeFromfavouritemList(item))}
                        className="text-red-400 bg-transparent "
                      >
                        Remove
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </DataList>
        </>
      )}
    </main>
  );
}

export default App;
