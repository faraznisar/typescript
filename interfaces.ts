const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

// better to use an interface
interface Car {
  name: string;
  year: number;
  broken: boolean;
}
const printVehicle = (vehicle: Car): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
