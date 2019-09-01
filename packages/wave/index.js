import Wave from './index.vue';

/* istanbul ignore next */
Wave.install = function(Vue) {
  Vue.component(Wave.name, Wave);
};

export default Wave;
