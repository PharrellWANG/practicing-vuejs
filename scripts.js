var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      {text: '学习 JavaScript'},
      {text: '学习 Vue'},
      {text: '整个牛项目'}
    ]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});


// -------- 以下是组建例子 --------
// 注意！component要和new Vue一起用才有用！

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-6',
  data: {
    groceryList: [
      {id: 0, text: '蔬菜'},
      {id: 1, text: '奶酪'},
      {id: 2, text: '随便其它什么人吃的东西'}
    ]
  }
});

// 注意！component要和new Vue一起用才有用！
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

new Vue({el: '#components-demo'});

// 注意！component要和new Vue一起用才有用！
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
});
new Vue({el: '#blog-post-title-only'});

// 注意！component要和new Vue一起用才有用！此处component用的是上面的。
new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      {id: 1, title: 'My journey with Vue'},
      {id: 2, title: 'Blogging with Vue'},
      {id: 3, title: 'Why Vue is so fun'},
    ],
  }
});


// 注意！component要和new Vue一起用才有用！
Vue.component('blog-post-2', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text')">
          Enlarge text
        </button>
      <div v-html="post.content"></div>
    </div>
  `
});
new Vue({
  el: '#blog-posts-demo-changing-fontsize',
  data: {
    posts: [
      {id: 1, title: 'My journey with Vue'},
      {id: 2, title: 'Blogging with Vue'},
      {id: 3, title: 'Why Vue is so fun'},
    ],
    postFontSize: 1,
  }
});
