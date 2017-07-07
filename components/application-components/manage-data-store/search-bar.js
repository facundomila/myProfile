var React = require('react');

var SearchBar = React.createClass({

    render: function () {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});

module.exports = SearchBar;