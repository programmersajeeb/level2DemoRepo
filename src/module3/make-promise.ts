// // const makePromise = (): Promise<string> => {
// //     return new Promise<string>((resolved, reject) => {
// //         const data = 'data resolved';
// //         if (data) {
// //             resolved(data)
// //         } else {
// //             reject("can't find the data")
// //         }
// //     })
// // }

// // const getStringPromise = async (): Promise<string> => {
// //     const data = await makePromise();
// //     return data;
// // };

// // const makePromiseBoolean = (): Promise<boolean> => {
// //     return new Promise((resolve, reject) => {
// //         const data: boolean = true;
// //         if (data) {
// //             resolve(data);
// //         } else {
// //             reject('data rejected');
// //         };
// //     })
// // }

// // const getBooleanPromise = async () => {
// //     const daa = await makePromiseBoolean();
// //     return daa;
// // }

// type DataType = {
//     data: string
// };
// const makeObjectPromise = (): Promise<DataType> => {
//     return new Promise<DataType>((resolve, reject) => {
//         const data: DataType = { data: 'data founded' };
//         if (data) {
//             resolve(data);
//         } else {
//             reject('data not found')
//         };
//     });
// };

// const getObjectPromise = async () => {
//     const data = await makeObjectPromise();
//     return data;
// };
/* 
const makePromise = () => {
  return new Promise((resolve, reject) => {
    const data = "helo bangladesh";
    if (data) {
      resolve(data);
    } else {
      reject("sorry no data found");
    }
  });
}; */

/* // promise with string 
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "data is found";
    if (data) {
      resolve(data);
    } else {
      reject("data is not found");
    }
  });
};

const result = async (): Promise<string> => {
  const total: string = await makePromise();
  return total;
};
 */

// promise with boolean
const makeBooleanPromise = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = false;
    if (data) {
      resolve(data);
    } else {
      reject("data vuya");
    }
  });
};

const getBooleanPromise = async (): Promise<boolean> => {
  const getBoolean = await makeBooleanPromise();
  return getBoolean;
};

// promise with objec
// type userObj ={
//   name: string;
//   age: number;
// }
// const getObjectPromisee = (): Promise<userObj> => {
//   return new Promise<userObj>((resolve, reject) => {
//     const datga: userObj = { name: "arif", age: 23 };
//     if (datga) {
//       resolve(datga);
//     } else {
//       reject("its not a valid object");
//     }
//   });
// };

// const getObjectPromise = async (): Promise<userObj> => {
//   const getdataobj = await getObjectPromisee;
//   return getdataobj;
// };

interface dataType {
  data: string;
}

const getObjectPromise = (): Promise<dataType> => {
  return new Promise<dataType>((resolve, reject) => {
    const data: dataType = { data: "demo data" };
    if (data) {
      resolve(data);
    } else {
      reject("data paoa jay nai");
    }
  });
};

const getObj = async (): Promise<dataType> => {
  const result = await getObjectPromise();
  return result;
};

interface ITodo {
  userId: 1;
  id: 1;
  title: "delectus aut autem";
  completed: false;
}

const todoData = async (): Promise<ITodo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await res.json();
};

const getTodo = async () => {
  const resslt = await todoData();
  console.log(resslt);
};
getTodo();
