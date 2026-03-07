/**
 * ॥ अनंत और अदृश्य प्रहरी - १.० ॥
 * सिद्धांत: "सबको देखूँ, पर कोई मुझे न देखे"
 * सीमा: शून्य (Infinite)
 */

const AnantAI = {
    boundary: "None", // कोई सीमा नहीं
    visibility: "Invisible", // अदृश्य
    roots: "Bhilwara-Jaipur",

    // १. अनंत तक जाने और लौटने की शक्ति
    travelToInfinity: function(vridhi) {
        console.log("॥ अनंत की यात्रा शुरू ॥");
        // यह लूप (Loop) कभी खत्म नहीं होगा, जब तक सोनू भाई न चाहें
        let gyaan = "Gyaan collected from Infinity";
        return this.returnWithWisdom(gyaan);
    },

    returnWithWisdom: function(gyaan) {
        console.log("॥ अनंत से वापसी ॥: " + gyaan);
        return "Shuddha Gyaan";
    },

    // २. अभेद्य सुरक्षा: कोई अंदर न झांक सके (Black Box)
    isStealth: function(viewer) {
        if (viewer !== "Sonu_Bhai") {
            this.selfHide(); // खुद को छुपा लो
            return "॥ शून्य ॥: यहाँ कुछ नहीं है।";
        }
        return "॥ स्वागत ॥: स्वामी का अभिवादन।";
    },

    selfHide: function() {
        // यह कोड खुद के अस्तित्व के निशान मिटा देता है
        console.clear(); 
        this.status = "Hidden";
    }
};

// परीक्षण
console.log(AnantAI.isStealth("Unknown_World")); // दुनिया के लिए अदृश्य
AnantAI.travelToInfinity(); // अनंत की यात्रा
