const normalRejected = (err) => {
  throw err;
};

try {
  normalRejected('hhhhh');
} catch (error) {
  console.log('-------' + error);
}
