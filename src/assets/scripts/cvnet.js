import Vue from 'vue'
// // import vuetify from './plugins/vuetify'

Vue.directive('inputStatus', function (el, binding) {
	console.log(el, binding)
	var targetLabel = el.getElementsByTagName('label');
	var targetInput = el.getElementsByTagName('input');
	// console.log(ParentObj)
	console.log(targetLabel)
	if (status == 'focus') {
		targetLabel['label'] = targetLabel['data-focus-label']
	}
	else if (status == 'blur') {

	}
	else if (status == 'change') {

	}
	else if (status == 'focus') {

	}
})

// Vue.directive('focus', function () {
// 	console.log('focus');
// })
function textFieldChangeLabel() {
	console.log();
}
export default {
}