// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Ash",
  age: 37,
  hobbies: ["Reading", "Puzzles"],
};

let favouriteActivities: string[];
favouriteActivities = ["Reading"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
//   console.log(hobby.map()); // !!! ERROR !!!
}
