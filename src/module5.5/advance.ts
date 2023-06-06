// properties
interface Model<TData, TMethod> {
  data: TData;
  methods: TMethod;
}
interface IUser {
  firstName: string;
  lastName: string;
}

// method interface
interface IMethod {
  fullName(): string;
}

type model = Model<IUser, IMethod>;

class User implements model {
  data: IUser;
  methods: IMethod;

  constructor(firstName: string, lastName: string) {
    this.data = { firstName, lastName };
    this.methods = {
      fullName: () => `${firstName} ${lastName}`,
    };
  }
}

const user1 = new User("Arifuzzaman", "Arif");
console.log(user1.methods.fullName);
