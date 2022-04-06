// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Ash",
//   age: 37,
//   hobbies: ["Reading", "Puzzles"],
//   role: [7, "reader"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = 200,
}

const person = {
  name: "Ash",
  age: 37,
  hobbies: ["Reading", "Puzzles"],
  role: Role.READ_ONLY,
};

// person.role.push("user");
// person.role[1] = 10;

let favouriteActivities: string[];
favouriteActivities = ["Reading"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
