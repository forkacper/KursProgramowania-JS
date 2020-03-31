function Car(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }
  
  myCar = new Car('Fiat', '126p', 1993);
  
  function age() {
    return new Date().getFullYear() - this.year
  }
  myCar.age = age
  myCar.age()