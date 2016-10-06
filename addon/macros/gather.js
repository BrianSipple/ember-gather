import computed from 'ember-computed';

export default function gather(...dependentKeys) {
  const computedFunc = computed({
    get() {

    }
  });

  return computedFunc.property.apply(computedFunc, dependentKeys);
}
