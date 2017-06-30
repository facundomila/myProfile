var DemoPage = require('components/application-components/demo/demo-page');
var IndexPage = require('components/application-components/index-page');
var React = require('react');
var StorePage = require('components/application-components/store/store-page');

var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;

var appRoutes = (
    <Router history={browserHistory}>
        <Route path="/" component={IndexPage} />
        <IndexRoute component={IndexPage} />
        <Route path="/index.html" component={IndexPage} />
        <Route path="/demo.html" component={DemoPage} />
        <Route path="/store.html" component={StorePage} />
    </Router>
);

module.exports = appRoutes;