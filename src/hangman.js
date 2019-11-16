import React from 'react';

class hangman extends React.Component {
    constructor(props){
        super(props);
        this.state={
            kelime: "",
            harfler: "",
            bos : "",
            deger: "",
            kalanHak: 7,
            gText:"",
            gWin: false,
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

        //Restart 
        this.setState({
            bos : bosKelime,
            kelime: randomKelime,
            harfler: harflereAyır,
            kalanHak : 7,
            gWin : false
        })


    }

    handleChange(event) {
        this.setState({deger: event.target.value});
    }

    handleSubmit(event) {
        //Verilen Harf ile kelime içerisindeki harfleri Karşılaştırma
        var kelimedekiHarfler = this.state.kelime.split("");
        var kutucuklar = this.state.bos.split("");
        var dogruYanlıs = false;
        var kalanHakSayısı = this.state.kalanHak;
        var winState = false;

        for (var i=0;i<kelimedekiHarfler.length;i++)
        {
            if(kelimedekiHarfler[i] == this.state.deger)
            {
                kutucuklar[i] = kelimedekiHarfler[i];
                dogruYanlıs = true;
            }
        }

        //Verilen Harf doğru ve ya yanlış ise skora nasıl yansıyacağı
        if(!dogruYanlıs)
        {
            kalanHakSayısı = kalanHakSayısı -1
        }

        //Hiç kutucuk kalmadıysa
        var gameText = "";
        //Yıldız kalmamış demektir
        var kutucukKalmadıysa = kutucuklar.filter((kutu) => {
            return kutu != "*";
        })

        //Yada Can kalmamış olmalı
        if(kalanHakSayısı == 0){
            gameText = "You Lose"
        }

        //O zaman bu uzunluklar eşit olmalı
        if(kelimedekiHarfler.length == kutucukKalmadıysa.length)
        {
            winState = true;
        }

        if(winState)
        {
            gameText = "You Win"
        }

        this.setState({
                bos: kutucuklar.join(''),
                kalanHak: kalanHakSayısı,
                gText: gameText,
                gWin: winState
            });

        event.preventDefault();
    }

    render(){
        return (
            <div className="App">
                <div>
                <button onClick={this.gameOn}>Başla </button>
                </div>
                <div>
                <img src={`./${this.state.kalanHak}.png`}></img>
                </div>
                {(this.state.kalanHak > 0 && !this.state.gWin) ?
                        <div>
                            <h1>{this.state.bos}</h1>
                            <label>
                                <input type="text" value={this.state.value} onChange={this.handleChange} maxLength="1"/>
                            </label>
                            <button type="button" onClick={this.handleSubmit}>Onayla</button>
                        </div>
                        :
                        <div>
                            <h1>{this.state.gText}</h1>
                        </div>
                    }
            </div>
        );
    }
}

export default hangman;