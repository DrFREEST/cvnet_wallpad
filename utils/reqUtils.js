
exports.isEmpty = function (val) {
	return typeof val == 'string' && !val.trim() || typeof val === 'undefined' || val === null || val === 'undefined';
};
