/**
 * फोल्डर: 04_Signal
 * कार्य: बाज़ार की शुचिता (Opportunity) को पहचानना
 * रचयिता: सोनू भाई (भीलवाड़ा-जयपुर)
 */

const ShuchitaRadar = {
    // १. बाज़ार का वर्तमान भाव (Nifty/Fund Sentiment)
    // अभी हम इसे 'अनुभव' के आधार पर सेट कर रहे हैं, आगे यह लाइव डेटा लेगा।
    checkMarketStatus: function(currentDropPercentage) {
        let signal = "";
        let color = "";

        if (currentDropPercentage >= 2.0) {
            // अगर बाज़ार २% से ज़्यादा गिरा है
            signal = "॥ महा-शुचिता ॥: सोनू भाई, आज बाज़ार बहुत झुका हुआ है। यह 'अमृत काल' है, अतिरिक्त निवेश करें!";
            color = "#ff3300"; // गहरा लाल (बड़ा अवसर)
        } 
        else if (currentDropPercentage >= 0.8) {
            // अगर बाज़ार थोड़ा गिरा है
            signal = "॥ शुचिता अवसर ॥: बाज़ार में हल्का सुधार है। ₹2,500 की SIP के साथ ₹500 और जोड़ें।";
            color = "#00ff00"; // हरा (शुभ संकेत)
        } 
        else {
            // अगर बाज़ार स्थिर या बढ़ रहा है
            signal = "॥ धैर्य काल ॥: बाज़ार अपनी गति से चल रहा है। अपनी मासिक तपस्या (SIP) जारी रखें।";
            color = "#00ccff"; // नीला (शांति)
        }

        return { संदेश: signal, रंग: color };
    }
};

// उदाहरण के लिए: मान लीजिए आज बाज़ार १.२% गिरा है
const todayStatus = ShuchitaRadar.checkMarketStatus(1.2);
console.log(todayStatus.संदेश);
