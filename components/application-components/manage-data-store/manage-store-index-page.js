var React = require('react');
var Header = require('components/core-components/header');
var NavigationBar = require('components/core-components/navigation-bar');
var AddProductForm = require('components/application-components/manage-data-store/add-product-form');
var ManageStoreProduct = require('components/application-components/manage-data-store/manage-store-product');
var storeProductApi = require('services/store-product/store-product-api');

var ManageStoreIndexPage = React.createClass({

    getInitialState: function() {
        return {
            products: ''
        };
    },

    componentWillMount: function () {
        var productsObj = storeProductApi({
            method: 'GET',
            url: 'http://localhost/my-profile/api/product/read.php'
        });

        return this.setState({products: JSON.parse(productsObj)})
    },

    render: function () {
        var ProductStore = this.state.products.records;
        var test = 'hola form';
        return (
            <div className="manage-store">
                <Header className="header">LOGO
                    <NavigationBar>sdf</NavigationBar>
                </Header>
                <AddProductForm>{test}</AddProductForm>
                <ManageStoreProduct>{ProductStore}</ManageStoreProduct>
            </div>
        );
    }
});

module.exports = ManageStoreIndexPage;