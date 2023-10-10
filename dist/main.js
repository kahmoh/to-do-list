/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pages: () => (/* binding */ pages)
/* harmony export */ });
/* harmony import */ var _toDos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDos */ "./src/toDos.js");


const pages = {
    contentContainer: document.getElementById('content'),

    initialPageLoad: function () {
        this.contentContainer.appendChild(this.toDoPage().renderButton())
    },
    toDoPage: function (){
        const toDoForm = document.querySelector('#to-do-form')
        const toDoModal = document.getElementById('to-do-modal')
        const addFormListener = function () {
            toDoForm.addEventListener('submit', function (event) {
                event.preventDefault()
                _toDos__WEBPACK_IMPORTED_MODULE_0__.toDos.createToDo()
            })
        }
        const showModal = function () {
            toDoModal.show()
        }
        const addButtonListener = function (button,event) {
            button.addEventListener('click', () => {
                event()
            })
        }
        const renderButton = function () {
            const newToDoButton = document.createElement('button')
            newToDoButton.textContent = 'Add to do'
            addButtonListener(newToDoButton,showModal)
            return newToDoButton
        }
        addFormListener()
        return {
            renderButton,
            toDoForm
        }
    }
}



/***/ }),

/***/ "./src/toDos.js":
/*!**********************!*\
  !*** ./src/toDos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toDos: () => (/* binding */ toDos)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


const toDos = {
    toDoForm: document.getElementById('form'),
    toDo: (title, description, dueDate, priority, project, dataAttribute) => {
        return {title, description, dueDate, priority, project, dataAttribute}
    },
    getToDoData: function (form) {
        const toDoData = new FormData(form)
        const newToDo = this.toDo.from(toDoData)
        console.log(newToDo)

    },
    createToDo: function () {
        this.getToDoData()
    }
}



//user will start on the homepage and see an add to do button
//upon clicking the button a modal will pop up
//the modal will have inputs regarding the to do information
//there will be a button on the modal to create a new to do
//when the button is clicked the information in the modal inputs will be used to create a new to do object

//start on the homepage
//click add to do button
//click confirm button
//new object created

//homepage
//add to do button
//modal
//info inputs
//modal button
//new to do object

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _toDos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDos */ "./src/toDos.js");



_dom__WEBPACK_IMPORTED_MODULE_0__.pages.initialPageLoad()



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseUNBQUs7QUFDckIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckM0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3BDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QjtBQUNFOztBQUU5Qix1Q0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9Eb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0b0Rvc30gZnJvbSBcIi4vdG9Eb3NcIjtcblxuY29uc3QgcGFnZXMgPSB7XG4gICAgY29udGVudENvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSxcblxuICAgIGluaXRpYWxQYWdlTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50b0RvUGFnZSgpLnJlbmRlckJ1dHRvbigpKVxuICAgIH0sXG4gICAgdG9Eb1BhZ2U6IGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0by1kby1mb3JtJylcbiAgICAgICAgY29uc3QgdG9Eb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvLWRvLW1vZGFsJylcbiAgICAgICAgY29uc3QgYWRkRm9ybUxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdG9Eb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHRvRG9zLmNyZWF0ZVRvRG8oKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG93TW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0b0RvTW9kYWwuc2hvdygpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWRkQnV0dG9uTGlzdGVuZXIgPSBmdW5jdGlvbiAoYnV0dG9uLGV2ZW50KSB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZW5kZXJCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdUb0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIG5ld1RvRG9CdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIHRvIGRvJ1xuICAgICAgICAgICAgYWRkQnV0dG9uTGlzdGVuZXIobmV3VG9Eb0J1dHRvbixzaG93TW9kYWwpXG4gICAgICAgICAgICByZXR1cm4gbmV3VG9Eb0J1dHRvblxuICAgICAgICB9XG4gICAgICAgIGFkZEZvcm1MaXN0ZW5lcigpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZW5kZXJCdXR0b24sXG4gICAgICAgICAgICB0b0RvRm9ybVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge3BhZ2VzfSIsImltcG9ydCB7cGFnZXN9IGZyb20gXCIuL2RvbVwiO1xuXG5jb25zdCB0b0RvcyA9IHtcbiAgICB0b0RvRm9ybTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKSxcbiAgICB0b0RvOiAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgZGF0YUF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGRhdGFBdHRyaWJ1dGV9XG4gICAgfSxcbiAgICBnZXRUb0RvRGF0YTogZnVuY3Rpb24gKGZvcm0pIHtcbiAgICAgICAgY29uc3QgdG9Eb0RhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICAgICAgY29uc3QgbmV3VG9EbyA9IHRoaXMudG9Eby5mcm9tKHRvRG9EYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhuZXdUb0RvKVxuXG4gICAgfSxcbiAgICBjcmVhdGVUb0RvOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZ2V0VG9Eb0RhdGEoKVxuICAgIH1cbn1cblxuZXhwb3J0IHt0b0Rvc31cblxuLy91c2VyIHdpbGwgc3RhcnQgb24gdGhlIGhvbWVwYWdlIGFuZCBzZWUgYW4gYWRkIHRvIGRvIGJ1dHRvblxuLy91cG9uIGNsaWNraW5nIHRoZSBidXR0b24gYSBtb2RhbCB3aWxsIHBvcCB1cFxuLy90aGUgbW9kYWwgd2lsbCBoYXZlIGlucHV0cyByZWdhcmRpbmcgdGhlIHRvIGRvIGluZm9ybWF0aW9uXG4vL3RoZXJlIHdpbGwgYmUgYSBidXR0b24gb24gdGhlIG1vZGFsIHRvIGNyZWF0ZSBhIG5ldyB0byBkb1xuLy93aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZCB0aGUgaW5mb3JtYXRpb24gaW4gdGhlIG1vZGFsIGlucHV0cyB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmV3IHRvIGRvIG9iamVjdFxuXG4vL3N0YXJ0IG9uIHRoZSBob21lcGFnZVxuLy9jbGljayBhZGQgdG8gZG8gYnV0dG9uXG4vL2NsaWNrIGNvbmZpcm0gYnV0dG9uXG4vL25ldyBvYmplY3QgY3JlYXRlZFxuXG4vL2hvbWVwYWdlXG4vL2FkZCB0byBkbyBidXR0b25cbi8vbW9kYWxcbi8vaW5mbyBpbnB1dHNcbi8vbW9kYWwgYnV0dG9uXG4vL25ldyB0byBkbyBvYmplY3QiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7cGFnZXN9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHt0b0Rvc30gZnJvbSBcIi4vdG9Eb3NcIjtcblxucGFnZXMuaW5pdGlhbFBhZ2VMb2FkKClcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=