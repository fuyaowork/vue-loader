import Book from './index.vue';

Book.install = function(Vue) {
  Vue.component(Book.name, Book);
};

export default Book;
