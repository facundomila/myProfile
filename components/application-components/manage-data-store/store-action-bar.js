var Button = require('components/core-components/button');
var React = require('react');

var StoreActionBar = React.createClass({

    render: function () {
        console.log(this.props.handleDeleteButton)
        return (
            <div className="store-action-bar">
                <Button buttonType="view" />
                <Button buttonType="edit" />
                <Button {...this.getDeleteButtonProps()} />
            </div>
        );
    },

    getDeleteButtonProps: function () {
        var deleteProps = {
            buttonType: 'delete',
            onClick: this.props.handleDeleteButton
        };

        return deleteProps;
    },

    handleDeleteButton: function () {
        this.setState({})
    }
});

module.exports = StoreActionBar;