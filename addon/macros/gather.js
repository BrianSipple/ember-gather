import computed from 'ember-computed';
import get from 'ember-metal/get';
import { A, isEmberArray as isArray } from 'ember-array/utils';

export default function gather(...dependentKeys) {
  const computedFunc = computed({
    get() {
      return A(
        dependentKeys.reduce((accumulatedList, currentKey) => {
          const value = get(this, currentKey);

          return isArray(value) ? [...accumulatedList, ...value] : [...accumulatedList, value];
        }, [])
      );
    }
  });

  return computedFunc.property.apply(computedFunc, dependentKeys);
}
