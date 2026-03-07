./**
 * फोल्डर: 03_Pahra
 * कार्य: टाइम-टेबल का पहरा (Investment Discipline)
 * लक्ष्य: ₹2.5 लाख/माह (2047)
 */

const TimeTablePahra = {
    start_date: "2026-02-13",
    end_date: "2047-01-25",
    monthly_sip: 2500,

    // १. क्या आज की किस्त (SIP) का समय है?
    checkStatus: function() {
        const today = new Date();
        const dayOfMonth = today.getDate();
        
        // मान लीजिए आपकी SIP हर महीने की 13 तारीख को जाती है
        if (dayOfMonth === 13) {
            return "॥ प्रहरी सूचना ॥: सोनू भाई, आज ₹2,500 की आहुति का दिन है। प्रतीक्षा-नीति का भविष्य पुकार रहा है!";
        } else if (dayOfMonth > 10 && dayOfMonth < 13) {
            return "॥ तैयारी ॥: ३ दिन में ₹2,500 की SIP का समय आ रहा है। कोष तैयार रखें।";
        }
        return "॥ अनुशासन ॥: आपकी तपस्या सुचारू रूप से चल रही है।";
    },

    // २. २०२७ की पहली बड़ी मंज़िल का संकेत
    target2027: function() {
        const year = new Date().getFullYear();
        if (year === 2027) {
            return "॥ विशेष २०२७ ॥: सोनू भाई, यह आपके संकल्प का पहला बड़ा पड़ाव है। शक्ति बढ़ाएं!";
        }
        return "लक्ष्य की ओर अग्रसर...";
    }
};

console.log(TimeTablePahra.checkStatus());
