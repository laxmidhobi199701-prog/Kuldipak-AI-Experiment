/**
 * फोल्डर: 04_Signal
 * कार्य: बाज़ार से 'लाइव डेटा' प्राप्त करना (Market API Logic)
 * लक्ष्य: ₹2,500 SIP (Contra, Midcap, Small Cap)
 */

const MarketPulse = {
    // १. बाज़ार की वास्तविक स्थिति (API Fetch Simulation)
    fetchMarketData: function() {
        console.log("॥ प्रहरी सक्रिय ॥: बाज़ार की तरंगों को पढ़ा जा रहा है...");
        
        // काल्पनिक रूप से बाज़ार का डेटा (Real-time)
        const current_nifty_change = -1.5; // मान लीजिए बाज़ार आज 1.5% गिरा है
        
        return this.generateSignal(current_nifty_change);
    },

    // २. विशेष सिग्नल का जन्म
    generateSignal: function(change) {
        if (change <= -1.0) {
            return "॥ विशेष सिग्नल ॥: सोनू भाई, बाज़ार में 'शुचिता' का अवसर है। SBI Midcap में अतिरिक्त टॉप-अप का समय!";
        } else if (change >= 1.5) {
            return "॥ प्रहरी सूचना ॥: बाज़ार में तेजी है। प्रतीक्षा और नीति का पोर्टफोलियो बढ़ रहा है।";
        } else {
            return "॥ धैर्य ॥: बाज़ार शांत है। आपका ₹2,500 का अनुशासन ही आपकी शक्ति है।";
        }
    }
};

// २० मार्च २०२६ का 'अनंत' से निकाला गया डेटा
console.log(MarketPulse.fetchMarketData());
