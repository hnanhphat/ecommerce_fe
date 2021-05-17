import logo from "../logo.svg";
import noimg from "../noimg.jpeg";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userActions } from "../redux/actions/user.actions";
import { authActions } from "../redux/actions/auth.actions";
import { decksActions } from "../redux/actions/decks.actions";

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);
  const [search, setSearch] = useState("");
  const currentUser = useSelector((state) => state.user.currentUser.data);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(authActions.logout());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      history.push(`/`);
      dispatch(
        decksActions.getListOfDecks(1, `&limit=10&name=${search}`, "search")
      );
    } else {
      dispatch(decksActions.removeSearch());
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > window.innerHeight / 4) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    };
  }, [status]);

  useEffect(() => {
    if (isAuth) {
      dispatch(userActions.getCurrentUser());
    }
  }, [dispatch, isAuth]);

  return (
    <header
      id="header"
      className={`header ${
        status || location.pathname.length > 1 ? "header--scroll" : ""
      }`}
    >
      <div className="header__container">
        {currentUser && currentUser.data.isAdmin ? (
          <div className="directory">
            <div className="directory__item">
              <Link to="/admin/product-add" className="upper">
                Create Product
              </Link>
            </div>
            <div className="directory__item">
              <Link to="/news-add" className="upper">
                Create News
              </Link>
            </div>
          </div>
        ) : (
          <div className="directory">
            <div className="directory__item">
              <Link to="/products" className="upper">
                Products
              </Link>
            </div>
            <div className="directory__item">
              <Link to="/faq" className="upper">
                FAQ
              </Link>
            </div>
            <div className="directory__item">
              <Link to="/about" className="upper">
                About Us
              </Link>
            </div>
            <div className="directory__item">
              <Link to="/contact" className="upper">
                Contact
              </Link>
            </div>
          </div>
        )}
        {isAuth ? (
          <div className="user">
            <p className="user__name">
              {currentUser && currentUser.data.username}
            </p>
            <div
              className="user__avatar"
              style={{
                backgroundImage: `url('${
                  currentUser && currentUser.data.avatar
                    ? currentUser.data.avatar
                    : noimg
                }')`,
              }}
            ></div>
            <div className="user__dropdown">
              <Link to="/profile">
                <span>Profile</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="user"
                  className="svg-inline--fa fa-user fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                  ></path>
                </svg>
              </Link>
              {currentUser && currentUser.data.isAdmin ? (
                <>
                  <Link to="/users">
                    <span>List Users</span>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="users"
                      className="svg-inline--fa fa-users fa-w-20"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
                      ></path>
                    </svg>
                  </Link>
                </>
              ) : (
                ""
              )}
              <Link to="/" onClick={handleLogout}>
                <span>Logout</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="sign-out-alt"
                  className="svg-inline--fa fa-sign-out-alt fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        ) : (
          <div className="user">
            <Link to="/login" className="user__login">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="sign-in-alt"
                className="svg-inline--fa fa-sign-in-alt fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"
                ></path>
              </svg>
            </Link>
          </div>
        )}
        <Link to="/" className="logo">
          <img src={logo} alt="Rune House" />
        </Link>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="searchInput"
              placeholder="Find Your Card "
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="svg-inline--fa fa-search fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </form>
        </div>
        <div className="other">
          <div className="other__item">
            <div className="icon">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bell"
                className="svg-inline--fa fa-bell fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                ></path>
              </svg>
              <span className="number">0</span>
            </div>
          </div>
          <div className="other__item">
            <div className="icon">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="shopping-cart"
                className="svg-inline--fa fa-shopping-cart fa-w-18"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                ></path>
              </svg>
              <span className="number">0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
