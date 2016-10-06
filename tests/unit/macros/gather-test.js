import { module, test } from 'qunit';
import { gather } from 'ember-gather';
import EmberObject from 'ember-object';
import get from 'ember-metal/get';

const TERRESTRIALS = ['Mercury', 'Venus', 'Earth', 'Mars'];
const GAS_GIANTS = ['Jupiter', 'Saturn', 'Neptune', 'Uranus'];
const DISCS = ['Asteroid Belt', 'Kuiper Belt', 'Oort Cloud'];
const DWARF_PLANETS = ['Pluto', 'Ceres', 'Eris', 'Haumes', 'MakeMake'];

const SolarSystem = EmberObject.extend({
  terrestrials: TERRESTRIALS,
  gasGiants: GAS_GIANTS,
  otherBodies: [DISCS, DWARF_PLANETS],

  planets: gather('terrestrials', 'gasGiants')
});

module('ember-gather -- gather');

test('gathering items from a set of arrays into one flat array', function (assert) {
  const solarSystem = SolarSystem.create();

  const expected = [...TERRESTRIALS, ...GAS_GIANTS];
  const actual = get(solarSystem, 'planets');
  const message = 'flattened array contains items in the order of the corresponding property keys passed';

  assert.deepEqual(actual, expected, message);
});
