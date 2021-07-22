<template>
	<div>{{a}}</div>
</template>

<script>
import { reactive, ref, toRef, toRefs  } from 'vue'
export default {
	/**
	 * vue3 中新的生命周期
	 * 在created 前被调用，没有this
	 * 值在模板中使用必须return
	 */
	setup(props) {
		// reactive 为对象添加响应式
		let a = reactive(1)
		// 优先使用ref，参数可以传递任意类型添加响应式

		// 为原响应式的对象添加新的属性，浅拷贝

		// 会自动结构复制，而不是一个个赋值
		return {
			a
		}
	}
}
</script>

<style>

</style>