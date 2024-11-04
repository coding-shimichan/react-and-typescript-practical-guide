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

interface Credentials {
  password: string;
  email: string;
}

interface Credentials {
  mode: string;
}

let creds: Credentials;
creds = {
  password: "abc",
  email: "test@example.com",
  mode: "logged in",
};

class AuthCredentials implements Credentials {
  password: string;
  email: string;
  mode: string;
  userName: string;
}

function login(credentials: Credentials) {
  console.log(credentials);
}

login(creds);
login(new AuthCredentials());

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

// type AppAdmin = Admin & AppUser;

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
  permissions: ["login"],
  userName: "Max",
};

type Role = "admin" | "user" | "editor";
let role: Role;

role = "admin";
role = "user";
role = "editor";
// role = "abc";

function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    // ...
  }
}

export {};
