const person = {
  nameL: "kebi",
  age: 30,
  frends: {
    // girlFriend: {
    //   name: "hanmeimei",
    // },
  },
};

// console.log(person.frends.girlFriend.name);

//之前的做法
if (person && person.frends && person.frends.girlFriend) {
  console.log(person.frends.girlFriend.name);
}

//ES11新增的语法
console.log(person?.frends?.girlFriend?.name);
