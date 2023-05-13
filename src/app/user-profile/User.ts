export class User {
    public name: string;
    public firstName: string;
    public age: number;
    public quote: string;
    public imageSrc: string;
    constructor(
      name: string,
      firstName: string,
      age: number,
      quote: any,
      imageSrc: string
    ) {
      this.name = name;
      this.firstName = firstName;
      this.age = age;
      this.quote = quote;
      this.imageSrc = imageSrc;
    }
  }
  const user: User = new User(
    "Doe",
    "John",
    25,
    "Salut, et merci pour le poisson",
    "https://randomuser.me/api/portraits/lego/2.jpg"
  );
  // const user2 = new Person("Mary", 35);
  
  console.log(user);
  // console.log(user1.tellMyAge());
  
  // console.log(user2.tellMyName());
  // console.log(user2.tellMyAge());
  