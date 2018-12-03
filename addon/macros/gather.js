const { computed, get, A, isArray } = Ember;

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
