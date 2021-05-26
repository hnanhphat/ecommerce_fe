import React from "react";
import { Route, Switch } from "react-router";

// PAGES
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import CollectionsPage from "../pages/CollectionsPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import NewsPage from "../pages/NewsPage";
import ReaderPage from "../pages/ReaderPage";
import CartPage from "../pages/CartPage";
import VerifyPage from "../pages/VerifyPage";
import NotFoundPage from "../pages/NotFoundPage";

const PublicLayout = () => {
  return (
    <div id="wrap">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/collections" component={CollectionsPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/products/:id" component={ProductDetailPage} />
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/readers" component={ReaderPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/verify/:code" component={VerifyPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default PublicLayout;
