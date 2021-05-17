import React from "react";
import { Route, Switch } from "react-router";

// PAGES
import AdminPage from "../pages/AdminPage";
import ProductAddPage from "../pages/ProductAddPage";
import ProductEditPage from "../pages/ProductEditPage";

const AdminLayout = () => {
  return (
    <div id="wrap">
      <Switch>
        <Route exact path="/admin/profile" component={AdminPage} />
        <Route exact path="/admin/product-add" component={ProductAddPage} />
        <Route
          exact
          path="/admin/product-edit/:id"
          component={ProductEditPage}
        />
      </Switch>
    </div>
  );
};

export default AdminLayout;
