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

export {};
