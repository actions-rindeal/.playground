function getInput(name) {
  const key = `INPUT_${name.replace(/ /g, '_').toUpperCase()}`;
  return process.env[key] || '';
}

const fooBar = getInput('foo-bar');
const FOO_BAR = getInput('FOO-BAR');
const foo_bar = getInput('foo_bar');
const Foo_Bar = getInput('Foo-Bar');

console.log(`foo-bar: ${fooBar}`);
console.log(`FOO-BAR: ${FOO_BAR}`);
console.log(`foo_bar: ${foo_bar}`);
console.log(`Foo-Bar: ${Foo_Bar}`);
