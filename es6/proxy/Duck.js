class Duck {
  construtor() {
    this.name = 'Donald';
  }
  getName() {
    return 'Donald';
  }
  fly() {
    console.log('I am flying!');
  }
  quack() {
    console.log('Quack')
  }
}

module.exports = Duck;
