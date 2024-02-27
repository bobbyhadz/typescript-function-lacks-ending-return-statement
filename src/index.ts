export {};

// Function lacks ending return statement Error in TS

// EXAMPLE 1 - Make sure to return a value from all code paths

// ✅ Works now
const getNumber = (): number => {
  if (Math.random() > 0.5) {
    return 100;
  }

  return 50; // 👈️ all code paths return a value
};

// ---------------------------------------------------

// // EXAMPLE 2 - Use a union type to solve the error

// // ✅ Works now
// const getPromise = async (): Promise<number | undefined> => {
//   try {
//     const result = await Promise.resolve(42);
//     return result;
//   } catch (err) {
//     console.log(err);

//     return;
//   }
// };

// ---------------------------------------------------

// // EXAMPLE 3 - using a type guard

// const getPromise = async (): Promise<number | undefined> => {
//   try {
//     const result = await Promise.resolve(42);
//     return result;
//   } catch (err) {
//     console.log(err);

//     return;
//   }
// };

// getPromise().then((value) => {
//   if (typeof value === 'number') {
//     // ✅ We know that value is number
//     console.log(value.toFixed());
//   }
// });

// ---------------------------------------------------

// // EXAMPLE 4 - Replace the ending `else if` statement with an `else` statement

// // ✅ Works now
// const getString = (): string => {
//   if ('hello'.length === 5) {
//     return 'hello';
//   } else {
//     return 'bye';
//   }
// };

// ---------------------------------------------------

// // EXAMPLE 5 - Or remove the `else` block completely

// // ✅ Works now

// const getString = (): string => {
//   if ('hello'.length === 5) {
//     return 'hello';
//   }
//   return 'bye';
// };

// ---------------------------------------------------

// // EXAMPLE 6 - Returning values only from nested functions

// // ✅ Works now
// const getString = (): string => {
//   if ('hello'.length === 5) {
//     return 'hello';
//   }

//   function inner() {
//     return 'bye';
//   }

//   return inner();
// };
