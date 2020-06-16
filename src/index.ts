
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

interface b {
  age: number,
  sex: boolean,
}

interface a {
  name: string,
  meta: b,
}

const func1 = () => ({} as a).meta.age;
type type1 = ReturnType<typeof func1>;

const aa: type1 = 123;