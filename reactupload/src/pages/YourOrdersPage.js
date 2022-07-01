import React, { useEffect, useState } from "react";
import YourOrders from "../components/YourOrders";
import uploadEndpoint from "../api/uploadEndpoint";
import { connect } from "react-redux";


function YourOrdersPage({ user }) {
  const [order, setOrder] = useState();
  useEffect(() => {
    const call = async () => {
      const data = await uploadEndpoint.post(
        "/yourorder",
        {
          userID: JSON.parse(user.login_data).id.$oid,
        },
        {
          headers: {
            "Content-Type": "application/vnd.api+json",
            Accept: "application/vnd.api+json",
          },
        }
      );
      console.log(data);
      setOrder(JSON.parse(data.data.orders).orders);
      console.log(JSON.parse(data.data.orders).orders);
    };
    call();
  }, [user.login_data]);
  return (
    <div>
      {order && order.length > 0 ? (
        <YourOrders orders={order} />
      ) : (
        <div>
          <h1>No Orders</h1>
          <p>Place Order and Experience Magic</p>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.getLoginReducers,
  };
};

export default connect(mapStateToProps, {})(YourOrdersPage);
