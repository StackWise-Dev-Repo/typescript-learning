// 1. NORMAL VARIABLE
const name: string = "Julia Martin";
const age: number = 22;
const disabled: boolean = false;
const favColors: string[] = ["Red", "Green", "Yellow"];
const favNumbers: number[] = [22, 33, 25, 23, 53];

// 2. SPECIAL TYPES IN TYPESCRIPT
const anyValues: any[] = ["James Marting", 22, false];
let whoami: unknown = 23;
whoami = "something"

whoami = {
  youCannotAccessThisMethod: (): void => {
    console.log(
      "You have to make sure the type safety first then access this.",
    );
  },
  name: "Smith Cohroen"
}

// console.log(whoami.youCannotAccessThisMethod()); // THIS WILL THROW ERROR

// FOR UNKNOWN YOU HAVE TO CHECK THE TYPESAFETY FIRST AND THEN IMPLEMENT
if(typeof whoami === 'object' && whoami !== null) {
    (whoami as {youCannotAccessThisMethod: Function}).youCannotAccessThisMethod();
    (whoami as {name: string}).name;
}

// NEVER TYPE -> IF FUCNTION NEVER COMPLETE NORMALLY AND BREAK SOMEWHERE
function flowBreakingFunction(): never {
    throw new Error("Something went wrong..");
    // YOU CAN'T DO ANYTHING RIGHT AFTER THIS STATEMENT.....
}

// UNDEFINED AND NULL TYPES
const upcomingValue: undefined = undefined;
const disabledStatus: null = null;

// 3. ARRAY TYPES 
const names: string[] = ["James", "Rohan", "Sumia", "Brismin"]; // YOU CAN STORE ONLY STRING VALUES
const readOnly: readonly string[] = ["James", "Rohan", "Sumia", "Brismin"]; // YOU CAN'T ADD MORE VALUES
const typedName: [string, string, boolean] = ["Smith", "Josh", false] // TUPLE FIXED ARRAY WITH LENGTH AND VALUE TYPES


// 4. OBJECT TYPES
const user: {
    name: string,
    age: number,
    married?: boolean // CONDITIONAL MAY BE GIVEN OR NOT
} = {
    name: "Jones Barkon",
    age: 22,
    married: true
}

// USING INTERFACE WITH MORE FLEXIBILITY
interface Person {
    name?: string,
    age?: number,
    hobbies?: string[]
}
interface Admin extends Person {
    role: string
}
const admin: Admin = {
    name: "Yosho Grandma",
    age: 23,
    hobbies: ["working", "walking", "talking"],
    role: "Admin"
}

// 5. ENUMS -> ENUMERATORS (WORKING WITH PREDEFINED NUMBERS)
// AVOID USING ENUMS -> JUST GOOGLE FOR IT
// enum Role {
//     Admin,
//     User,
//     Employee,
//     Student
// }

const role = {
    Admin: "Admin",
    User: "User",
    Employee: "Employee",
    Student: "Student"
} as const;
type Role = typeof role[keyof typeof role];
function assignRole(role: Role) {
    return role;
}

interface Employee extends Person {
    role: Role
}
const employee: Employee = {
  role: assignRole(role.Employee),
};


// 6. TYPE ALIASES
type Username = string;
const username: Username = "smith";

// 7. UNION AND INTERSECTION
const placeholder: string | number = "string or number"; // can't be both, should be one at the time
const student: Person & Employee = {
    name: "Roi Jasmin",
    role: assignRole(role.Student)
} // combine data from person and employee both

// 8. FUNCTIONS
// function testFunction(internal types): function refturn type {
//     // INTERNAL LOGICS
// }

function combineName(fname: string, lname: string): string {
    return `${fname} ${lname}`
}

// IF DO NOT RETURN ANY THING FROM FUNCTION
function printUserName(username: string): void {
    console.log(username)
}

function optionalParams(fname: string, lname: string, age?: number): void {
    // DO SOME BUSINESS LOGIC HERE
}

function restParams(fValue: number, sValue: number, ...restValues: number[]): void {
    // DO SOME BUSINESS LOGIC HERE
}

function namedParams({dividend, divisor}: { dividend: number; divisor: number }) {
    // DO SOME BUSINESS LOGIC HERE
}

// 9. TYPE CASTING
let someValue: unknown = "some basic data";
// (someValue as string).length // -> as keyword is used as to convert the type 
// (<string>someValue).length


// 10. CLASSES
abstract class Person {

    public isAlive: boolean;
    constructor(isAlive: boolean) {
        this.isAlive = isAlive;
    }

    abstract walk(): void;
    abstract talk(): void;

    eat() {
        console.log("Yes person always eat.");
    }
}
class Manager extends Person {
    public name: string;
    private _age: number;
    public isAlive: boolean;

    constructor(name: string, age: number, isAlive: boolean) {
        super(isAlive);
        this.isAlive = isAlive;
        this.name = name;
        this._age = age;
    }

    static workingFine() {
        console.log("Yes there is no disability.")
    }

    walk() {
        console.log(`${this.name} can walk.`)
    }
    talk() {
        console.log(`${this.name} can talk. and age is ${this._age}`)
    }
}

// CLASS WITH IMPLEMENTS
interface Printable {
    print(): void
    scan(paper: boolean): boolean
}
class Invoice implements Printable {

    // THIS CLASS WILL MAKE SURE TO IMPLEMENT AT LEAST ALL METHODS MENTIONED IN PRINTABLE INTERFACE 
    print() {
        console.log("Print is working")
    }
    scan(paper: boolean): boolean {
        return paper
    }

    // YOU CAN USE THIS EXTRA METHOD CAUSE WE HAVE ALREADY PRINT() AND SCAN()
    copy() {
        console.log("data is copied")
    }
}
const invoice = new Invoice();


// 11. GENERIC TYPES
function identity<T>(arg: T): T {
    return arg
}
identity<string>("return string");
identity<number>(243);
identity<boolean>(true); // return boolean

// SINGLE FUNCTION WORKING WITH ANY DATA
interface apiResponse<T> {
    success: boolean
    message: string
    data: T   // this T could be anything
}
function returnEveryDataToSingleResponse<T>(payload: T, msg: string): apiResponse<T> {
    return {
        success: true,
        message: msg,
        data: payload
    }
}
interface Product {
    id: number
    title: string
    price: number
    inStock: boolean
}
const product: Product = {
    id: 283434763734,
    title: "A pair of swede shoes",
    price: 99.9,
    inStock: true,
}
interface Order {
    id: number,
    items: number,
    address: string,
    userEmail: string,
    totalAmount: number,
    deliveryDate: Date
}
const order: Order = {
    id: 87348734734,
    items: 2,
    address: "Near the street outside the town.",
    userEmail: "jasmin@gmail.com",
    totalAmount: 783.99,
    deliveryDate: new Date()
}

const fetchProduct = returnEveryDataToSingleResponse<Product>(product, "Product date fetched..");
const fetchOrder = returnEveryDataToSingleResponse<Order>(order, "Order date fetched..");
// console.log(fetchProduct, fetchOrder);


// PARTIAL TYPE -> CONVERT ALL TYPES TO OPTIONAL
interface PartialList {
    name: string    // mandatory
    age: number     // mandatory
    balance?: number
}
let partial: Partial<PartialList> = {
    balance: 45844
}; // now name could be empty
// COVERT ALL TYPES TO REQUIRED
let required: Required<PartialList> = {
    name: "Rohan Manthra",
    age: 33,
    balance: 1521
}

// RECORD IS USED TO DEFINE KEY, VLAUE FOR AN OBJECT
const nameAgeCompare: Record<string, number> = {
    "Grimson": 33,
    "Smith": 42,
    "Joshi": 25,
}

// OMIT IS USED TO REMOVE SPECIFIC KEYS FROM AN OBJECT
const productItem: Omit<Product, "price" | "id"> = {
    // you can't access price and id
    title: "Some product",
    inStock: false
}

// PICK IS USED TO GET SOME KEY VALUE PAIRS
const selectedProps: Pick<Product, "title"> = {
    title: "Some title"
    // you can only access the title
}

// EXCLUDE IS USED TO REMOVE TYPES FROM UNION
type Premitive = string | number | boolean;
const onlyStringNumber: Exclude<Premitive, string> = true; // will not accept a string

// RETURNTYPE IS USED TO RETURN FUNCTION TYPES
type TypeGenerator = () => {x: number, y: boolean, z: string};
const point: ReturnType<TypeGenerator> = {
    x: 234,
    y: false,
    z: "something"
}

// PARAMETERS EXTRACT THE PARAMETER TYPES OF A FUNCTION
type PointPrinter = (p: { x: number; y: number }) => void;
const pointSecond: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20,
};


// READONLY PARAMETER WILL CONVERT THE VALUES TO READONLY
const readOnlyItems: Readonly<Product> = {
    id: 8763463434,
    title: "Some title",
    price: 38473,
    inStock: false
};
// readOnlyItems.title = "something new"


type method = "GET" | "POST" | "PUT" | "PATCH" 
 
async function apiReqeust<TResponse, TBody = undefined>(
    url: string, 
    method: method = "GET", 
    body?: TBody
): Promise<TResponse> {
    const options: RequestInit = {
        method,
        headers: {"Content-Type": "application/json"},
        ...(body ? {body: JSON.stringify(body)}: {})
    }
    const response = await fetch(url, options);
    if(!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Api error: something went wrong.')
    }
    const result: TResponse = await response.json();
    return result;
}

interface ApiResponse<T> {
    success: boolean
    message: string
    data: T
}
interface Product {
    id: number
    title: string;
    price: number;
}
interface CreateProduct {
    title: string
    price: number
}


async function createNewProduct(product: CreateProduct) {
    try {
        const response = await apiReqeust<ApiResponse<Product>, CreateProduct>(
          "https://dummyjson.com/products/add",
          "POST",
          product
        );
        return response
    } catch(error) {
        const message = getErrorMessage(error);
        throw new Error(message || "Something went wrong");
    }
}

function getErrorMessage(error: any): string {
    if(error instanceof Error) {
        return error.message
    }
    if(typeof error === "string") {
        return error
    }
    return "An unknown error occured";
}

// EASY TO UNDERSTAN THIS FEATURE
// function functionName<PlaceholderType>(
//   RealParameter: DataType,
// ): ReturnType<PlaceholderType> {
//   // code
// }

// // CalL:
// functionName<RealType>("Real Value");
