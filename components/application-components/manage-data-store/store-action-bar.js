var Button = require('components/core-components/button');
var React = require('react');
var Modal = require('react-modal');

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
                <Button {...this.getDeleteButtonProps()} />
            </div>
        );
    },

    getDeleteButtonProps: function () {
        var deleteProps = {
            buttonType: 'delete'
        };

        return deleteProps;
    },

    handleDeleteButton: function () {
        if (this.state.modalIsOpen === false) {
            this.setState({modalIsOpen: true})
        }
    }
});

module.exports = StoreActionBar;