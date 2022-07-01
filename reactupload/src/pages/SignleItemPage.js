import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleItemData } from "../actions";
import ItemCards from "../components/ItemCards";
import "./singleitem.css";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { addToBag } from "../actions";
import { addToWishlist } from "../actions";
import CommentsList from "../components/comments/CommentsList";
import CommentInput from "../components/comments/CommentInput";
import { enterComment } from "../actions";
import { getAllComment } from "../actions";

function SignleItemPage({
  allData,
  fetchSingleItemData,
  addToBag,
  addToWishlist,
  enterComment,
  user,
  getAllComment,
  comments,
}) {
  const { oid } = useParams();
  console.log(allData);
  useEffect(() => {
    fetchSingleItemData(oid);
  }, [fetchSingleItemData, oid]);

  const handleClickFav = (event, item) => {
    event.stopPropagation();
    addToWishlist(item);
  };

  const handleClickAddToBag = (event, item) => {
    event.stopPropagation();
    addToBag(item);
  };
  const userData =
    user && user.login === true ? JSON.parse(user.login_data) : "";
  console.log(userData.id);
  const handleComment = (data) => {
    const dataObj = {
      comment: data,
      userID: userData.id.$oid,
      oid: oid,
    };
    enterComment(dataObj);
  };
  useEffect(() => {
    getAllComment(oid);
  }, [getAllComment, oid]);
  const renderItems = () => {
    return (
      <div className="upper_wrapper">
        <div className="item_cards_wrapper_signle">
          <ItemCards
            key={allData._id.$oid}
            item={allData}
            className="card_component_single"
          />
          <div className="button_group_wrapper">
            <button
              className="addtobag"
              onClick={(e) => {
                handleClickAddToBag(e, allData);
              }}
            >
              ADD TO BAG <ShoppingCartIcon />
            </button>
            <button
              className="addtowishlist"
              onClick={(e) => {
                handleClickFav(e, allData);
              }}
            >
              <LoyaltyIcon />
            </button>
          </div>
        </div>
        <CommentInput handleSend={handleComment} />
        {comments.length > 0 ? <CommentsList comments={comments} /> : ""}
      </div>
    );
  };

  return <div>{allData.length !== 0 ? renderItems() : ""}</div>;
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    allData: state.getSingleItemReducers,
    user: state.getLoginReducers,
    comments: state.getCommentsReducers,
  };
};

export default connect(mapStateToProps, {
  fetchSingleItemData,
  addToBag,
  addToWishlist,
  enterComment,
  getAllComment,
})(SignleItemPage);
