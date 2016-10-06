# ember-gather

_A handy pair of macros for computing flattened arrays._

[![Latest NPM release][npm-badge]][npm-badge-url]
[![CircleCI Build Status][circle-badge]][circle-badge-url]
[![Code Climate][codeclimate-badge]][codeclimate-badge-url]
[![Ember Observer Score][ember-observer-badge]][ember-observer-badge-url]
[![Dependencies][dependencies-badge]][dependencies-badge-url]
[![Dev Dependencies][devDependencies-badge]][devDependencies-badge-url]
[![License][license-badge]][license-badge-url]

## Usage

Use `gather` when you just need to gather the **top-level value of each property** into a list:

```js
import { gather } from 'ember-gather';
import Component from 'ember-component';

export default Component.extend({
  terrestrials: ['Mercury', 'Venus', 'Earth', 'Mars'],
  gasGiants: ['Jupiter', 'Saturn', 'Neptune', 'Uranus'],

  planets: gather('terrestrials', 'gasGiants')  // => ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Neptune', 'Uranus']
});

```

Use `deepGather` when you need to gather **all items within all values of value of each property** into a list:

```js
import { deepGather } from 'ember-gather';
import Component from 'ember-component';

const planets = [
  ['Mercury', 'Venus', 'Earth', 'Mars'],
  ['Jupiter', 'Saturn', 'Neptune', 'Uranus']
];

const dwarfPlanets = ['Pluto', 'Ceres', 'Eris', 'Haumes', 'MakeMake'];

export default Component.extend({
  planets,
  dwarfPlanets,

  planetaryBodies: deepGather('planets', 'dwarfPlanets') // => ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Neptune', 'Uranus', 'Pluto', 'Ceres', 'Eris', 'Haumes', 'MakeMake']
});

```

## Developing

* `git clone <repository-url>` this repository
* `cd ember-gather`
* `npm install`
* `bower install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).



[npm-badge]: https://img.shields.io/npm/v/ember-gather.svg
[npm-badge-url]: https://www.npmjs.com/package/ember-gather
[circle-badge]: https://circleci.com/gh/BrianSipple/ember-gather/tree/master.svg?style=svg&circle-token=:circle-token
[circle-badge-url]: https://circleci.com/gh/BrianSipple/ember-gather/tree/master
[coveralls-badge]: https://coveralls.io/repos/github/BrianSipple/ember-gather/badge.svg?branch=master
[coveralls-badge-url]: https://coveralls.io/github/BrianSipple/ember-gather?branch=master
[codeclimate-badge]: https://img.shields.io/codeclimate/github/BrianSipple/ember-gather.svg
[codeclimate-badge-url]: https://codeclimate.com/github/BrianSipple/ember-gather
[ember-observer-badge]: http://emberobserver.com/badges/ember-gather.svg
[ember-observer-badge-url]: http://emberobserver.com/addons/ember-gather
[license-badge]: https://img.shields.io/npm/l/ember-gather.svg
[license-badge-url]: LICENSE
[dependencies-badge]: https://img.shields.io/david/BrianSipple/ember-gather.svg
[dependencies-badge-url]: https://david-dm.org/BrianSipple/ember-gather
[devDependencies-badge]: https://img.shields.io/david/dev/BrianSipple/ember-gather.svg
[devDependencies-badge-url]: https://david-dm.org/BrianSipple/ember-gather#info=devDependencies
