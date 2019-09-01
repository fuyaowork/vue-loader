import book from '../packages/book/index.js';
import wave from '../packages/wave/index.js';
import tree from '../packages/tree/index.js';

const components = [
    book,
    wave,
    tree
]

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    book,
    wave
}