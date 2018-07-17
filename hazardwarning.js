function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
 
    return function(location) {
        warningCounter += 1;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);

    }
}

const rocksWarning = hazardWarningCreator("Rocks on road slow down!");
const weatherWarning = hazardWarningCreator("Strong winds slow down");
const wetRoads = hazardWarningCreator("Wet roads slow down!");

rocksWarning("southern and 16 street");
weatherWarning("24st and baseline");
wetRoads("central and baseline");
