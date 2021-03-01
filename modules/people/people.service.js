const Queue = require('../queue/Queue');
const { people } = require('../../store');

const PeopleQ = new Queue();

people.forEach(el => {
  PeopleQ.enqueue(el);
});

const fillerNames = ['Raylin', 'Gotti', 'Borksy', 'Cheesy', 'Netwie', 'Essie', 'Green', 'Pinny', 'Dame', 'Wednesday', 'May', 'Rainy', 'Sanfeo', 'Rascal', 'Peezy'];

const all = () => {
  let peopleList = PeopleQ.all();

  if (peopleList.length < 5) {
    PeopleQ.enqueue(
      fillerNames[Math.floor(Math.random() * fillerNames.length)]
    );
  }
  //console.log("PeopleQ", PeopleQ.all());
  return PeopleQ.all();
};

module.exports = {
  all,
  dequeue() { return PeopleQ.dequeue(); },
  enqueue(name) { PeopleQ.enqueue(name); }
};