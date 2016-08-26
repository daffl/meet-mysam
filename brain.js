const brain = require('brain.js');
const net = new brain.NeuralNetwork();

// [ R, G, B ]
net.train([
  { input: [ 0.03, 0.7, 0.5 ], output: { black: 1 } },
  { input: [ 0.16, 0.09, 0.2 ], output: { white: 1 } },
  { input: [ 0.5, 0.5, 1.0 ], output: { white: 1 } }
]);

const output = net.run([1, 0.4, 0 ]);  // { white: 0.99, black: 0.002 }

console.log(output);
