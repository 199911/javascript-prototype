class Duck {
  constructor() {
    this.name = 'Donald';
  }
  getName() {
    return this.name;
  }
  fly() {
    console.log('I am flying!');
  }
  quack() {
    console.log('Quack')
  }
}

module.exports = Duck;
