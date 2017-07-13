var ProductList = require('components/common-components/product-list');
var React = require('react');
var StoreActionBar = require('components/application-components/manage-data-store/store-action-bar');

var test2 = {
        id: '10',
        name: 'rolex',
        description: 'luxury red',
        price: '456',
        categrory_id: '1'
    };

var test3 = [
    {
        id: '10',
        name: 'rolex',
        description: 'luxury red',
        price: '456',
        categrory_id: '1'
    },
    {
        id: '20',
        name: 'watch',
        description: 'sdfsdfsdf',
        price: '888',
        categrory_id: '2'
    }
];

var ManageStoreProduct = React.createClass({

    render: function () {
        var ProductStore = this.props.children;
        console.log('rrrrrr', ProductStore);

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