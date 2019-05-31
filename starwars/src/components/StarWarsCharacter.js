import React from 'react';

//Didn't end up using yet

class StarWarsCharacter extends React.Component {
    render () {
        return (
            <div className="character-card">
                <img
                    src={this.props.charOnProps.img}
                    alt={this.props.charOnProps.name}
                />

            <div className="char-info">
                <h3>{this.props.charOnProps.name}</h3>
                <p>
                    <strong>Title:</strong> {this.props.charOnProps.title}
                </p>
                <p>
                    <strong>About:</strong> {this.props.charOnProps.about}
                </p>
            </div>
        </div>
        );
    }
}

export default StarWarsCharacter;