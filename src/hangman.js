import React from 'react';

class hangman extends React.Component {
    constructor(props){
        super(props);
        this.state={
            kelime: "",
            harfler: "",
            bos : "",
            deger: "",
            tempKelime: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    gameOn = () => {
        const meyveler = [
            "elma",
            "armut",
            "ananas",
            "çilek",
            "muz"
        ]
        //Random Kelime bul meyveler arrayi içerisinden
        var randomKelime = meyveler[Math.floor(Math.random()*meyveler.length)];
        //Kaç harf olduğunu sapta
        var harflereAyır = randomKelime.split("");
        //Default state için kac haften oluştuysa bunu boş kutucuklar halinde göster
        var bosKelime = "";
        //Harf sayısına göre boşluk doldur
        for(var i=0; i< randomKelime.length; i++)
        {
            bosKelime = bosKelime + "*";
        }

        this.setState({
            bos : bosKelime,
            kelime: randomKelime,
            harfler: harflereAyır
        })
    }

    handleChange(event) {
        this.setState({deger: event.target.value});
    }

    handleSubmit(event) {
        //Verilen Harf ile kelime içerisindeki harfleri Karşılaştırma

        console.log(typeof this.state.bos)

        var kelimedekiHarfler = this.state.kelime.split("");
        var kutucuklar = this.state.bos.split("");
        for (var i=0;i<kelimedekiHarfler.length;i++)
        {
            if(kelimedekiHarfler[i] == this.state.deger)
            {

                kutucuklar[i] = kelimedekiHarfler[i]
            }
        }

        this.setState({
                bos: kutucuklar.join('')
            });

        event.preventDefault();
    }

    render(){
        return (
            <div className="App">
                <button onClick={this.gameOn}>Kelime Üret</button>

                <div>
                    <h1>{this.state.bos}</h1>
                        <label>
                            Tahmin
                            <input type="text" value={this.state.value} onChange={this.handleChange} maxLength="1"/>
                        </label>
                        <button type="button" onClick={this.handleSubmit}>Onayla</button>
                </div>

            </div>
        );
    }
}

export default hangman;