let userName: string = "Max";
let userAge: number = 34;
let isTrue: boolean = true;

type StringOrNumber = string | number;
let userId: StringOrNumber = "abc"; // Union type

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user: User;

user = {
  name: "Max",
  age: 34,
  isAdmin: true,
  id: "abc",
};

let hobbies: string[];
hobbies = ["Playing guitar", "Walking", "Cooking"];

function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  return calcFn(a, b);
}

console.info(calculate(2, 5, add));

export {};
