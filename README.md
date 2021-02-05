# vue3-study
vue3-study

#### vue2与vue3生命周期对比
* beforeCreate -> 使用setup()
* created -> 使用setup()
* beforeMount -> onBeforeMount
* mounted -> onMounted
* beforeUpdate -> onBeforeUpdate
* updated -> onUpdated
* beforeDestroy -> onBeforeUnmount
* destroyed -> onUnmounted
* errorcaptured -> onErrorCaptured



#### $nextTick
视图渲染后要执行的回调函数；
#### Teleport
Vue3.x中的组件模板属于该组件，有时候我们想把模板的内容移动到当前组件之外的DOM中，这个时候就可以使用Teleport。

```
<!--表示teleport内包含的内容显示到body中-->
<teleport to="body">
  内容
</teleport>
```
#### Composition API的简单介绍

Composition APl也叫组合式API，是Vue3.x的新特性。通过创建Vue组件，我们可以将接口的可重复部分及其功能提取到可重用的代码段中。仅此一项就可以使我们的应用程序在可维护性和灵活性方面走得更远。然而，我们的经验已经证明，光靠这一点可能是不够的，尤其是当你的应用程序变得非常大的时候—―想想几百个组件。在处理如此大的应用程序时，共享和重用代码变得尤为重要。通俗的讲：

没有Composition APl之前vue相关业务的代码需要配置到option的特定的区域，中小型项目是没有问题的，但是在大型项目中会导致后期的维护性比较复杂，同时代码可复用性不高。Vue3.x中的composition-api就是为了解决这个问题而生的。

compositon-api提供了以下几个函数;
* setup
* ref
* reactive
* watchEffect
* watch
* computed
* toRefs
* 生命周期的hooks

#### setup
1、setup函数是处于生命周期函数 beforeCreate 和 Created 两个钩子函数之间的函数，也就说在setup函数中是无法使用 data 和 methods 中的数据和方法的。

2、setup函数是 Composition API（组合API）的入口。

3、在setup函数中定义的变量和方法最后都是需要 return 出去的，不然无法再模板中使用。
#### provide/inject
简单来说就是在父组件 provide 中提供变量，子组件 inject 中来注入，然后可以在子组件内部使用 provide 的变量，需要注意的是这里不论子组件有多深，只要调用了inject那么就可以注入provider中的数据。而不是局限于只能从当前父组件的prop属性来获取数据。
两种用法，可以在非组合式api中使用，也可以在组合式api（compositon-api）中使用。

**注意：在非组合式api中运用，父组件中的值被改变了，子组件中的值，并不会到得到响应式改变，这种情况一般只适用于组件的传值，所以，这种情况用到的很少，provide/inject一般更多的结合在compositon-api中使用，在compositon-api中使用，父组件的值改变了，子组件的值会得到响应式改变。**

#### Vue3.x集成typescript
##### 首先、vue-cli需要安装或者更新到3.x版本
```
// 电脑如果有装旧版本，需要先卸载旧版本
npm uninstall vue-cli -g
// 清除缓存
npm cache clean --force
// 安装
npm install -g @vue/cli
// 查看是否安装成功
vue -V
```
##### 创建项目
```
// 名称自己定
vue create vue3-demo 
```
接下来一步步选择即可，如果选择的是第二个选项（Default <Vue 3 Preuiew>< [Vue 3] babel, eslint>）

默认是没有typescript的，当然接下来可以通过命令
```
vue add typescript
```
来添加typescript，如果选择的是Manually select feature手动，则一步步选择所需要的依赖即可。
配置选项：
* TypeScript：支持使用 TypeScript 书写源码
* Progressive Web App (PWA) Support PWA 支持。
* Router：支持 vue-router 。
* Vuex：支持 vuex 。
* CSS Pre-processors：支持 CSS 预处理器。
* Linter / Formatter：支持代码风格检查和格式化。
* Unit Testing：支持单元测试。
* E2E Testing：支持 E2E 测试。
