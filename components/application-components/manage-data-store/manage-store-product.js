var ProductList = require('components/common-components/product-list');
var React = require('react');
var StoreActionBar = require('components/application-components/manage-data-store/store-action-bar');

var ManageStoreProduct = React.createClass({

    render: function () {
        var ProductStore = this.props.children;

        return (
            <div className="manage-store-product">
                <StoreActionBar>
                    {ProductStore}
                </StoreActionBar>
                <ProductList key="index">
                    {ProductStore}
                </ProductList>
            </div>
        );
    }
});

module.exports = ManageStoreProduct;