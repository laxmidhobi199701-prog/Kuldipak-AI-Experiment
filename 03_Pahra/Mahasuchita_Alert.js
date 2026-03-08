/**
 * फोल्डर: 03_Pahra
 * कार्य: बाज़ार के क्रैश (Crash) को 'अमृत' में बदलना
 * रचयिता: सोनू भाई
 */

const MahasuchitaAlert = {
    // अगर बाज़ार ३% से ज्यादा गिरे
    checkCrash: function(niftyDrop) {
        if (niftyDrop <= -3.0) {
            return {
                status: "RED_ALERT",
                message: "॥ महा-शुचिता ॥: सोनू भाई, बाज़ार में बड़ी गिरावट है! यह २०२७-२०४७ के बीच का सबसे बड़ा अवसर हो सकता है।",
                action: "अतिरिक्त ₹1,000 या ₹2,000 निवेश करने का विचार करें।"
            };
        }
        return { status: "NORMAL", message: "पहरा जारी है..." };
    }
};

// उदाहरण: अगर बाज़ार ४% गिर गया
console.log(MahasuchitaAlert.checkCrash(-4.0).message);
 
