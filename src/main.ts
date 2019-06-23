
function addAge(age: number){
  return function(targetClass){
    return class {
      name = new targetClass().name;
      age = age;
    }
  }
}

@addAge(5)
class Dog{
  name = "John";
}

console.log(new Dog());
