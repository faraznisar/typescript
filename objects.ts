const profile = {
  name: "alex",
  age: 12,
  coords: {
    lat: 23,
    lon: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const { name }: { name: string } = profile;
