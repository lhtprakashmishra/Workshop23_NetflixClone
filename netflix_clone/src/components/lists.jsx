import { useEffect, useState } from "react";
import { fetchData } from "../api/api";

const List = ({ title, param }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("Fetching data with param:", param);
    fetchData(param)
      .then((res) => {
        if (res.data && res.data.results) {
          setList(res.data.results);
        } else {
          console.error("Unexpected API response structure:", res);
          setList([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [param]);

  return (
    <div className="list">
      <div className="flex flex-col m-0">
        <h2 className="text-white mx-8 my-6 mb-0 text-2xl">{title}</h2>
        <div className="overflow-hidden py-5">
          <div className="flex overflow-x-auto hide-scrollbar">
            {list && list.length > 0 ? (
              list.map((item) => (
                <img
                  key={item.id}
                  className="row__poster row__posterLarge mr-2 max-h-[250px] object-contain opacity-80 transition-transform duration-450 hover:scale-105 hover:opacity-100"
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                />
              ))
            ) : (
              <p className="text-white">No results found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
