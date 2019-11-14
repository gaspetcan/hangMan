import React from 'react';

class hangman extends React.Component {
    constructor(props){
        super(props);
        this.state={
            kelime: "",
            harfler: "",
            deger: "",
        }
    }

    gameOn = () => {
        const meyveler = [
            "Elma",
            "Armut",
            "Ananas",
            "Çilek",
            "Muz"
        ]
        var sKelime = meyveler[Math.floor(Math.random()*meyveler.length)];
        var harfS = "";
        var harfL = sKelime.split("");
        for(var i=0; i< sKelime.length; i++)
        {
            harfS = harfS + "_ ";    
        }
        this.setState({
            kelime: harfS,
            harfler: harfL,
        })
    }

    handleChange(event) {   
        this.setState({deger: event.target.value});
    }
    
    render(){
        return (
            <div className="App">
                <h1>{this.state.harfler}</h1>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.gameOn}>Start</button>
            </div>
    );    
}    
}

export default hangman;