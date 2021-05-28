import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardActions } from "../redux/actions/card.actions";

const UsersPage = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card.cards.data);

  console.log(cards);

  useEffect(() => {
    dispatch(cardActions.getListOfCards(""));
  }, [dispatch]);

  return (
    <div id="users-list" className="users-list">
      <h1>This is Users List Page</h1>
    </div>
  );
};

export default UsersPage;
