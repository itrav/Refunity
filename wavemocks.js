/*
* Some mock objects for Google Wave API
*
* The MIT License
*
* Copyright (c) 2011 Ivan Travkin <iwannt@gmail.com>
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

(function (window) {

	// some constants:
	var userName = 'User Name';

	window.gadgets = {};
	gadgets.util = { registerOnLoadHandler: function (aFunction) { window.onload = aFunction; } };

	window.wave = {
		getState: function () { return window.state; },
		stateCallback: function () {},
		setStateCallback: function (aFunction) { this.stateCallback = aFunction; aFunction(); },
		isInWaveContainer: function () { return true; },
		getViewer: function () {
			return { getDisplayName: function() { return userName; } };
		}
	};

	window.state = {
		get: function ( aKey ) { return this[aKey]; },
		submitDelta: function ( delta ) { for (ea in delta) this[ea] = delta[ea]; wave.stateCallback(); }
	};
	
}) (window);