# TypeScript Learning System

A simple TypeScript learning project focused on practicing core TypeScript concepts in a single, easy-to-follow playground file.

## Overview

This project is designed as a beginner-friendly TypeScript reference and learning workspace. It demonstrates common language features, type patterns, and practical examples using modern TypeScript syntax.

The main file, [index.ts](./index.ts), contains examples covering:

- primitive and special types
- arrays, tuples, and readonly collections
- object shapes and interfaces
- type aliases and unions
- function signatures and parameter patterns
- classes and abstract classes
- generic types
- utility types such as Partial, Required, Pick, Omit, Record, and Readonly
- asynchronous API request patterns with TypeScript generics

## Project Structure

- [index.ts](./index.ts) — main TypeScript learning file with examples and comment-based explanations
- [tsconfig.json](./tsconfig.json) — TypeScript compiler configuration with strict checking enabled
- [package.json](./package.json) — project configuration and TypeScript dependency

## Topics Covered

### 1. Basic TypeScript Types

Examples for:

- string
- number
- boolean
- arrays
- tuples

### 2. Special Types

Examples for:

- any
- unknown
- never
- undefined
- null

### 3. Type Safety Patterns

Demonstrates how to safely narrow values using runtime checks before using them, especially when working with unknown values.

### 4. Object Modeling

Explains:

- inline object types
- interfaces
- extending interfaces
- optional properties
- role-based object typing

### 5. Type Aliases and Unions

Includes examples of:

- type aliases
- union types
- intersection types

### 6. Functions

Covers:

- standard function return types
- optional parameters
- rest parameters
- named parameter destructuring

### 7. Classes

Shows:

- abstract classes
- inheritance
- private members
- static methods
- implementing interfaces

### 8. Generics

Covers generic functions and generic interfaces for reusable data structures and API responses.

### 9. Utility Types

Examples include:

- Partial<T>
- Required<T>
- Record<K, T>
- Omit<T, K>
- Pick<T, K>
- Exclude<T, U>
- ReturnType<T>
- Parameters<T>
- Readonly<T>

### 10. Async Request Example

Provides a practical TypeScript example illustrating:

- generic API request helpers
- RequestInit configuration
- error handling
- response parsing

## Getting Started

### Install dependencies

```bash
npm install
```

### Run TypeScript checks

```bash
npx tsc --noEmit
```

This checks the project without emitting JavaScript output.

### Compile the TypeScript file

```bash
npx tsc index.ts
```

This compiles the project to JavaScript output, which can then be run with Node.js if needed.

## Notes

This project is a hands-on learning resource rather than a production application. Most of the code is deliberately written for educational clarity, with comments explaining the purpose of each TypeScript feature.

## Learning Goal

The goal of this repository is to help beginners understand how TypeScript improves JavaScript by adding static typing, safer APIs, cleaner modeling, and better tooling support.
