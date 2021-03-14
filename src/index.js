import './sass/main.scss';

console.log('Webpack powered static site');
const foo = {};
foo.a = 42;
foo.b = ['hi'];
foo.d = 'var';

const { a } = foo;
console.log(a);
