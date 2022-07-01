import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { ListItemAvatar } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./wishlistitems.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "80%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function YourOrders({ orders }) {
  const classes = useStyles();

  const handleListItemClick = (event, index) => {};
  const renderList = () => {
    return orders.map((item, index) => {
      const order = JSON.parse(item);
      const orderParsed = JSON.parse(order)[0];

      return (
        <div>
          <ListItem key={index} button onClick={handleListItemClick}>
            <div className="list_wrapper">
              <div>
                <img
                  src={orderParsed.image_url}
                  alt="img"
                  className="wishlist_image"
                />
              </div>
            </div>
          </ListItem>
        </div>
      );
    });
  };

  return (
    <div className={classes.root}>
      {orders.length > 0 && (
        <React.Fragment>
          <List component="nav" aria-label="main mailbox folders">
            {orders.length > 0 ? renderList() : ""}
          </List>
          <Divider />
          <List component="nav" aria-label="secondary mailbox folder">
            <ListItem
              button
              onClick={(event) => handleListItemClick(event, 2)}
              className="addtobag"
              style={{ margin: "20px" }}
            ></ListItem>
          </List>
        </React.Fragment>
      )}
    </div>
  );
}
