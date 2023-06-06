class Shapes{
    constructor(){
        this.color=" "
    }
};

class Circle extends Shapes{
    render(){
    return `<circle height="70%" width="70%" cx="50%" cy="50%" r="150" fill="${this.color}"/>`
    }
};

class Triangle extends Shapes{
    render(){
    return `<polygon width="100%" height="100%" points="50 15, 100 100, 0 100 fill="${this.color}"/>`
    }
};

class Square extends Shapes{
    render(){
    return `<rect x="50" width="150" height="150" fill="${this.color}"/>`
    }
};

module.exports = {Circle, Triangle, Square}
