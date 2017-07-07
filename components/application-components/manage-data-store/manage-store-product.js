var React = require('react');

var ManageStoreProduct = React.createClass({

    render: function () {
        return (
            <div className="manage-store-product">
                {this.props.children}
            </div>
        );
    }
});

module.exports = ManageStoreProduct;