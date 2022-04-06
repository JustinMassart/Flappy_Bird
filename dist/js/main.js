/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/background.ts":
/*!******************************!*\
  !*** ./src/js/background.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nvar background = {\n  frame: {\n    sx: 0,\n    sy: 0,\n    sw: 0,\n    sh: 0,\n    dx: 0,\n    dy: 0,\n    dw: 0,\n    dh: 0\n  },\n  init: function init(game) {\n    this.game = game;\n    this.frame.dw = this.game.canvas.width;\n    this.frame.dh = this.game.canvas.height;\n    this.frame.sw = this.game.canvas.width;\n    this.frame.sh = this.game.canvas.height;\n  },\n  update: function update() {\n    this.game.renderSpriteFrame(this.frame);\n  }\n};\nexports[\"default\"] = background;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYmFja2dyb3VuZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNQSxVQUFVLEdBQUc7QUFDZkMsT0FBSyxFQUFFO0FBQ0hDLE1BQUUsRUFBRSxDQUREO0FBRUhDLE1BQUUsRUFBRSxDQUZEO0FBR0hDLE1BQUUsRUFBRSxDQUhEO0FBSUhDLE1BQUUsRUFBRSxDQUpEO0FBS0hDLE1BQUUsRUFBRSxDQUxEO0FBTUhDLE1BQUUsRUFBRSxDQU5EO0FBT0hDLE1BQUUsRUFBRSxDQVBEO0FBUUhDLE1BQUUsRUFBRTtBQVJELEdBRFE7QUFXZkMsTUFBSSxFQUFKLGNBQUtDLElBQUwsRUFBYztBQUNWLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtWLEtBQUwsQ0FBV08sRUFBWCxHQUFnQixLQUFLRyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLEtBQWpDO0FBQ0EsU0FBS1osS0FBTCxDQUFXUSxFQUFYLEdBQWdCLEtBQUtFLElBQUwsQ0FBVUMsTUFBVixDQUFpQkUsTUFBakM7QUFDQSxTQUFLYixLQUFMLENBQVdHLEVBQVgsR0FBZ0IsS0FBS08sSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxLQUFqQztBQUNBLFNBQUtaLEtBQUwsQ0FBV0ksRUFBWCxHQUFnQixLQUFLTSxJQUFMLENBQVVDLE1BQVYsQ0FBaUJFLE1BQWpDO0FBQ0gsR0FqQmM7QUFrQmZDLFFBQU07QUFDRixTQUFLSixJQUFMLENBQVVLLGlCQUFWLENBQTRCLEtBQUtmLEtBQWpDO0FBQ0g7QUFwQmMsQ0FBbkI7QUF1QkFnQixrQkFBQUEsR0FBZWpCLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGFwcHktYmlyZC8uL3NyYy9qcy9iYWNrZ3JvdW5kLnRzP2EyYzkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmFja2dyb3VuZCA9IHtcbiAgICBmcmFtZToge1xuICAgICAgICBzeDogMCxcbiAgICAgICAgc3k6IDAsXG4gICAgICAgIHN3OiAwLFxuICAgICAgICBzaDogMCxcbiAgICAgICAgZHg6IDAsXG4gICAgICAgIGR5OiAwLFxuICAgICAgICBkdzogMCxcbiAgICAgICAgZGg6IDAsXG4gICAgfSxcbiAgICBpbml0KGdhbWU6IGFueSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmZyYW1lLmR3ID0gdGhpcy5nYW1lLmNhbnZhcy53aWR0aFxuICAgICAgICB0aGlzLmZyYW1lLmRoID0gdGhpcy5nYW1lLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgdGhpcy5mcmFtZS5zdyA9IHRoaXMuZ2FtZS5jYW52YXMud2lkdGhcbiAgICAgICAgdGhpcy5mcmFtZS5zaCA9IHRoaXMuZ2FtZS5jYW52YXMuaGVpZ2h0XG4gICAgfSxcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5yZW5kZXJTcHJpdGVGcmFtZSh0aGlzLmZyYW1lKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFja2dyb3VuZCJdLCJuYW1lcyI6WyJiYWNrZ3JvdW5kIiwiZnJhbWUiLCJzeCIsInN5Iiwic3ciLCJzaCIsImR4IiwiZHkiLCJkdyIsImRoIiwiaW5pdCIsImdhbWUiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInVwZGF0ZSIsInJlbmRlclNwcml0ZUZyYW1lIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/background.ts\n");

/***/ }),

/***/ "./src/js/birdie.ts":
/*!**************************!*\
  !*** ./src/js/birdie.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar ground_1 = __webpack_require__(/*! ./ground */ \"./src/js/ground.ts\");\n\nvar birdie = {\n  frames: [{\n    sx: 6,\n    sy: 982\n  }, {\n    sx: 62,\n    sy: 982\n  }, {\n    sx: 118,\n    sy: 982\n  }],\n  width: 34,\n  height: 24,\n  x: 0,\n  y: 0,\n  maxAnimationStep: 0,\n  animationStep: 0,\n  counterInterval: 0,\n  maxInterval: 5,\n  fallSpeed: 0,\n  maxFallSpeed: 7,\n  init: function init(game) {\n    this.game = game;\n    this.y = (this.game.canvas.height - ground_1[\"default\"].frame.sh) / 2;\n    this.x = this.width;\n    this.maxAnimationStep = this.frames.length - 1;\n  },\n  update: function update() {\n    if (this.fallSpeed < this.maxFallSpeed) {\n      this.fallSpeed += this.game.gravity;\n    }\n\n    this.y += this.fallSpeed;\n    this.checkGroundCollision();\n    this.render();\n  },\n  render: function render() {\n    this.counterInterval++;\n\n    if (!(this.counterInterval % this.maxInterval)) {\n      this.counterInterval = 0;\n      this.animationStep = this.animationStep < this.maxAnimationStep ? this.animationStep + 1 : 0;\n    }\n\n    this.game.ctx.save();\n    this.game.ctx.translate(this.x, this.y);\n    this.game.ctx.rotate(0);\n    this.game.renderSpriteFrame({\n      sx: this.frames[this.animationStep].sx,\n      sy: this.frames[this.animationStep].sy,\n      sw: this.width,\n      sh: this.height,\n      dx: -this.width / 2,\n      dy: -this.height / 2,\n      dw: this.width,\n      dh: this.height\n    });\n    this.game.ctx.restore();\n  },\n  checkGroundCollision: function checkGroundCollision() {\n    if (this.y + this.height / 2 > ground_1[\"default\"].frame.dy) {\n      this.y = ground_1[\"default\"].frame.dy - this.height / 2;\n      this.fallSpeed = -this.maxFallSpeed;\n    }\n  }\n};\nexports[\"default\"] = birdie;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qlksb0JBQU9DLEtBQVAsQ0FBYWMsRUFBNUMsRUFBZ0Q7QUFDNUMsV0FBS3pCLENBQUwsR0FBU1Usb0JBQU9DLEtBQVAsQ0FBYWMsRUFBYixHQUFrQixLQUFLM0IsTUFBTCxHQUFjLENBQXpDO0FBQ0EsV0FBS08sU0FBTCxHQUFpQixDQUFDLEtBQUtDLFlBQXZCO0FBQ0g7QUFDSjtBQW5FVSxDQUFmO0FBc0VBdUIsa0JBQUFBLEdBQWVwQyxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxhcHB5LWJpcmQvLi9zcmMvanMvYmlyZGllLnRzP2I1NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3VuZCBmcm9tICcuL2dyb3VuZCc7XG5cbmNvbnN0IGJpcmRpZSA9IHtcbiAgICBmcmFtZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3g6IDYsXG4gICAgICAgICAgICBzeTogOTgyLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzeDogNjIsXG4gICAgICAgICAgICBzeTogOTgyLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzeDogMTE4LFxuICAgICAgICAgICAgc3k6IDk4MixcbiAgICAgICAgfVxuICAgIF0sXG4gICAgd2lkdGg6IDM0LFxuICAgIGhlaWdodDogMjQsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIG1heEFuaW1hdGlvblN0ZXA6IDAsXG4gICAgYW5pbWF0aW9uU3RlcDogMCxcbiAgICBjb3VudGVySW50ZXJ2YWw6IDAsXG4gICAgbWF4SW50ZXJ2YWw6IDUsXG4gICAgZmFsbFNwZWVkOiAwLFxuICAgIG1heEZhbGxTcGVlZDogNyxcbiAgICBpbml0KGdhbWU6IGFueSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lXG4gICAgICAgIHRoaXMueSA9ICh0aGlzLmdhbWUuY2FudmFzLmhlaWdodCAtIGdyb3VuZC5mcmFtZS5zaCkgLyAyXG4gICAgICAgIHRoaXMueCA9IHRoaXMud2lkdGhcbiAgICAgICAgdGhpcy5tYXhBbmltYXRpb25TdGVwID0gdGhpcy5mcmFtZXMubGVuZ3RoIC0gMVxuICAgIH0sXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5mYWxsU3BlZWQgPCB0aGlzLm1heEZhbGxTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy5mYWxsU3BlZWQgKz0gdGhpcy5nYW1lLmdyYXZpdHlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5mYWxsU3BlZWRcbiAgICAgICAgdGhpcy5jaGVja0dyb3VuZENvbGxpc2lvbigpXG4gICAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9LFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmNvdW50ZXJJbnRlcnZhbCsrXG4gICAgICAgIGlmICghKHRoaXMuY291bnRlckludGVydmFsICUgdGhpcy5tYXhJbnRlcnZhbCkpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRlckludGVydmFsID0gMFxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGVwID0gKHRoaXMuYW5pbWF0aW9uU3RlcCA8IHRoaXMubWF4QW5pbWF0aW9uU3RlcCkgPyB0aGlzLmFuaW1hdGlvblN0ZXAgKyAxIDogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZS5jdHguc2F2ZSgpXG4gICAgICAgIHRoaXMuZ2FtZS5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KVxuICAgICAgICB0aGlzLmdhbWUuY3R4LnJvdGF0ZSgwKVxuICAgICAgICB0aGlzLmdhbWUucmVuZGVyU3ByaXRlRnJhbWUoe1xuICAgICAgICAgICAgc3g6IHRoaXMuZnJhbWVzW3RoaXMuYW5pbWF0aW9uU3RlcF0uc3gsXG4gICAgICAgICAgICBzeTogdGhpcy5mcmFtZXNbdGhpcy5hbmltYXRpb25TdGVwXS5zeSxcbiAgICAgICAgICAgIHN3OiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgc2g6IHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgZHg6IC10aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgIGR5OiAtdGhpcy5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgZHc6IHRoaXMud2lkdGgsXG4gICAgICAgICAgICBkaDogdGhpcy5oZWlnaHQsXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZ2FtZS5jdHgucmVzdG9yZSgpXG4gICAgfSxcblxuICAgIGNoZWNrR3JvdW5kQ29sbGlzaW9uKCkge1xuICAgICAgICBpZiAodGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyID4gZ3JvdW5kLmZyYW1lLmR5KSB7XG4gICAgICAgICAgICB0aGlzLnkgPSBncm91bmQuZnJhbWUuZHkgLSB0aGlzLmhlaWdodCAvIDJcbiAgICAgICAgICAgIHRoaXMuZmFsbFNwZWVkID0gLXRoaXMubWF4RmFsbFNwZWVkXG4gICAgICAgIH1cbiAgICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBiaXJkaWUiXSwibmFtZXMiOlsiYmlyZGllIiwiZnJhbWVzIiwic3giLCJzeSIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJtYXhBbmltYXRpb25TdGVwIiwiYW5pbWF0aW9uU3RlcCIsImNvdW50ZXJJbnRlcnZhbCIsIm1heEludGVydmFsIiwiZmFsbFNwZWVkIiwibWF4RmFsbFNwZWVkIiwiaW5pdCIsImdhbWUiLCJjYW52YXMiLCJncm91bmRfMSIsImZyYW1lIiwic2giLCJsZW5ndGgiLCJ1cGRhdGUiLCJncmF2aXR5IiwiY2hlY2tHcm91bmRDb2xsaXNpb24iLCJyZW5kZXIiLCJjdHgiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwicmVuZGVyU3ByaXRlRnJhbWUiLCJzdyIsImR4IiwiZHkiLCJkdyIsImRoIiwicmVzdG9yZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/birdie.ts\n");

/***/ }),

/***/ "./src/js/ground.ts":
/*!**************************!*\
  !*** ./src/js/ground.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nvar ground = {\n  frame: {\n    sx: 584,\n    sy: 0,\n    sw: 336,\n    sh: 112,\n    dx: 0,\n    dy: 0,\n    dw: 336,\n    dh: 112\n  },\n  speed: 3,\n  maxOffset: 0,\n  init: function init(game) {\n    this.game = game;\n    this.maxOffset = this.frame.sw - this.game.canvas.width;\n    this.frame.dy = this.game.canvas.height - this.frame.sh;\n  },\n  update: function update() {\n    this.game.renderSpriteFrame(this.frame);\n    this.frame.dx -= this.speed;\n\n    if (this.frame.dx <= -this.maxOffset) {\n      this.frame.dx = 0;\n    }\n  }\n};\nexports[\"default\"] = ground;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZ3JvdW5kLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBLElBQU1BLE1BQU0sR0FBRztBQUNYQyxPQUFLLEVBQUU7QUFDSEMsTUFBRSxFQUFFLEdBREQ7QUFFSEMsTUFBRSxFQUFFLENBRkQ7QUFHSEMsTUFBRSxFQUFFLEdBSEQ7QUFJSEMsTUFBRSxFQUFFLEdBSkQ7QUFLSEMsTUFBRSxFQUFFLENBTEQ7QUFNSEMsTUFBRSxFQUFFLENBTkQ7QUFPSEMsTUFBRSxFQUFFLEdBUEQ7QUFRSEMsTUFBRSxFQUFFO0FBUkQsR0FESTtBQVdYQyxPQUFLLEVBQUUsQ0FYSTtBQVlYQyxXQUFTLEVBQUUsQ0FaQTtBQWFYQyxNQUFJLEVBQUosY0FBS0MsSUFBTCxFQUFjO0FBQ1YsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0YsU0FBTCxHQUFpQixLQUFLVixLQUFMLENBQVdHLEVBQVgsR0FBZ0IsS0FBS1MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxLQUFsRDtBQUNBLFNBQUtkLEtBQUwsQ0FBV00sRUFBWCxHQUFnQixLQUFLTSxJQUFMLENBQVVDLE1BQVYsQ0FBaUJFLE1BQWpCLEdBQTBCLEtBQUtmLEtBQUwsQ0FBV0ksRUFBckQ7QUFFSCxHQWxCVTtBQW1CWFksUUFBTTtBQUNGLFNBQUtKLElBQUwsQ0FBVUssaUJBQVYsQ0FBNEIsS0FBS2pCLEtBQWpDO0FBQ0EsU0FBS0EsS0FBTCxDQUFXSyxFQUFYLElBQWlCLEtBQUtJLEtBQXRCOztBQUNBLFFBQUksS0FBS1QsS0FBTCxDQUFXSyxFQUFYLElBQWlCLENBQUMsS0FBS0ssU0FBM0IsRUFBc0M7QUFDbEMsV0FBS1YsS0FBTCxDQUFXSyxFQUFYLEdBQWdCLENBQWhCO0FBQ0g7QUFDSjtBQXpCVSxDQUFmO0FBNEJBYSxrQkFBQUEsR0FBZW5CLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGFwcHktYmlyZC8uL3NyYy9qcy9ncm91bmQudHM/OWUxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBncm91bmQgPSB7XG4gICAgZnJhbWU6IHtcbiAgICAgICAgc3g6IDU4NCxcbiAgICAgICAgc3k6IDAsXG4gICAgICAgIHN3OiAzMzYsXG4gICAgICAgIHNoOiAxMTIsXG4gICAgICAgIGR4OiAwLFxuICAgICAgICBkeTogMCxcbiAgICAgICAgZHc6IDMzNixcbiAgICAgICAgZGg6IDExMixcbiAgICB9LFxuICAgIHNwZWVkOiAzLFxuICAgIG1heE9mZnNldDogMCxcbiAgICBpbml0KGdhbWU6IGFueSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLm1heE9mZnNldCA9IHRoaXMuZnJhbWUuc3cgLSB0aGlzLmdhbWUuY2FudmFzLndpZHRoXG4gICAgICAgIHRoaXMuZnJhbWUuZHkgPSB0aGlzLmdhbWUuY2FudmFzLmhlaWdodCAtIHRoaXMuZnJhbWUuc2g7XG5cbiAgICB9LFxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLnJlbmRlclNwcml0ZUZyYW1lKHRoaXMuZnJhbWUpXG4gICAgICAgIHRoaXMuZnJhbWUuZHggLT0gdGhpcy5zcGVlZFxuICAgICAgICBpZiAodGhpcy5mcmFtZS5keCA8PSAtdGhpcy5tYXhPZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWUuZHggPSAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBncm91bmQiXSwibmFtZXMiOlsiZ3JvdW5kIiwiZnJhbWUiLCJzeCIsInN5Iiwic3ciLCJzaCIsImR4IiwiZHkiLCJkdyIsImRoIiwic3BlZWQiLCJtYXhPZmZzZXQiLCJpbml0IiwiZ2FtZSIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwidXBkYXRlIiwicmVuZGVyU3ByaXRlRnJhbWUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/ground.ts\n");

/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar background_1 = __webpack_require__(/*! ./background */ \"./src/js/background.ts\");\n\nvar ground_1 = __webpack_require__(/*! ./ground */ \"./src/js/ground.ts\");\n\nvar birdie_1 = __webpack_require__(/*! ./birdie */ \"./src/js/birdie.ts\");\n\nvar game = {\n  gravity: 0.91,\n  init: function init() {\n    var _this = this;\n\n    this.canvas = document.getElementById('game');\n    this.ctx = this.canvas.getContext('2d');\n    this.spriteSheetSrc = './src/resources/sprite.png';\n    this.sprite = new Image();\n    this.sprite.src = this.spriteSheetSrc;\n    this.sprite.addEventListener('load', function () {\n      background_1[\"default\"].init(_this);\n      ground_1[\"default\"].init(_this);\n      birdie_1[\"default\"].init(_this);\n\n      _this.animate();\n    });\n  },\n  animate: function animate() {\n    var _this = this;\n\n    window.requestAnimationFrame(function () {\n      _this.animate();\n    });\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    background_1[\"default\"].update();\n    ground_1[\"default\"].update();\n    birdie_1[\"default\"].update();\n  },\n  renderSpriteFrame: function renderSpriteFrame(coordinates) {\n    this.ctx.drawImage(this.sprite, coordinates.sx, coordinates.sy, coordinates.sw, coordinates.sh, coordinates.dx, coordinates.dy, coordinates.dw, coordinates.dh);\n  }\n};\ngame.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHO0FBQ1RDLFNBQU8sRUFBRSxJQURBO0FBRVRDLE1BQUk7QUFBSjs7QUFDSSxTQUFLQyxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtILE1BQUwsQ0FBWUksVUFBWixDQUF1QixJQUF2QixDQUFYO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQiw0QkFBdEI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUMsS0FBSixFQUFkO0FBQ0EsU0FBS0QsTUFBTCxDQUFZRSxHQUFaLEdBQWtCLEtBQUtILGNBQXZCO0FBQ0EsU0FBS0MsTUFBTCxDQUFZRyxnQkFBWixDQUE2QixNQUE3QixFQUFxQztBQUNqQ0MsOEJBQVdYLElBQVgsQ0FBZ0JZLEtBQWhCO0FBQ0FDLDBCQUFPYixJQUFQLENBQVlZLEtBQVo7QUFDQUUsMEJBQU9kLElBQVAsQ0FBWVksS0FBWjs7QUFDQUEsV0FBSSxDQUFDRyxPQUFMO0FBQ0gsS0FMRDtBQU1ILEdBZFE7QUFnQlRBLFNBQU87QUFBUDs7QUFDSUMsVUFBTSxDQUFDQyxxQkFBUCxDQUE2QjtBQUN6QkwsV0FBSSxDQUFDRyxPQUFMO0FBQ0gsS0FGRDtBQUdBLFNBQUtYLEdBQUwsQ0FBU2MsU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLakIsTUFBTCxDQUFZa0IsS0FBckMsRUFBNEMsS0FBS2xCLE1BQUwsQ0FBWW1CLE1BQXhEO0FBQ0FULDRCQUFXVSxNQUFYO0FBQ0FSLHdCQUFPUSxNQUFQO0FBQ0FQLHdCQUFPTyxNQUFQO0FBQ0gsR0F4QlE7QUEwQlRDLG1CQUFpQixFQUFqQiwyQkFBa0JDLFdBQWxCLEVBQTBHO0FBQ3RHLFNBQUtuQixHQUFMLENBQVNvQixTQUFULENBQW1CLEtBQUtqQixNQUF4QixFQUNJZ0IsV0FBVyxDQUFDRSxFQURoQixFQUVJRixXQUFXLENBQUNHLEVBRmhCLEVBR0lILFdBQVcsQ0FBQ0ksRUFIaEIsRUFJSUosV0FBVyxDQUFDSyxFQUpoQixFQUtJTCxXQUFXLENBQUNNLEVBTGhCLEVBTUlOLFdBQVcsQ0FBQ08sRUFOaEIsRUFPSVAsV0FBVyxDQUFDUSxFQVBoQixFQVFJUixXQUFXLENBQUNTLEVBUmhCO0FBVUg7QUFyQ1EsQ0FBYjtBQXdDQWxDLElBQUksQ0FBQ0UsSUFBTCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsYXBweS1iaXJkLy4vc3JjL2pzL21haW4udHM/NGI3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmQnO1xuaW1wb3J0IGdyb3VuZCBmcm9tICcuL2dyb3VuZCc7XG5pbXBvcnQgYmlyZGllIGZyb20gJy4vYmlyZGllJztcblxuY29uc3QgZ2FtZSA9IHtcbiAgICBncmF2aXR5OiAwLjkxLFxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKVxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5zcHJpdGVTaGVldFNyYyA9ICcuL3NyYy9yZXNvdXJjZXMvc3ByaXRlLnBuZydcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKVxuICAgICAgICB0aGlzLnNwcml0ZS5zcmMgPSB0aGlzLnNwcml0ZVNoZWV0U3JjXG4gICAgICAgIHRoaXMuc3ByaXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLmluaXQodGhpcylcbiAgICAgICAgICAgIGdyb3VuZC5pbml0KHRoaXMpXG4gICAgICAgICAgICBiaXJkaWUuaW5pdCh0aGlzKVxuICAgICAgICAgICAgdGhpcy5hbmltYXRlKClcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUoKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcbiAgICAgICAgYmFja2dyb3VuZC51cGRhdGUoKVxuICAgICAgICBncm91bmQudXBkYXRlKClcbiAgICAgICAgYmlyZGllLnVwZGF0ZSgpXG4gICAgfSxcblxuICAgIHJlbmRlclNwcml0ZUZyYW1lKGNvb3JkaW5hdGVzOiB7IHN4OiBhbnk7IHN5OiBhbnk7IHN3OiBhbnk7IHNoOiBhbnk7IGR4OiBhbnk7IGR5OiBhbnk7IGR3OiBhbnk7IGRoOiBhbnk7IH0pIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuc3ByaXRlLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMuc3gsXG4gICAgICAgICAgICBjb29yZGluYXRlcy5zeSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLnN3LFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMuc2gsXG4gICAgICAgICAgICBjb29yZGluYXRlcy5keCxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmR5LFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMuZHcsXG4gICAgICAgICAgICBjb29yZGluYXRlcy5kaCxcbiAgICAgICAgKVxuICAgIH1cbn1cblxuZ2FtZS5pbml0KCkiXSwibmFtZXMiOlsiZ2FtZSIsImdyYXZpdHkiLCJpbml0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJzcHJpdGVTaGVldFNyYyIsInNwcml0ZSIsIkltYWdlIiwic3JjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJhY2tncm91bmRfMSIsIl90aGlzIiwiZ3JvdW5kXzEiLCJiaXJkaWVfMSIsImFuaW1hdGUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInVwZGF0ZSIsInJlbmRlclNwcml0ZUZyYW1lIiwiY29vcmRpbmF0ZXMiLCJkcmF3SW1hZ2UiLCJzeCIsInN5Iiwic3ciLCJzaCIsImR4IiwiZHkiLCJkdyIsImRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxhcHB5LWJpcmQvLi9zcmMvc2Nzcy9tYWluLnNjc3M/ZjdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkflappy_bird"] = self["webpackChunkflappy_bird"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;