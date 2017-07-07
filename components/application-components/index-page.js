var _ = require('lodash');
var React = require('react');
var storeProductApi = require('services/store-product/store-product-api');

var IndexPage = React.createClass({

    getInitialState: function() {
        return {
            products: ''
        };
    },

    componentWillMount: function() {
        var productsObj = storeProductApi({
            method: 'GET',
            url: 'http://localhost/my-profile/api/product/read.php'
        });
        this.setState({products: JSON.parse(productsObj)})
    },

    render: function () {
        console.log(this.state.products.records)
        return (
            <div className="index-page">
                Hello World!
            </div>
        );
    }
});

module.exports = IndexPage;