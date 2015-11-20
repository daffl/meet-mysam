title: Meet Mysam
output: index.html
theme: theme
controls: false
logo: theme/logo.png

-- how

# How?

-- code-large

## HTML5 can hear you!

```javascript
// Only works in recent Webkit Browsers like
// Mobile Android, Chrome, Chromium
var recognition = new webkitSpeechRecognition();
recognition.onresult = function(event) {
  console.log(event)
}
recognition.start();
```

#### Try it at [jsbin.com/sivuri](http://jsbin.com/sivuri)

--

## Machine learning (AI)

> Label each dataset.

> Then turn it into a fixed length list of numbers between 0 and 1.

```javascript
var net = new brain.NeuralNetwork();

// [ R, G, B ]
net.train([
  { input: [ 0.03, 0.7, 0.5 ], output: { black: 1 } },
  { input: [ 0.16, 0.09, 0.2 ], output: { white: 1 } },
  { input: [ 0.5, 0.5, 1.0 ], output: { white: 1 }
});

var output = net.run([1, 0.4, 0 ]);  // { white: 0.99, black: 0.002 }
```

--

# Natural Language Processing (NLP)

-- code-large

## \#1 Tokenize

```javascript
tokenize('What is the meaning of life')
// -> [ 'What', 'is', 'the', 'meaning', 'of', 'life' ]
tokenize('What is the weather like today')
// -> [ 'What', 'is', 'the', 'weather', 'like', 'today' ]
```

-- code-large

## \#2 Stem

```javascript
stem([ 'What', 'is', 'the', 'meaning', 'of', 'life' ])
// -> ['what', 'mean', 'life']
stem([ 'What', 'is', 'the', 'weather', 'like', 'today' ])
// -> [ 'what', 'weather', 'todai' ]

join(['what', 'mean', 'life'], [ 'what', 'weather', 'todai' ])
// -> [ 'what', 'mean', 'life', 'weather', 'todai' ]
```

-- code-large

## \#3 Featurize


```javascript
// [ 'what', 'mean', 'life', 'weather', 'todai' ]
features([ 'what', 'weather', 'todai' ])
// -> [ 1, 0, 0, 1, 1 ]
features([ 'what', 'mean', 'life' ])
// -> [ 1, 1, 1, 0, 0 ]
```

-- code-large

## \#4 Train

```javascript
var net = new brain.NeuralNetwork();

// [ 'what', 'mean', 'life', 'weather', 'todai' ]
net.train([
  // [ 'what', 'weather', 'todai' ]
  { input: [ 1, 0, 0, 1, 1 ], output: { sunshine: 1 } },
  // [ 'what', 'mean', 'life' ]
  { input: [ 1, 1, 1, 0, 0 ], output: { fourtytwo: 1 } }
]);
```

-- code-large

## \#5 Classify

```javascript
tokenizeAndStem('Can you tell me about the weather today please')
// -> [ 'can', 'tell', 'weather', 'todai', 'pleas' ]
features([ 'can', 'tell', 'weather', 'todai', 'pleas' ])
// [ 'what', 'mean', 'life', 'weather', 'todai' ]
// -> [ 0, 0, 0, 1, 1 ]
net.run([ 0, 0, 0, 1, 1 ]);
// -> { sunshine: 0.9326151115201983, fourtytwo: 0.06951084324415624 }
```

--

## And more...

<h3 style="text-align: center">Learn about it on Medium <a href="https://medium.com/@daffl/html5-nodejs-and-neural-networks-the-tech-behind-mysam-an-open-source-siri-6cc27992098b#.c1hi4mwzs">@daffl</a></h3>

<div style="text-align: center;">
  <a href="http://feathersjs.com" target="_blank"><img alt="Feather" src="img/feathers-logo.png" style="max-width: 100%; margin: 40px 0;"></a>
  <a href="http://donejs.com" target="blank"><img alt="DoneJS" src="img/donejs-logo-ie.png" style="max-width: 100%; margin: 40px 0;"></a>
</div>

--

# Why?

--

## MySam is an experiment

- Can we make Machine Learning more accessible?
- How will we relate to technology that learns?
- What is its User Experience?
- What does it mean when data becomes the technology?

-- presenter

![David Luecke](http://gravatar.com/avatar/a14850281f19396480bdba4aab2d52ef?s=200)

## David Luecke

* [<i class="fa fa-github"></i> daffl](https://github.com/daffl)
* [<i class="fa fa-twitter"></i> @daffl](http://twitter.com/daffl)

[daffl.github.io/meet-mysam](http://daffl.github.io/meet-mysam)
