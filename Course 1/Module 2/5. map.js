const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148];

const conversionFactorMilesToKm = 1.6;

const distanceWalkedKmArr = distanceWalkedMilesArr.map(function (
  distMiles,
  index
) {
  return `Month ${index + 1} ${distMiles * conversionFactorMilesToKm}km`;
});

console.log(distanceWalkedKmArr);
