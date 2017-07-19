var React = require('react');
var Modal = require('components/core-components/modal');

var ModalContainer = React.createClass({

    render: function () {
        return (
            <div className="modal-container">
                {this.renderModal()}
            </div>
        );
    },

    renderModal: function () {
        var modal = null;
        if (this.props.showModal) {
            modal = (
                <div>
                    <div className="modal-container-overlay">
                    </div>
                    <Modal>
                        hola modal
                    </Modal>
                </div>
            );
        }

        return modal;
    }
});

module.exports = ModalContainer;