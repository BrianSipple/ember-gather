import { get, computed } from '@ember/object';
import { isArray, A } from '@ember/array';

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
