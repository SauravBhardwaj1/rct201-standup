import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMensData } from "../Redux/Mens/mens.actions";

const Mens = () => {
  const { isLoading, mens } = useSelector((state) => state.mens);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMensData());
  }, []);

  const handleOnChange = (e) => {
    setTimeout(() => {
      dispatch(getMensData(e.target.value));
    }, 2000);
  };

  return (
    <div>
      <h1>Mens page</h1>
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="Search for mens product"
      />

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {mens.map((ele, ind) => (
            <div key={ind}>
              <h4> {ele.title} </h4>
              <img src={ele.imgUrl} alt="" style={{ width: "200px" }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Mens;
