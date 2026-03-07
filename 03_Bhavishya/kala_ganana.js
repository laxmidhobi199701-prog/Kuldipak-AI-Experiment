/**
 * फोल्डर: 03_Bhavishya
 * कार्य: समय यात्रा (2026 से 2047)
 * लक्ष्य: प्रतीक्षा और नीति का भविष्य
 */

const KalaGanana = {
    sip: 2500,
    expected_return: 0.15, // 15% का रूहानी विकास (SBI Midcap/Small Cap)
    years_left: 21, // 2047 तक का सफर

    // १. भविष्य का अनुमान (Compound Interest Logic)
    bhavishya_darshan: function() {
        let months = this.years_left * 12;
        let rate = this.expected_return / 12;
        
        // ₹2,500 हर महीने, 21 साल तक
        let corpus = this.sip * ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);
        
        console.log("॥ भविष्य दर्शन ॥: 2047 की सुबह...");
        return `प्रतीक्षा और नीति का कोष: ₹${Math.round(corpus).toLocaleString()}/- (अनुमानित)`;
    },

    // २. अनुशासन का पहरा
    prahari_status: function() {
        const target_date = new Date("2047-01-25");
        const today = new Date();
        const diff = target_date - today;
        const days_left = Math.floor(diff / (1000 * 60 * 60 * 24));
        
        return `॥ पहरा ॥: अभी ${days_left} दिन और तपस्या शेष है।`;
    }
};

// २०४७ की एक झलक
console.log(KalaGanana.bhavishya_darshan());
console.log(KalaGanana.prahari_status());
