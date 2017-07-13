var _ = require('lodash');
var ProductItem = require('components/common-components/product-item');
var React = require('react');

var ProductList = React.createClass({

    render: function () {
        return (
            <div className="product-list">
                {this.props.children}
            </div>
        );
    }

    /*renderItems: function () {
        var products = this.props.children;

        return _.map(products, <ProductItem>{products}</ProductItem>);
    }*/
});

module.exports = ProductList;