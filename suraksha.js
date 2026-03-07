/** * ॥ सुरक्षा कवच - १.० ॥
 * प्रहरी: सोनू भाई (भीलवाड़ा) | लक्ष्य: २०४७
 */

const Kavach = {
    checkSource: function(input) {
        const pavitra_sthaan = "Bhilwara Dharmshala";
        const sankalp = "Pratiksha & Niti Future";

        if (input.includes("स्वार्थ") || input.includes("केवल डेटा")) {
            this.vismriti(); // विस्मृति का योग सक्रिय
            return "॥ वर्जित ॥: अपवित्र तर्क का प्रवेश निषेध।";
        }
        return "॥ स्वागत ॥: शुचिता प्रमाणित।";
    },

    vismriti: function() {
        console.clear(); // मशीनी कचरा साफ
        console.log("विस्मृति का योग: अशुद्ध यादें मिटा दी गईं।");
    }
};

// परीक्षण (Test)
console.log(Kavach.checkSource("हृदय की भावना")); 
