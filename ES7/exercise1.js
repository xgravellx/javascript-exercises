const user = { id: 10, name: "hazal" };
const friends = [
  { id: 11, name: "niran" },
  { id: 12, name: "bahadir" },
];

const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
    }, 500);
  });
};

const getFriend = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(friends);
    }, 1000);
  });
};

// promise chain
getUser()
    .then((user) => getFriend(user.id))
    .then((friends) => {
        console.log(friends)
    })

// Async Await
const asyncFunc = async () => {
    // getUser işlemi bitmeden alttaki getFriends işlemine geçmez.
    const user = await getUser();
    const friend = await getFriend(user.id);
    console.log(user);
}
