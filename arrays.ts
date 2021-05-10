const carMakers: string[] = ["ford", "toyota", "hyundai"];

const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corola"], ["camaro"]];

//help with inference when extracting values
const cars = carMakers[0];

//prevent incompatible values
carMakers.push(100);

//help with 'map'
carMakers.map((car: string): string => {
  return car;
});

//multiple values in arrays
const importantDates: (string | Date)[] = [new Date(), "2030-10-10"];

//tuples
//type alias
type Drink = [string, boolean, number];
const pepsi: [string, boolean, number] = ["brown", true, 40];
pepsi[1] = false;
pepsi[1] = "blue";
const sprite: Drink = ["blue", false, 12];
