Vue.component('blog-slot-post', {
    template: '<p>この人の名前は<slot></slot>です。</p>'
  })
  
Vue.component('blog-slot-info', {
    template: `
                <ul>
                  <li>名前：<slot>名無しの権兵衛</slot></li>
                  <li>年齢：<slot name="age">記入なし</slot></li>
                  <li>性別：<slot name="sex">不明</slot></li>
                </ul>
                `
  })
  
Vue.component('blog-slot-user', {
    data() {
    return{
      user:{
        firstName: 'John',
        lastName: 'Doe',
        age: '25',
        sex: '男性',
      },
    }
  },
    template: `
                <span>
                  User Last Name is <slot>{{ user.lastName }}.</slot>
                </span>
                `
  })
  
new Vue({
    el: '#slot-demo'
  })