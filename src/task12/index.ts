function DeprecatedMethod(reason: string, newMethod?: string) {
  return function <T, A extends any[], R>(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (this: T, ...args: A): R {
      console.log(`Method is deprecated in reason of ${reason}${newMethod ? ', use ' + newMethod : ''}`);
      return originalMethod.apply(this, args);
    };
  };
}

function MinLength(min: number) {
  return function (target: any, key: string) {
    let value = target[key];

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (newVal.length < min) {
        console.log(`${key}  length under limit (${min}) `);
      } else {
        value = newVal;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true,
    });
  };
}

function MaxLength(max: number) {
  return function (target: any, key: string) {
    let value = target[key];

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (newVal.length > max) {
        console.log(`${key} length over limit (${max}) `);
      } else {
        value = newVal;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true,
    });
  };
}

function Email(target: any, key: string) {
  let value = target[key];

  const getter = function () {
    return value;
  };

  const setter = function (newVal: string) {
    if (newVal.indexOf('@') === -1) {
      console.log(`email with wrong pattern: ${key}`);
    } else {
      value = newVal;
    }
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

class User {
  @MinLength(2)
  @MaxLength(10)
  name: string;

  @Email
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  setName(name: string) {
    this.name = name;
  }

  @DeprecatedMethod('old version', 'inputEmail')
  setEmail(value: string): void {
    this.email = value;
  }

  inputEmail(value: string): void {
    this.email = value;
  }
}

const user = new User('kate', 'kate.gmail@.com');
user.setName('agsdfsdfsdfsdf');
user.inputEmail('sdfsfgdfgdfgdf');
user.inputEmail('alex.gmail.com');
user.setEmail(' ');
