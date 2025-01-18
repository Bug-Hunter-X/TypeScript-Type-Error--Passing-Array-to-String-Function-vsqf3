# TypeScript Type Error: Passing Array to String Function

This repository demonstrates a common type error in TypeScript and its solution.

## The Bug
The `greeter` function expects a string argument but receives an array. This leads to a compilation error because TypeScript's type system correctly identifies the type mismatch.

## The Solution
The solution modifies the `greeter` function to accept either a string or an array of strings.  It also shows how to handle the array case appropriately using array manipulation.