let userName: string = "Adarsh Vinayak Desai";
let age: number = 21;
let isDeveloper: boolean = true;
let hobbies: string[] = ["Coding", "Gaming", "Watching Movies"];
console.log(userName, age, isDeveloper, hobbies);

const names: string[] = userName.split(" ");
console.log(names);

interface Person {
  name: string;
  age: number;
}

const myPerson: Person = {
  name: "Adarsh Vinayak Desai",
  age: 21,
};
console.log(myPerson);

const ids: Record<number, string> = {
  101: "Adarsh Vinayak Desai",
  102: "Akshay Vinayak Desai",
  103: "Vinayak Desai",
};
ids[104] = "Deepa Desai";

if (ids[104]) console.log(ids[102]);

for (let i = 0; i < hobbies.length; i++) console.log(hobbies[i]);

hobbies.forEach((hobby) => console.log(hobby));

const myhobbies = hobbies.map((hobby) => {
  return hobby.toUpperCase();
});
console.log(myhobbies);

export {};
