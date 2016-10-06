import computed from 'ember-computed';

export default function deepGather(...dependentKeys) {
  const computedFunc = computed({
    get() {

    }
  });

  return computedFunc.property.apply(computedFunc, dependentKeys);
}
