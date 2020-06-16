
function func() {
  return {
    success: true,
    object: [
      {id: 1, name: 'jimao'},
      {id: 2, name: 'xss'},
    ],
    message: '',
  };
}

const item = (false as true) && func();
type type1 = typeof item.object[1000];
const kk = (false as true) && ({} as type1).name;
type type2 = typeof kk;
const a: type2 = '123455678';

console.log(a.slice(0, 4));
