let userName: string = "Max";
let userAge: number = 34;
let isTrue: boolean = true;

let userId: string | number = "abc"; // Union type

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

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

export {};
