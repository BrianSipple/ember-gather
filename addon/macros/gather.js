import { get, computed } from '@ember/object';
import { isArray, A } from '@ember/array';

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
