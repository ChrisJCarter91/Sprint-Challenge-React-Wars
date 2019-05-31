import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';


class Characters extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            title: '',
            image: '',
            about: '',
        }; 
       
    }

    handleChanges = event => {
        console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    addChar = event => {
        event.preventDefault();
        console.log(event);
        const newChar ={
            name: this.state.name,
            title: this.state.title,
            img: this.state.image,
            about: this.state.about,
        };
        this.setState({
            charData: [...this.state.charData, newChar],
            name: '',
            title: '',
            image: '',
            about: '',
        });
    };

    render() {
        return (
            <div>
                <h1> Empire Member:</h1>

                <div className="class-list">
                    {this.state.charData.map(charFromMap => (
                        <StarWarsCharacter charOnProps={charFromMap} />
                    ))}
                </div>

                <form onSubmit={this.addChar}>
                    <input
                        placeholder='Name'
                        onChange={this.handleChanges}
                        value={this.state.name}
                        name="name"
                    />

                    <input
                        placeholder='Title'
                        onChange={this.handleChanges}
                        value={this.state.title}
                        name="title"
                    />

                    <input
                        placeholder='Image'
                        onChange={this.handleChanges}
                        value={this.state.image}
                        name="image"
                    />

                    <input
                        placeholder='About'
                        onChange={this.handleChanges}
                        value={this.state.title.about}
                        name="about"
                    /> 
                    <button>Enlist Empire Member</button>
                </form>
            </div>
        );
    }
}

export default Characters;