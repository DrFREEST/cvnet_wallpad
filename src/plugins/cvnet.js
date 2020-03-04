import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default {
	methods: {
		textFieldChangeLabel: function (target, status) {
			var targetInput = event.target;
			var targetParent = event.target.parentNode;
			console.log(targetParent.className);
			if (
				targetParent.className == "v-select__slot" ||
				targetParent.className == "v-select__selections"
			) {
				if (targetParent.className == "v-select__selections") {
					console.log("select");
					var targetLabel = targetParent.parentNode.getElementsByTagName(
						"label"
					)[0];
				} else {
					var targetLabel = event.target.parentNode.getElementsByTagName(
						"label"
					)[0];
				}
			} else {
				var targetLabel = event.target.parentNode.getElementsByTagName(
					"label"
				)[0];
			}

			if (event.type == "focus") {
				targetLabel.innerHTML = targetInput.getAttribute("data-focus-label");
			} else if (event.type == "blur") {
				targetLabel.innerHTML = targetInput.getAttribute("data-blur-label");
			}
		}
	},
}

// export default new cvnet(opts)