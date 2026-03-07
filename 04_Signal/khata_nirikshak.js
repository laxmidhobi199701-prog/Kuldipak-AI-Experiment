/**
 * फोल्डर: 04_Signal
 * कार्य: वास्तविक बाज़ार की हलचल और SBI निवेश का मेल
 * स्वामी: सोनू भाई (भीलवाड़ा-जयपुर)
 */

const KhataSignal = {
    sip_total: 2500, // (1000 + 1000 + 500)
    target_year: 2047,
    
    // १. बाज़ार की गहराई नापना
    nirikshan: function(nifty_status) {
        let sandesh = "";
        
        // विपरीत लॉजिक: जब बाज़ार गिरे, तब हमारा 'विशेष सिग्नल' जागेगा
        if (nifty_status === "Down" || nifty_status === "Correction") {
            sandesh = "॥ विशेष सिग्नल ॥: सोनू भाई, बाज़ार में गिरावट है। SBI Midcap में अतिरिक्त टॉप-अप का अवसर!";
        } else {
            sandesh = "॥ धैर्य ॥: बाज़ार स्थिर है। SIP (2500/-) सुचारू रूप से चल रही है।";
        }
        return sandesh;
    },

    // २. बेटियों के भविष्य का प्रोग्रेस चेक
    futureValue: function() {
        console.log("प्रतीक्षा और नीति के लिए २०२६ से २०४७ की यात्रा...");
        return "प्रगति: ३% पूर्ण (अभी लंबी यात्रा शेष है)";
    }
};

// उदाहरण: मान लीजिए आज बाज़ार ५०० पॉइंट गिर गया
console.log(KhataSignal.nirikshan("Down"));
console.log(KhataSignal.futureValue());
