import React from 'react';

class hangman extends React.Component {
    constructor(props){
        super(props);
        this.state={
            kelime: "",
            harfler: "",
            bos : "",
            deger: "",
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
        var kelime = this.state.kelime;
        var kelimedekiHarfler = kelime.split("");
        var kelimeTahmin = "";
        var kelimeTemp = this.state.bos;
        kelimedekiHarfler.forEach((harf)=>{
            if(harf == this.state.deger)
                kelimeTahmin += harf;
            else
                kelimeTahmin += "*";
        })
        //Geçiçi kelime ile asıl kelimeyi karşılaştırma
        //Aynı harf geldiğinde yanlış olduğunu kontrol etme

        for(var i=0;i<kelimeTemp.length;i++){
            if(kelimeTemp[i] != kelimeTahmin[i])
                console.log(kelimeTemp.length)
                //? Sayfa yenileniyor
                kelimeTemp.splice(i, 1, kelimeTahmin[i]);
        }
        this.setState({
                bos:kelimeTemp
            })
        event.preventDefault();
    }

    render(){
        return (
            <div className="App">
                <button onClick={this.gameOn}>Kelime Üret</button>

                <div>
                    <h1>{this.state.bos}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Tahmin
                            <input type="text" value={this.state.value} onChange={this.handleChange} maxLength="1"/>
                        </label>
                        <input type="submit" value="onayla"/>
                    </form>
                </div>

            </div>
    );    
}    
}

export default hangman;