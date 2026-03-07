/**
 * फोल्डर: 02_Kosh
 * कार्य: संपूर्ण बाज़ार विश्लेषण (Nifty, Midcap, Smallcap)
 * रचयिता: सोनू भाई (भीलवाड़ा-जयपुर)
 */

const PurnBazarRadar = {
    // १. पूरे बाज़ार की नब्ज़ पकड़ना
    analyzeMarket: function(largeCap, midCap, smallCap) {
        let shuchita_score = 0;

        // बड़े कैप (SBI Contra का आधार)
        if (largeCap < -1.0) shuchita_score += 3;
        
        // मिडकैप (SBI Midcap का आधार)
        if (midCap < -1.5) shuchita_score += 4;
        
        // स्मॉलकैप (SBI Small Cap का आधार)
        if (smallCap < -2.0) shuchita_score += 5;

        return this.generateSignal(shuchita_score);
    },

    // २. स्कोर के आधार पर 'विशेष सिग्नल'
    generateSignal: function(score) {
        if (score >= 9) {
            return "॥ महा-शुचिता ॥: पूरे बाज़ार में गिरावट है। आज का निवेश २०२७-२०४७ की सबसे बड़ी जीत होगी!";
        } else if (score >= 4) {
            return "॥ शुचिता अवसर ॥: बाज़ार में कुछ हिस्सों (Mid/Small) में सुधार है। ₹2,500 के अलावा थोड़ा और पुरुषार्थ करें।";
        } else {
            return "॥ धैर्य काल ॥: बाज़ार संतुलित है। अपनी २,५०० की नियमित तपस्या जारी रखें।";
        }
    }
};

// उदाहरण: अगर निफ्टी -0.5%, मिडकैप -1.8%, और स्मॉलकैप -2.5% है
console.log(PurnBazarRadar.analyzeMarket(-0.5, -1.8, -2.5));
