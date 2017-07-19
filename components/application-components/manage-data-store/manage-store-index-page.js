var React = require('react');
var Header = require('components/core-components/header');
var NavigationBar = require('components/core-components/navigation-bar');
var AddProductForm = require('components/application-components/manage-data-store/add-product-form');
var ManageStoreProduct = require('components/application-components/manage-data-store/manage-store-product');
var storeProductApi = require('services/store-product/store-product-api');
var ModalContainer = require('components/core-components/modal-container');

var ManageStoreIndexPage = React.createClass({

    getInitialState: function() {
        return {
            products: '',
            showModal: false
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

        return (
            <div className="manage-store">
                <Header className="header">LOGO
                    <NavigationBar>sdf</NavigationBar>
                </Header>
                <AddProductForm>form</AddProductForm>
                <ManageStoreProduct handleDeleteButton={this.handleDeleteButton.bind(this)}>{ProductStore}</ManageStoreProduct>
                <ModalContainer showModal={this.state.showModal}/>
            </div>
        );
    },

    handleDeleteButton: function () {
        console.log('holis')
    }
});

module.exports = ManageStoreIndexPage;