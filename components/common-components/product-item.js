var React = require('react');

var ProductItem = React.createClass({

    render: function () {
        var products = this.props.children;
        console.log('aaaa', products);

        return (
            <div className="product-item">
                {this.renderName(products)}
                {this.renderDescription(products)}
                {this.renderPrice(products)}
            </div>
        );
    },

    renderName: function (products) {
        return <div>{products.name}</div>;
    },

    renderDescription: function (products) {
        return <div>{products.description}</div>;
    },

    renderPrice: function (products) {
        return <div>{products.price}</div>;
    }
});

module.exports = ProductItem;