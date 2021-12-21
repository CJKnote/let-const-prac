/**
 * ES5 Global Constans
 * var PI = 3.14;
 * PI = 42 //stop me from doing this!
 */

//Creating a version that follows current standards

const PI = 3.14;
//PI = 42; //gives us an error

/**
 * QUIZ:
 * 
 * 1.  The difference between var and let is that var can be redeclared,
 *  where let cannot be redeclared. They can both be reassigned.
 *  let has a block-scope, but var is scoped to where it is defined.
 * 
 * 2. The difference between var and const is that var can be redeclared and reassigned.
 *  whereas const cannot be redeclared nor reassigned. Like let, const has a block-scope.
 * 
 * 3. The difference between let and const is that let can be reassigned a value but const cannot. 
 *  Neither can be redeclared, and they have the same scope. 
 * 
 * 4. Hoisting is when the initalization of variables occurs before the rest of the code is compiled.
 * This means we can get some strange behavior when using var (which is effected by hoisting) because you 
 * access the variable name before it is assigned a value. 
 */