import React, { useEffect } from "react";
import ItemCards from "../components/ItemCards";
import BackDrop from "../components/BackDrop";

import "./home.css";

import { connect } from "react-redux";
import { fetchAllData } from "../actions";

function HomePage({ fetchAllData, allData }) {
  useEffect(() => {
    console.log("HOME PAGE FETCH CALLED");
    fetchAllData();
  }, [fetchAllData]);
  

  const renderItems = () => {
    return allData.map((item) => {
      return <ItemCards key={item._id.$oid} item={item} />;
    });
  };
  return (
    <div>
      {" "}
      <h1 className="title">Products</h1>
      {allData.length > 0 ? (
        <div className="renderWrapper">{renderItems()}</div>
      ) : (
        <BackDrop />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    allData: state.getMainDataReducers,
  };
};

export default connect(mapStateToProps, { fetchAllData })(HomePage);
