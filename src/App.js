import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardHome from "./Page/DashboardHome";

import "bootstrap/dist/css/bootstrap.min.css";
// Pages
import Home from "./Page/Home";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Profile from "./Page/Profile";
import Landing from "./Page/Landing";
import DashboardLanding from "./Page/DashboardLanding";
import DashboardCompanyLanding from "./Page/DashboardCompany";

import ManageJobs from "./Page/ManageJobs";
import ManageCompetition from "./Page/ManageCompetition";
import CreateCompany from "./Page/CreateCompany";
import CreateCompetition from "./Page/CreateCompetition";
import CreateJob from "./Page/CreateJob";
import ViewCompetition from "./Page/ViewCompetition";
import CompanyProfileEditer from "./Page/CompanyProfile";

export default function App() {
  let token = localStorage.getItem("token");

  if (token === null) {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    );
  } else {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/dashboard" component={DashboardHome} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/manageJob" component={ManageJobs} />
            <Route exact path="/editCompanyProfile" component={CompanyProfileEditer} />
            <Route
              exact
              path="/manageCompetition"
              component={ManageCompetition}
            />
            <Route
              exact
              path="/createCompetition"
              component={CreateCompetition}
            />
            <Route exact path="/createCompany" component={CreateCompany} />
            <Route exact path="/createJob" component={CreateJob} />
            <Route exact path="/" component={DashboardLanding} />
            <Route exact path="/competition/view" component={ViewCompetition} />
            <Route exact path="/dash" component={DashboardLanding} />
            <Route
              exact
              path="/companyDash"
              component={DashboardCompanyLanding}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
