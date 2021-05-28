import React from "react";
import { Route, Switch } from "react-router";

// COMPONENTS
import AdminSidebar from "../components/AdminSidebar";

// PAGES
import AdminPage from "../pages/AdminPage";
import UsersPage from "../pages/UsersPage";
import CardPage from "../pages/CardPage";
import ProductAddPage from "../pages/ProductAddPage";
import NewsAddPage from "../pages/NewsAddPage";
import ProductEditPage from "../pages/ProductEditPage";
import OrdersListPage from "../pages/OrdersListPage";
import AppointmentsPage from "../pages/AppointmentsPage";
import InterviewsPage from "../pages/InterviewsPage";

const AdminLayout = () => {
  return (
    <div id="admin">
      <AdminSidebar />
      <div id="admin-content" className="bg-grey">
        <Switch>
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/admin/users" component={UsersPage} />
          <Route exact path="/admin/cards" component={CardPage} />
          <Route exact path="/admin/product/add" component={ProductAddPage} />
          <Route exact path="/admin/news/add" component={NewsAddPage} />
          <Route exact path="/admin/orders" component={OrdersListPage} />
          <Route
            exact
            path="/admin/appointments"
            component={AppointmentsPage}
          />
          <Route exact path="/admin/interviews" component={InterviewsPage} />
          <Route
            exact
            path="/admin/product-edit/:id"
            component={ProductEditPage}
          />
        </Switch>
      </div>
    </div>
  );
};

export default AdminLayout;
