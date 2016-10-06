import computed from 'ember-computed';
import get from 'ember-metal/get';
import { A, isEmberArray as isArray } from 'ember-array/utils';

export default function deepGather(...dependentKeys) {

  function flatten(input) {
    return input.reduce((acc, currentItem) => {
      return isArray(currentItem) ? [...acc, ...flatten(currentItem)] : [...acc, currentItem];
    }, []);
  }

  const computedFunc = computed({
    get() {
      return A(
        dependentKeys.reduce((accumulatedList, currentKey) => {
          const value = get(this, currentKey);

          return [...accumulatedList, ...flatten(value)];
        }, [])
      );
    }
  });

  return computedFunc.property.apply(computedFunc, dependentKeys);
}
