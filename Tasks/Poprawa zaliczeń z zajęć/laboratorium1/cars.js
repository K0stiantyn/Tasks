const cars = [
    { id: 1, make: 'Toyota', model: 'Yaris', year: 2001, color: 'white' },
    { id: 2, make: 'Honda', model: 'Civic', year: 2022, color: 'gray' },
    { id: 3, make: 'Nissan', model: 'Altima', year: 2021, color: 'blue' },
    { id: 4, make: 'Hyundai', model: 'Sonata', year: 2020, color: 'black' },
    { id: 5, make: 'Kia', model: 'Optima', year: 2019, color: 'silver' },
];
  
  const getCars = () => cars;
  
  const getCarInformation = (id) => {
    const car = cars.find((c) => c.id === id);
    if (car) {
      return `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}`;
    } else {
      return 'Car doesn’t exist';
    }
  };
  
  const getCarAge = (id) => {
    const car = cars.find((c) => c.id === id);
    if (car) {
      const currentYear = new Date().getFullYear();
      const carAge = currentYear - car.year;
      return `Car is ${carAge} years old.`;
    } else {
      return 'Car doesn’t exist';
    }
  };
  
  module.exports = {
    getCars,
    getCarInformation,
    getCarAge,
  };
  