console.log("Hello World");

function addNumbers(a: number, b: number) {
  return a + b;
}
console.log(addNumbers(1, 2));

export const addStrings = (a: string, b: string): string => {
  return `${a} ${b}`;
};

function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

printToFile("Hello World", () => {
  console.log("Done");
});

type mutationFunction = (v: number) => number;

function arrayMuatate(numbers: number[], mutate: mutationFunction): number[] {
  return numbers.map(mutate);
}

console.log(arrayMuatate([1, 2, 3], (v) => v * 2));

function printIngredient(ingredient: {
  name: string;
  amount: number;
  extra?: string;
}) {
  console.log(
    `${ingredient.name} ${ingredient.amount} ${
      ingredient.extra ? ingredient.extra : ""
    }`
  );
}

printIngredient({ name: "Tomato", amount: 2 });
printIngredient({ name: "Tomato", amount: 2, extra: "extra" });

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  return user?.info?.email ?? "No email";
}

console.log(getEmail({ id: "1" }));
console.log(getEmail({ id: "1", info: { email: "asd@wer.in" } }));

type threeDCoordinate = [x: number, y: number, z: number];

function addThreeDCoordinate(
  a: threeDCoordinate,
  b: threeDCoordinate
): threeDCoordinate {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

console.log(addThreeDCoordinate([1, 2, 3], [4, 5, 6]));

function simpleStringState(
  initialString: string
): [() => string, (v: string) => void] {
  let currentString = initialString;
  return [
    () => currentString,
    (v: string) => {
      currentString = v;
    },
  ];
}

const [getString, setString] = simpleStringState("Hello World");
setString("Hello World 2");
console.log(getString());

export {};
