import { useEffect, useState } from "react";
import { details } from "../details/details";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../features/data/dataSlice";
import { Card } from "../components";
function Contents() {
  const dispatch = useDispatch();

  // Load data on first render
  useEffect(() => {
    dispatch(addData(details));
  }, [dispatch]);

  const datas = useSelector((state) => state.datas);
  const filter = useSelector((state) => state.filter);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const result = datas.filter((data) => {
      // if (filter === "Active") return data.isActive;
      // if (filter === "Inactive") return !data.isActive;
      return true; // 'All'
    });
    setFilteredData(result); // this is the correct way

    // setFilteredData(datas); // this is the correct way
  }, [datas, filter]); // Also include 'filter' in the dependency array

  return (
    <div>
      {" "}
      <div className="grid mx-auto w-fit items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 transition-all duration-[5s]">
        {filteredData.map(
          (data, i) =>
            !data.isRemove && (
              <div
                className={`${
                  filter === "Active"
                    ? data.isActive
                      ? "block"
                      : "hidden"
                    : filter === "Inactive"
                    ? !data.isActive
                      ? "block"
                      : "hidden"
                    : "block"
                } transition-all duration-500`}
                key={i}
              >
                <Card key={i} data={data} />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Contents;
