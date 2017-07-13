var ProductList = require('components/common-components/product-list');
var React = require('react');
var StoreActionBar = require('components/application-components/manage-data-store/store-action-bar');

var ManageStoreProduct = React.createClass({

    render: function () {
        console.log(this.props);
        return (
            <div className="manage-store-product">
                <StoreActionBar>
                    {this.props.children}
                </StoreActionBar>
                <ProductList>
                    sdfsdf
                </ProductList>
            </div>
        );
    }
});

module.exports = ManageStoreProduct;