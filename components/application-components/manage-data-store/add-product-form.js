var React = require('react');
var storeProductApi = require('services/store-product/store-product-api');

var AddProductForm = React.createClass ({

    render: function () {
        return (
            <div className="add-product-form">
                {this.props.children}
                <button onClick={this.pushData}>submit</button>
            </div>
        );
    },

    pushData: function () {
        var form_data = {
            name: 'facundo',
            description: 'mila',
            price: '50',
            category_id: 0
        };

        storeProductApi({
            method: "POST",
            url: "http://localhost/my-profile/api/product/create.php"
        }, JSON.stringify(form_data))
    }

});

module.exports = AddProductForm;