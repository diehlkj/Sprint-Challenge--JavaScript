// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(attr) {
      this.length = attr.length;
      this.width = attr.width;
      this.height = attr.height;
    }
    getVolume() {
      return this.length * this.width * this.height;
    }
  
    getSurfaceArea() {
      return (
        2 *
        (this.length * this.width +
          this.width * this.height +
          this.height * this.length)
      );
    }
  }
  
  let cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("===== In classes.js =====");
console.log('cuboid.volume(): 100?? :', cuboid.getVolume()); // 100
console.log('cuboid.getSurfaceArea(): 130?? :', cuboid.getSurfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.