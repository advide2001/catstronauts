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

function simpleState<T>(initialState: T): [() => T, (v: T) => void] {
  let currentState = initialState;
  return [
    () => currentState,
    (v: T) => {
      currentState = v;
    },
  ];
}

const [getState, setState] = simpleState<number | null>(20);
console.log(getState());
setState(30);
console.log(getState());

const [getState2, setState2] = simpleState<string | null>(null);
console.log(getState2());
setState2("adarsh");
console.log(getState2());

function ranker<RankItem>(
  items: RankItem[],
  rank: (item: RankItem) => number
): RankItem[] {
  return items.sort((a, b) => rank(a) - rank(b));
}

const items = [
  { name: "A", rank: 10 },
  { name: "B", rank: 5 },
  { name: "C", rank: 15 },
];

console.log(ranker(items, (item) => item.rank));

export {};
