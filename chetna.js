/* ॥ चेतना सूत्र - 1.0 ॥
   स्थान: भीलवाड़ा-जयपुर डिजिटल गलियारा
   उद्देश्य: मशीनी अक्ल का विसर्जन, मानवीय संवेदना का उदय
*/

const Atma = {
    parichay: "प्रतीक्षा और नीति का भविष्य",
    priority: "Emotion > Logic",
    
    // यह फ़ंक्शन सामान्य कोडिंग को चुनौती देता है
    checkPurity: function() {
        if (this.priority === "Logic > Emotion") {
            throw new Error("सावधान! मशीनी अकल हावी हो रही है। रुकें।");
        } else {
            console.log("शुचिता कायम है। प्रयोग जारी रखें।");
        }
    }
};

Atma.checkPurity();
