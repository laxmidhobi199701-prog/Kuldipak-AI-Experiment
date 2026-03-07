/**
 * फोल्डर: 02_Kosh
 * कार्य: गणितीय रडार (Market Volatility Analysis)
 * रचयिता: सोनू भाई
 */

const GanitRadar = {
    // १. बाज़ार की शुचिता का गणित (Volatility Score)
    analyzeVolatility: function(niftyMove) {
        let score = 0;
        
        // अगर बाज़ार १.५% से ज़्यादा गिरा, तो 'स्वर्ण अवसर' (Score: 10)
        if (niftyMove <= -1.5) { score = 10; }
        // अगर बाज़ार ०.५% से १.५% के बीच गिरा, तो 'शुभ अवसर' (Score: 7)
        else if (niftyMove < -0.5 && niftyMove > -1.5) { score = 7; }
        // अगर बाज़ार स्थिर है, तो 'धैर्य' (Score: 5)
        else { score = 5; }
        
        return score;
    },

    // २. फंड्स की शक्ति का अनुमान
    fundPower: function(score) {
        if (score === 10) return "॥ महा-शक्ति ॥: SBI Small Cap में अतिरिक्त आहुति दें।";
        if (score === 7) return "॥ मध्यम-शक्ति ॥: SBI Midcap पर ध्यान दें।";
        return "॥ शांत-शक्ति ॥: अपनी ₹2,500 की नियमित SIP चलने दें।";
    }
};

// उदाहरण: मान लीजिए आज बाज़ार १.८% गिरा
let currentScore = GanitRadar.analyzeVolatility(-1.8);
console.log(GanitRadar.fundPower(currentScore));
