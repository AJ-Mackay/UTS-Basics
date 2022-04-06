// const person: {
//   name: string;
//   age: number;
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Ash",
  age: 37,
  hobbies: ["Reading", "Puzzles"],
  role: [7, "reader"],
};

person.role.push("user");
// person.role[1] = 10;

let favouriteActivities: string[];
favouriteActivities = ["Reading"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); // !!! ERROR !!!
}
