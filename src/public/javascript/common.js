/*
 * @(#)common.js 1.0 2020/02/02
 * 
 * COPYRIGHT (C) 2020 DFLUX C&C, INC.
 * ALL RIGHTS RESERVED.
 */

/**
 * 공통 컨트롤을 처리하는 스크립트.
 * 
 * message.js (jprops) 필수로딩
 * 
 * 
 * jcommon
 * jutils
 * jlogic
 * jmessager
 *  
 *
 * @author 김성훈
 * @version 1.0 2020/02/02
 */

var _common = {};
var _utils = {};


//빈값체크
_utils.empty = function (val) {
	if (typeof val == "array") {
		if (val.length > 0)
			return false;
		return true;
	}
	if (!val)
		return true;
	if (val == null)
		return true;
	if (val == 'undefined')
		return true;
	if (val == '')
		return true;

	return false;
};