const toArray = obj => {
    let array = [];
    for (const [key, value] of Object.entries(obj)) {
        array.push([key, value]);
      }
    return array;
}

console.log(toArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  }));