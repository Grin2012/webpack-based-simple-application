'use strict';

class OperationExecutor {
  constructor() {
    this.state = {
      0: this.firstTaskExecute.bind(this),
      1: this.secondTaskExecute.bind(this),
      2: this.thirdTaskExecute.bind(this),
      3: this.fourthTaskExecute.bind(this)
    };
  }

  /**
   * Execute some transformation of incoming arg
   * @param actionType – type of transformation
   * @param arg – incoming arg
   * @returns object with result
   */
  execute(actionType, arg) {
    return this.state[actionType](arg);
  }

  /**
   * First task of homework
   * @param arg – object with value that you should clone
   * arg = { obj1: { ... } }
   * @returns object that contains source object and his modified clone
   */
  firstTaskExecute(arg) {
    /**
     * Place your code here
     */
    const obj = arg.obj1;
    let cloneObj = Object.assign({}, obj);
    cloneObj.firstName = 'Olga';
    cloneObj.lastName = 'Ivanova';
    cloneObj.gender = 'female';
    return {obj, cloneObj} /* variable with result */;
  }

  /**
   * Second task of homework
   * @param arg – object with values that you should combine
   * arg = { obj1: { ... }, obj2: { ... } }
   * @returns object that contains source objects and their combined and modified clone
   */
  secondTaskExecute(arg) {
    /**
     * Place your code here
     */
    let obj1 = arg.obj1;
    let obj2 = arg.obj2;
    let sumObj = {...arg.obj1, ...arg.obj2};
    sumObj.z = 17;
    return {obj1, obj2, sumObj} /* variable with result */;
  }

  /**
   * Third task of homework
   * @param arg – object with value that you should modify
   * arg = { obj1: { ... } }
   * @returns object that contains modified source object
   */
  thirdTaskExecute(arg) {
    /**
     * Place your code here
     */
    let obj = arg;
    var gender = function (lastName) {
        return lastName[lastName.length-1] == 'a' ? 'female' : 'male';
    }
    obj.obj1.relatives.forEach(str => str.gender = gender (str.lastName));
    return obj /* variable with result */;
  }

  /**
   * Fourth task of homework
   * @param arg – object with value that contains relatives
   * arg = { obj1: { ... relatives: [ ... ] ... } }
   * @returns object that contains array of string with female relatives
   */
  fourthTaskExecute(arg) {
    /**
     * Place your code here
     */
    let obj = arg.obj1;
    let arrName = [];
    obj.relatives.filter((gender) => {
        return gender.gender === "female";
    }).forEach((name) => {
        arrName.push(`Hi, my dear ${name.firstName}.`);});
    return arrName/* variable with result */;
  }
}
export default OperationExecutor;