import { module, test } from 'qunit';
import { deepGather } from 'ember-gather';
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

  components: deepGather('terrestrials', 'gasGiants', 'otherBodies'),
  planets: deepGather('terrestrials', 'gasGiants')
});

let actual, expected, message;

module('ember-gather -- deep gather');

test('deep-gathering items from a set of potentially nested arrays into one flat array', function (assert) {
  const solarSystem = SolarSystem.create();

  expected = [...TERRESTRIALS, ...GAS_GIANTS, ...DISCS, ...DWARF_PLANETS];
  actual = get(solarSystem, 'components');
  message = 'flattened array contains items in the order of the corresponding property keys passed';

  assert.deepEqual(actual, expected, message);

  expected = [...TERRESTRIALS, ...GAS_GIANTS];
  actual = get(solarSystem, 'planets');
  message = 'deepGather still works anyway on flat arrays';

  assert.deepEqual(actual, expected, message);
});
