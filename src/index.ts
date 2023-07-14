//Basic types
let id: number = 5;
let company: string = "John";
let isEmployee: boolean = true;
let x: any = "hello";

//Arrays
let data: number[] = [1, 2, 3];
let names: any[] = ["jack", true, 2];

//tuples are arrays with different data types
let person: [string, number, boolean];
person = ["John", 30, true];

//Tuple array
let employee: [number, string][];
employee = [
  [1, "Jack"],
  [2, "Jill"],
  [3, "John"],
];

//union for variable holding different data type
let pid: number | string;
pid = 3220;
pid = "CS3220";

//Enums - Enumerated datatypes that hold value
enum directon1 {
  Up, //Up = 0 default value
  Down, //Down = 1
  Right, //Right = 2
  Left, //Left = 3
}

enum direction2 {
  Up = "UP",
  Down = "DOWN",
  Right = "RIGHT",
  Left = "LEFT",
}

//Objects
type User = {
  id: number;
  name: string;
  isEmp: boolean;
};

let cust: User = {
  id: 100,
  name: "Jon snow",
  isEmp: false,
};

//Type assertions
let cid: any = 1;
let customerId = <number>cid;
//let customerId = id as number

//Functions
function addNum(x: number, y: number): number {
  return x + y;
}
addNum(3, 5);

//Void data type for functions with no return type
function displayMsg(message: number | string): void {
  console.log(message);
}

//Interfaces are used for objects , similar to types but cannot be used with unions

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

let user: UserInterface = {
  id: 47896,
  name: "John Doe",
};

//function interface
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x, y) => x + y;
const sun: MathFunc = (x, y) => x - y;

//Classes
class student {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  showStudent() {
    return `${this.name} is registered with id${this.id}`;
  }
}
const student1 = new student(112, "John Doe");
const student2 = new student(223, "Mary Doe");

//Interfaces for classes
interface StudentInerface {
  id: number;
  name: string;
  showStudent(): string;
}

//generics - reusable components with placeholders that define the data type

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

const numArr = getArray<number>([1, 2, 3, 4, 5]);
const strArr = getArray<string>(["John", "Jack"]);

// datatypes
// Arrays , tuples
// union , enums
// objects
// Interfaces
// Types
// Classes
// Functions
// Generics