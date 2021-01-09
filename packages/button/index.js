import SWButton from './src/button';

/* istanbul ignore next */
SWButton.install = function(Vue) {
  Vue.component(SWButton.name, SWButton);
};

export default SWButton;