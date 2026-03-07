/**
 * फोल्डर: 02_Kosh
 * विषय: SBI त्रिशक्ति विश्लेषण (Contra, Midcap, Small Cap)
 * लक्ष्य: ₹2,500 मासिक तपस्या
 */

const SBISwabhav = {
    // १. SBI Contra (₹1,000) - 'धैर्य की शक्ति'
    contra_niti: {
        shakti: "विपरीत दिशा में चलना (Contrarian)",
        bhrav: "जब सब डरें, तब यह अवसर ढूंढता है।",
        anushasan: 1000
    },

    // २. SBI Midcap (₹1,000) - 'विकास की शक्ति'
    midcap_niti: {
        shakti: "तेजी से बढ़ने वाले मध्यम उद्योग",
        bhrav: "२०४७ तक वटवृक्ष बनने की सबसे अधिक संभावना।",
        anushasan: 1000
    },

    // ३. SBI Small Cap (₹500) - 'साहस की शक्ति'
    smallcap_niti: {
        shakti: "नन्हें पौधे जो कल के विशाल वृक्ष हैं",
        bhrav: "जोखिम अधिक, पर परिणाम सबसे चमत्कारी।",
        anushasan: 500
    },

    // ४. कुल योग का पहरा
    tapasya_check: function() {
        let total = this.contra_niti.anushasan + this.midcap_niti.anushasan + this.smallcap_niti.anushasan;
        return `॥ कुल-दीपक ॥: सोनू भाई, आपकी ₹${total} की मासिक आहुति २०४७ की सिद्धि के लिए जा रही है।`;
    }
};

console.log(SBISwabhav.tapasya_check());
