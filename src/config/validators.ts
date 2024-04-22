
export class Validators {//1

  
    static get email() { //2
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; //3
    } 
  
  
  }