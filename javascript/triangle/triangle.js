
export class Triangle {
  flag = true;

  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    if(this.side1 + this.side2 < this.side3 ||
      this.side1+this.side3 < this.side2 ||
      this.side2 + this.side3 < this.side1)  
       this.flag = false;
    if(this.side1 === 0 && this.side2 === 0 & this.side3 === 0)
      this.flag = false;
  }

  isEquilateral() {
    return this.side1 === this.side2 && this.side1 === this.side3 && this.flag ? true : false;
  }

  isIsosceles() {
    if(this.side1 === this.side2 && this.flag)
      return true;
    else if (this.side1 === this.side3 && this.flag)
      return true;
    else if (this.side2 === this.side3 && this.flag)
      return true;
    else 
      return false;
  }
  isScalene() {
    return this.side1 !== this.side2 && this.side1 !== this.side3 && this.side2 !== this.side3 && this.flag ? true : false;
  }
}
