var Button = require('components/core-components/button');
var React = require('react');

var StoreActionBar = React.createClass({

    render: function () {
        return (
            <div className="store-action-bar">
                <div>
                    Title
                </div>
                <Button buttonType="add" />
                <Button buttonType="view" />
                <Button buttonType="edit" />
                <Button buttonType="delete" />
            </div>
        );
    }
});

module.exports = StoreActionBar;