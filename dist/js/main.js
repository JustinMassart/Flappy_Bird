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

/***/ "./src/js/TubesPair.ts":
/*!*****************************!*\
  !*** ./src/js/TubesPair.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\n\nvar TubesPair = function () {\n  function TubesPair(game) {\n    this.game = game;\n    this.x = this.game.canvas.width;\n    this.minSpaceBetweenTubes = 90;\n    this.maxSpaceBetweenTubes = 120;\n    this.spaceBetweenTubes = Math.floor(this.minSpaceBetweenTubes + Math.random() * (this.maxSpaceBetweenTubes - this.minSpaceBetweenTubes));\n    this.speed = 2.8;\n    this.width = 52;\n    this.height = 317;\n    this.yTop = -Math.floor(Math.random() * 280) - 25;\n    this.yBottom = this.yTop + this.height + this.spaceBetweenTubes;\n    this.tubeTopFrame = {\n      sx: 113,\n      sy: 647,\n      sw: this.width,\n      sh: this.height,\n      dx: 0,\n      dy: 0,\n      dw: this.width,\n      dh: this.height\n    };\n    this.tubeBottomFrame = {\n      sx: 168,\n      sy: 647,\n      sw: this.width,\n      sh: this.height,\n      dx: 0,\n      dy: 0,\n      dw: this.width,\n      dh: this.height\n    };\n  }\n\n  TubesPair.prototype.update = function () {\n    this.x -= this.speed;\n    this.render();\n  };\n\n  TubesPair.prototype.render = function () {\n    this.game.ctx.save();\n    this.game.ctx.translate(this.x, this.yTop);\n    this.game.renderSpriteFrame(this.tubeTopFrame);\n    this.game.ctx.restore();\n    this.game.ctx.save();\n    this.game.ctx.translate(this.x, this.yBottom);\n    this.game.renderSpriteFrame(this.tubeBottomFrame);\n    this.game.ctx.restore();\n  };\n\n  return TubesPair;\n}();\n\nexports[\"default\"] = TubesPair;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvVHViZXNQYWlyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQWNJLHFCQUFZQSxJQUFaLEVBQXFCO0FBQ2pCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLENBQUwsR0FBUyxLQUFLRCxJQUFMLENBQVVFLE1BQVYsQ0FBaUJDLEtBQTFCO0FBQ0EsU0FBS0Msb0JBQUwsR0FBNEIsRUFBNUI7QUFDQSxTQUFLQyxvQkFBTCxHQUE0QixHQUE1QjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLSixvQkFBTCxHQUE0QkcsSUFBSSxDQUFDRSxNQUFMLE1BQWlCLEtBQUtKLG9CQUFMLEdBQTRCLEtBQUtELG9CQUFsRCxDQUF2QyxDQUF6QjtBQUNBLFNBQUtNLEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS1AsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLUSxNQUFMLEdBQWMsR0FBZDtBQUNBLFNBQUtDLElBQUwsR0FBWSxDQUFDTCxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQTNCLENBQUQsR0FBbUMsRUFBL0M7QUFDQSxTQUFLSSxPQUFMLEdBQWUsS0FBS0QsSUFBTCxHQUFZLEtBQUtELE1BQWpCLEdBQTBCLEtBQUtMLGlCQUE5QztBQUNBLFNBQUtRLFlBQUwsR0FBb0I7QUFDaEJDLFFBQUUsRUFBRSxHQURZO0FBRWhCQyxRQUFFLEVBQUUsR0FGWTtBQUdoQkMsUUFBRSxFQUFFLEtBQUtkLEtBSE87QUFJaEJlLFFBQUUsRUFBRSxLQUFLUCxNQUpPO0FBS2hCUSxRQUFFLEVBQUUsQ0FMWTtBQU1oQkMsUUFBRSxFQUFFLENBTlk7QUFPaEJDLFFBQUUsRUFBRSxLQUFLbEIsS0FQTztBQVFoQm1CLFFBQUUsRUFBRSxLQUFLWDtBQVJPLEtBQXBCO0FBVUEsU0FBS1ksZUFBTCxHQUF1QjtBQUNuQlIsUUFBRSxFQUFFLEdBRGU7QUFFbkJDLFFBQUUsRUFBRSxHQUZlO0FBR25CQyxRQUFFLEVBQUUsS0FBS2QsS0FIVTtBQUluQmUsUUFBRSxFQUFFLEtBQUtQLE1BSlU7QUFLbkJRLFFBQUUsRUFBRSxDQUxlO0FBTW5CQyxRQUFFLEVBQUUsQ0FOZTtBQU9uQkMsUUFBRSxFQUFFLEtBQUtsQixLQVBVO0FBUW5CbUIsUUFBRSxFQUFFLEtBQUtYO0FBUlUsS0FBdkI7QUFVSDs7QUFFRGE7QUFDSSxTQUFLdkIsQ0FBTCxJQUFVLEtBQUtTLEtBQWY7QUFDQSxTQUFLZSxNQUFMO0FBQ0gsR0FIRDs7QUFLQUQ7QUFFSSxTQUFLeEIsSUFBTCxDQUFVMEIsR0FBVixDQUFjQyxJQUFkO0FBQ0EsU0FBSzNCLElBQUwsQ0FBVTBCLEdBQVYsQ0FBY0UsU0FBZCxDQUF3QixLQUFLM0IsQ0FBN0IsRUFBZ0MsS0FBS1csSUFBckM7QUFDQSxTQUFLWixJQUFMLENBQVU2QixpQkFBVixDQUE0QixLQUFLZixZQUFqQztBQUNBLFNBQUtkLElBQUwsQ0FBVTBCLEdBQVYsQ0FBY0ksT0FBZDtBQUVBLFNBQUs5QixJQUFMLENBQVUwQixHQUFWLENBQWNDLElBQWQ7QUFDQSxTQUFLM0IsSUFBTCxDQUFVMEIsR0FBVixDQUFjRSxTQUFkLENBQXdCLEtBQUszQixDQUE3QixFQUFnQyxLQUFLWSxPQUFyQztBQUNBLFNBQUtiLElBQUwsQ0FBVTZCLGlCQUFWLENBQTRCLEtBQUtOLGVBQWpDO0FBQ0EsU0FBS3ZCLElBQUwsQ0FBVTBCLEdBQVYsQ0FBY0ksT0FBZDtBQUNILEdBWEQ7O0FBYUo7QUFBQyxDQWpFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsYXBweS1iaXJkLy4vc3JjL2pzL1R1YmVzUGFpci50cz83OGYxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1YmVzUGFpciB7XG4gICAgeDogbnVtYmVyO1xuICAgIGdhbWU6IGFueTtcbiAgICBzcGVlZDogbnVtYmVyO1xuICAgIHlUb3A6IG51bWJlcjtcbiAgICB5Qm90dG9tOiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB0dWJlVG9wRnJhbWU6IHsgc3g6IG51bWJlcjsgc3k6IG51bWJlcjsgc3c6IG51bWJlcjsgc2g6IG51bWJlcjsgZHg6IG51bWJlcjsgZHk6IG51bWJlcjsgZHc6IG51bWJlcjsgZGg6IG51bWJlcjsgfTtcbiAgICB0dWJlQm90dG9tRnJhbWU6IHsgc3g6IG51bWJlcjsgc3k6IG51bWJlcjsgc3c6IG51bWJlcjsgc2g6IG51bWJlcjsgZHg6IG51bWJlcjsgZHk6IG51bWJlcjsgZHc6IG51bWJlcjsgZGg6IG51bWJlcjsgfTtcbiAgICBzcGFjZUJldHdlZW5UdWJlczogbnVtYmVyO1xuICAgIG1pblNwYWNlQmV0d2VlblR1YmVzOiBudW1iZXI7XG4gICAgbWF4U3BhY2VCZXR3ZWVuVHViZXM6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IGFueSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lXG4gICAgICAgIHRoaXMueCA9IHRoaXMuZ2FtZS5jYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMubWluU3BhY2VCZXR3ZWVuVHViZXMgPSA5MFxuICAgICAgICB0aGlzLm1heFNwYWNlQmV0d2VlblR1YmVzID0gMTIwXG4gICAgICAgIHRoaXMuc3BhY2VCZXR3ZWVuVHViZXMgPSBNYXRoLmZsb29yKHRoaXMubWluU3BhY2VCZXR3ZWVuVHViZXMgKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4U3BhY2VCZXR3ZWVuVHViZXMgLSB0aGlzLm1pblNwYWNlQmV0d2VlblR1YmVzKSlcbiAgICAgICAgdGhpcy5zcGVlZCA9IDIuOFxuICAgICAgICB0aGlzLndpZHRoID0gNTJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzMTdcbiAgICAgICAgdGhpcy55VG9wID0gLU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI4MCkgLSAyNVxuICAgICAgICB0aGlzLnlCb3R0b20gPSB0aGlzLnlUb3AgKyB0aGlzLmhlaWdodCArIHRoaXMuc3BhY2VCZXR3ZWVuVHViZXNcbiAgICAgICAgdGhpcy50dWJlVG9wRnJhbWUgPSB7XG4gICAgICAgICAgICBzeDogMTEzLFxuICAgICAgICAgICAgc3k6IDY0NyxcbiAgICAgICAgICAgIHN3OiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgc2g6IHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgZHg6IDAsXG4gICAgICAgICAgICBkeTogMCxcbiAgICAgICAgICAgIGR3OiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgZGg6IHRoaXMuaGVpZ2h0LFxuICAgICAgICB9XG4gICAgICAgIHRoaXMudHViZUJvdHRvbUZyYW1lID0ge1xuICAgICAgICAgICAgc3g6IDE2OCxcbiAgICAgICAgICAgIHN5OiA2NDcsXG4gICAgICAgICAgICBzdzogdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHNoOiB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIGR4OiAwLFxuICAgICAgICAgICAgZHk6IDAsXG4gICAgICAgICAgICBkdzogdGhpcy53aWR0aCxcbiAgICAgICAgICAgIGRoOiB0aGlzLmhlaWdodCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRcbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gVHViZSBkdSBoYXV0XG4gICAgICAgIHRoaXMuZ2FtZS5jdHguc2F2ZSgpXG4gICAgICAgIHRoaXMuZ2FtZS5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55VG9wKVxuICAgICAgICB0aGlzLmdhbWUucmVuZGVyU3ByaXRlRnJhbWUodGhpcy50dWJlVG9wRnJhbWUpXG4gICAgICAgIHRoaXMuZ2FtZS5jdHgucmVzdG9yZSgpXG4gICAgICAgIC8vIFR1YmUgZHUgYmFzXG4gICAgICAgIHRoaXMuZ2FtZS5jdHguc2F2ZSgpXG4gICAgICAgIHRoaXMuZ2FtZS5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55Qm90dG9tKVxuICAgICAgICB0aGlzLmdhbWUucmVuZGVyU3ByaXRlRnJhbWUodGhpcy50dWJlQm90dG9tRnJhbWUpXG4gICAgICAgIHRoaXMuZ2FtZS5jdHgucmVzdG9yZSgpXG4gICAgfVxuXG59Il0sIm5hbWVzIjpbImdhbWUiLCJ4IiwiY2FudmFzIiwid2lkdGgiLCJtaW5TcGFjZUJldHdlZW5UdWJlcyIsIm1heFNwYWNlQmV0d2VlblR1YmVzIiwic3BhY2VCZXR3ZWVuVHViZXMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzcGVlZCIsImhlaWdodCIsInlUb3AiLCJ5Qm90dG9tIiwidHViZVRvcEZyYW1lIiwic3giLCJzeSIsInN3Iiwic2giLCJkeCIsImR5IiwiZHciLCJkaCIsInR1YmVCb3R0b21GcmFtZSIsIlR1YmVzUGFpciIsInJlbmRlciIsImN0eCIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyZW5kZXJTcHJpdGVGcmFtZSIsInJlc3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/TubesPair.ts\n");

/***/ }),

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

eval("\n\nexports.__esModule = true;\n\nvar ground_1 = __webpack_require__(/*! ./ground */ \"./src/js/ground.ts\");\n\nvar birdie = {\n  frames: [{\n    sx: 6,\n    sy: 982\n  }, {\n    sx: 62,\n    sy: 982\n  }, {\n    sx: 118,\n    sy: 982\n  }],\n  width: 34,\n  height: 24,\n  x: 0,\n  y: 0,\n  maxAnimationStep: 0,\n  animationStep: 0,\n  counterInterval: 0,\n  maxInterval: 5,\n  fallSpeed: 0,\n  maxFallSpeed: 7,\n  init: function init(game) {\n    this.game = game;\n    this.y = (this.game.canvas.height - ground_1[\"default\"].frame.sh) / 2;\n    this.x = this.width;\n    this.maxAnimationStep = this.frames.length - 1;\n  },\n  update: function update() {\n    if (this.game.hasStarted) {\n      if (this.fallSpeed < this.maxFallSpeed) {\n        this.fallSpeed += this.game.gravity;\n      }\n\n      this.y += this.fallSpeed;\n      this.checkGroundCollision();\n      this.checkTubesCollision();\n    }\n\n    this.render();\n  },\n  render: function render() {\n    this.counterInterval++;\n\n    if (!(this.counterInterval % this.maxInterval)) {\n      this.counterInterval = 0;\n      this.animationStep = this.animationStep < this.maxAnimationStep ? this.animationStep + 1 : 0;\n    }\n\n    this.game.ctx.save();\n    this.game.ctx.translate(this.x, this.y);\n    this.game.ctx.rotate(this.fallSpeed / this.maxFallSpeed);\n    this.game.renderSpriteFrame({\n      sx: this.frames[this.animationStep].sx,\n      sy: this.frames[this.animationStep].sy,\n      sw: this.width,\n      sh: this.height,\n      dx: -this.width / 2,\n      dy: -this.height / 2,\n      dw: this.width,\n      dh: this.height\n    });\n    this.game.ctx.restore();\n  },\n  goUp: function goUp() {\n    this.fallSpeed = -this.maxFallSpeed * 1.2;\n  },\n  checkGroundCollision: function checkGroundCollision() {\n    if (this.y + this.height / 2 > ground_1[\"default\"].frame.dy) {\n      this.y = ground_1[\"default\"].frame.dy - this.height / 2;\n      this.fallSpeed = -this.maxFallSpeed;\n    }\n  },\n  checkTubesCollision: function checkTubesCollision() {\n    var _this = this;\n\n    this.game.tubePairs.forEach(function (tubePair) {\n      if (_this.x + _this.width / 2 > tubePair.x && _this.x - _this.width / 2 < tubePair.x + tubePair.width) {\n        if (_this.y - _this.height / 2 < tubePair.yTop + tubePair.height || _this.y + _this.height / 2 > tubePair.yBottom) {\n          _this.game.cancelAnimation();\n        }\n      }\n    });\n  }\n};\nexports[\"default\"] = birdie;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZjtBQXVGQUMsa0JBQUFBLEdBQWU5QyxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxhcHB5LWJpcmQvLi9zcmMvanMvYmlyZGllLnRzP2I1NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3VuZCBmcm9tICcuL2dyb3VuZCc7XG5cbmNvbnN0IGJpcmRpZSA9IHtcbiAgICBmcmFtZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3g6IDYsXG4gICAgICAgICAgICBzeTogOTgyLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzeDogNjIsXG4gICAgICAgICAgICBzeTogOTgyLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzeDogMTE4LFxuICAgICAgICAgICAgc3k6IDk4MixcbiAgICAgICAgfVxuICAgIF0sXG4gICAgd2lkdGg6IDM0LFxuICAgIGhlaWdodDogMjQsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIG1heEFuaW1hdGlvblN0ZXA6IDAsXG4gICAgYW5pbWF0aW9uU3RlcDogMCxcbiAgICBjb3VudGVySW50ZXJ2YWw6IDAsXG4gICAgbWF4SW50ZXJ2YWw6IDUsXG4gICAgZmFsbFNwZWVkOiAwLFxuICAgIG1heEZhbGxTcGVlZDogNyxcbiAgICBpbml0KGdhbWU6IGFueSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lXG4gICAgICAgIHRoaXMueSA9ICh0aGlzLmdhbWUuY2FudmFzLmhlaWdodCAtIGdyb3VuZC5mcmFtZS5zaCkgLyAyXG4gICAgICAgIHRoaXMueCA9IHRoaXMud2lkdGhcbiAgICAgICAgdGhpcy5tYXhBbmltYXRpb25TdGVwID0gdGhpcy5mcmFtZXMubGVuZ3RoIC0gMVxuICAgIH0sXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lLmhhc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZhbGxTcGVlZCA8IHRoaXMubWF4RmFsbFNwZWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWxsU3BlZWQgKz0gdGhpcy5nYW1lLmdyYXZpdHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLmZhbGxTcGVlZFxuICAgICAgICAgICAgdGhpcy5jaGVja0dyb3VuZENvbGxpc2lvbigpXG4gICAgICAgICAgICB0aGlzLmNoZWNrVHViZXNDb2xsaXNpb24oKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9LFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmNvdW50ZXJJbnRlcnZhbCsrXG4gICAgICAgIGlmICghKHRoaXMuY291bnRlckludGVydmFsICUgdGhpcy5tYXhJbnRlcnZhbCkpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRlckludGVydmFsID0gMFxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGVwID0gKHRoaXMuYW5pbWF0aW9uU3RlcCA8IHRoaXMubWF4QW5pbWF0aW9uU3RlcCkgPyB0aGlzLmFuaW1hdGlvblN0ZXAgKyAxIDogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZS5jdHguc2F2ZSgpXG4gICAgICAgIHRoaXMuZ2FtZS5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KVxuICAgICAgICB0aGlzLmdhbWUuY3R4LnJvdGF0ZSh0aGlzLmZhbGxTcGVlZCAvIHRoaXMubWF4RmFsbFNwZWVkKVxuICAgICAgICB0aGlzLmdhbWUucmVuZGVyU3ByaXRlRnJhbWUoe1xuICAgICAgICAgICAgc3g6IHRoaXMuZnJhbWVzW3RoaXMuYW5pbWF0aW9uU3RlcF0uc3gsXG4gICAgICAgICAgICBzeTogdGhpcy5mcmFtZXNbdGhpcy5hbmltYXRpb25TdGVwXS5zeSxcbiAgICAgICAgICAgIHN3OiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgc2g6IHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgZHg6IC10aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgIGR5OiAtdGhpcy5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgZHc6IHRoaXMud2lkdGgsXG4gICAgICAgICAgICBkaDogdGhpcy5oZWlnaHQsXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZ2FtZS5jdHgucmVzdG9yZSgpXG4gICAgfSxcblxuICAgIGdvVXAoKSB7XG4gICAgICAgIHRoaXMuZmFsbFNwZWVkID0gLXRoaXMubWF4RmFsbFNwZWVkICogMS4yXG4gICAgfSxcblxuICAgIGNoZWNrR3JvdW5kQ29sbGlzaW9uKCkge1xuICAgICAgICBpZiAodGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyID4gZ3JvdW5kLmZyYW1lLmR5KSB7XG4gICAgICAgICAgICB0aGlzLnkgPSBncm91bmQuZnJhbWUuZHkgLSB0aGlzLmhlaWdodCAvIDJcbiAgICAgICAgICAgIHRoaXMuZmFsbFNwZWVkID0gLXRoaXMubWF4RmFsbFNwZWVkXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY2hlY2tUdWJlc0NvbGxpc2lvbigpIHtcbiAgICAgICAgdGhpcy5nYW1lLnR1YmVQYWlycy5mb3JFYWNoKCh0dWJlUGFpcjogeyB4OiBudW1iZXI7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyB5VG9wOiBudW1iZXI7IHlCb3R0b206IG51bWJlcjt9KSA9PiB7XG4gICAgICAgICAgICBpZiAoKHRoaXMueCArIHRoaXMud2lkdGggLyAyKSA+IHR1YmVQYWlyLnggJiYgKHRoaXMueCAtIHRoaXMud2lkdGggLyAyKSA8IHR1YmVQYWlyLnggKyB0dWJlUGFpci53aWR0aCkge1xuICAgICAgICAgICAgICAgIGlmICgodGhpcy55IC0gdGhpcy5oZWlnaHQgLyAyKSA8IHR1YmVQYWlyLnlUb3AgKyB0dWJlUGFpci5oZWlnaHQgfHwgKHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMikgPiB0dWJlUGFpci55Qm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jYW5jZWxBbmltYXRpb24oKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBiaXJkaWUiXSwibmFtZXMiOlsiYmlyZGllIiwiZnJhbWVzIiwic3giLCJzeSIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJtYXhBbmltYXRpb25TdGVwIiwiYW5pbWF0aW9uU3RlcCIsImNvdW50ZXJJbnRlcnZhbCIsIm1heEludGVydmFsIiwiZmFsbFNwZWVkIiwibWF4RmFsbFNwZWVkIiwiaW5pdCIsImdhbWUiLCJjYW52YXMiLCJncm91bmRfMSIsImZyYW1lIiwic2giLCJsZW5ndGgiLCJ1cGRhdGUiLCJoYXNTdGFydGVkIiwiZ3Jhdml0eSIsImNoZWNrR3JvdW5kQ29sbGlzaW9uIiwiY2hlY2tUdWJlc0NvbGxpc2lvbiIsInJlbmRlciIsImN0eCIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJyZW5kZXJTcHJpdGVGcmFtZSIsInN3IiwiZHgiLCJkeSIsImR3IiwiZGgiLCJyZXN0b3JlIiwiZ29VcCIsInR1YmVQYWlycyIsImZvckVhY2giLCJ0dWJlUGFpciIsIl90aGlzIiwieVRvcCIsInlCb3R0b20iLCJjYW5jZWxBbmltYXRpb24iLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/birdie.ts\n");

/***/ }),

/***/ "./src/js/gameController.ts":
/*!**********************************!*\
  !*** ./src/js/gameController.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar birdie_1 = __webpack_require__(/*! ./birdie */ \"./src/js/birdie.ts\");\n\nvar gameController = {\n  init: function init(game) {\n    window.addEventListener('keydown', function (e) {\n      if (e.key === 'j') {\n        if (!game.hasStarted) {\n          game.hasStarted = true;\n        }\n\n        birdie_1[\"default\"].goUp();\n      }\n    });\n  }\n};\nexports[\"default\"] = gameController;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZ2FtZUNvbnRyb2xsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLElBQU1BLGNBQWMsR0FBRztBQUNuQkMsTUFBSSxFQUFKLGNBQUtDLElBQUwsRUFBYztBQUNWQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQUNDLENBQUQsRUFBRTtBQUM3QixVQUFJQSxDQUFDLENBQUNDLEdBQUYsS0FBVSxHQUFkLEVBQW1CO0FBQ2YsWUFBSSxDQUFDSixJQUFJLENBQUNLLFVBQVYsRUFBc0I7QUFDbEJMLGNBQUksQ0FBQ0ssVUFBTCxHQUFrQixJQUFsQjtBQUNIOztBQUNEQyw0QkFBT0MsSUFBUDtBQUNIO0FBQ0osS0FQTDtBQVNIO0FBWGtCLENBQXZCO0FBZUFDLGtCQUFBQSxHQUFlVixjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxhcHB5LWJpcmQvLi9zcmMvanMvZ2FtZUNvbnRyb2xsZXIudHM/ZDNhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmlyZGllIGZyb20gXCIuL2JpcmRpZVwiO1xuXG5jb25zdCBnYW1lQ29udHJvbGxlciA9IHtcbiAgICBpbml0KGdhbWU6IGFueSkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnaicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lLmhhc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuaGFzU3RhcnRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBiaXJkaWUuZ29VcCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVDb250cm9sbGVyIl0sIm5hbWVzIjpbImdhbWVDb250cm9sbGVyIiwiaW5pdCIsImdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSIsImhhc1N0YXJ0ZWQiLCJiaXJkaWVfMSIsImdvVXAiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/gameController.ts\n");

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

eval("\n\nexports.__esModule = true;\n\nvar gameController_1 = __webpack_require__(/*! ./gameController */ \"./src/js/gameController.ts\");\n\nvar background_1 = __webpack_require__(/*! ./background */ \"./src/js/background.ts\");\n\nvar TubesPair_1 = __webpack_require__(/*! ./TubesPair */ \"./src/js/TubesPair.ts\");\n\nvar ground_1 = __webpack_require__(/*! ./ground */ \"./src/js/ground.ts\");\n\nvar birdie_1 = __webpack_require__(/*! ./birdie */ \"./src/js/birdie.ts\");\n\nvar game = {\n  gravity: 0.91,\n  hasStarted: false,\n  tubePairs: [],\n  frameCounter: 0,\n  frameInterval: 80,\n  maxTubesPairs: 3,\n  requestId: 0,\n  init: function init() {\n    var _this = this;\n\n    this.canvas = document.getElementById('game');\n    this.ctx = this.canvas.getContext('2d');\n    this.spriteSheetSrc = './src/resources/sprite.png';\n    this.sprite = new Image();\n    this.sprite.src = this.spriteSheetSrc;\n    this.sprite.addEventListener('load', function () {\n      gameController_1[\"default\"].init(_this);\n      background_1[\"default\"].init(_this);\n      ground_1[\"default\"].init(_this);\n      birdie_1[\"default\"].init(_this);\n\n      _this.animate();\n    });\n  },\n  animate: function animate() {\n    var _this = this;\n\n    this.requestId = window.requestAnimationFrame(function () {\n      _this.animate();\n    });\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    background_1[\"default\"].update();\n\n    if (this.hasStarted) {\n      if (this.frameCounter++ > this.frameInterval) {\n        if (this.tubePairs >= this.maxTubesPairs) {\n          this.tubePairs.splice(0, 1);\n        }\n\n        this.tubePairs.push(new TubesPair_1[\"default\"](this));\n        this.frameCounter = 0;\n      }\n\n      this.tubePairs.forEach(function (tubePair) {\n        tubePair.update();\n      });\n    }\n\n    ground_1[\"default\"].update();\n    birdie_1[\"default\"].update();\n  },\n  renderSpriteFrame: function renderSpriteFrame(coordinates) {\n    this.ctx.drawImage(this.sprite, coordinates.sx, coordinates.sy, coordinates.sw, coordinates.sh, coordinates.dx, coordinates.dy, coordinates.dw, coordinates.dh);\n  },\n  cancelAnimation: function cancelAnimation() {\n    window.cancelAnimationFrame(this.requestId);\n  }\n};\ngame.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NGI3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2FtZUNvbnRyb2xsZXIgZnJvbSAnLi9nYW1lQ29udHJvbGxlcic7XG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmQnO1xuaW1wb3J0IFR1YmVzUGFpciBmcm9tICcuL1R1YmVzUGFpcic7XG5pbXBvcnQgZ3JvdW5kIGZyb20gJy4vZ3JvdW5kJztcbmltcG9ydCBiaXJkaWUgZnJvbSAnLi9iaXJkaWUnO1xuXG5jb25zdCBnYW1lID0ge1xuICAgIGdyYXZpdHk6IDAuOTEsXG4gICAgaGFzU3RhcnRlZDogZmFsc2UsXG4vLyBAdHMtaWdub3JlXG4gICAgdHViZVBhaXJzOiBbXSxcbiAgICBmcmFtZUNvdW50ZXI6IDAsXG4gICAgZnJhbWVJbnRlcnZhbDogODAsXG4gICAgbWF4VHViZXNQYWlyczogMyxcbiAgICByZXF1ZXN0SWQ6IDAsXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0U3JjID0gJy4vc3JjL3Jlc291cmNlcy9zcHJpdGUucG5nJ1xuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpXG4gICAgICAgIHRoaXMuc3ByaXRlLnNyYyA9IHRoaXMuc3ByaXRlU2hlZXRTcmNcbiAgICAgICAgdGhpcy5zcHJpdGUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIGdhbWVDb250cm9sbGVyLmluaXQodGhpcylcbiAgICAgICAgICAgIGJhY2tncm91bmQuaW5pdCh0aGlzKVxuICAgICAgICAgICAgZ3JvdW5kLmluaXQodGhpcylcbiAgICAgICAgICAgIGJpcmRpZS5pbml0KHRoaXMpXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUoKVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlKClcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpXG4gICAgICAgIGJhY2tncm91bmQudXBkYXRlKClcbiAgICAgICAgaWYgKHRoaXMuaGFzU3RhcnRlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVDb3VudGVyKysgPiB0aGlzLmZyYW1lSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50dWJlUGFpcnMgPj0gdGhpcy5tYXhUdWJlc1BhaXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHViZVBhaXJzLnNwbGljZSgwLCAxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnR1YmVQYWlycy5wdXNoKG5ldyBUdWJlc1BhaXIodGhpcykpXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZUNvdW50ZXIgPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnR1YmVQYWlycy5mb3JFYWNoKCh0dWJlUGFpcjogeyB1cGRhdGU6ICgpID0+IHZvaWQ7IH0pID0+IHtcbiAgICAgICAgICAgICAgICB0dWJlUGFpci51cGRhdGUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGdyb3VuZC51cGRhdGUoKVxuICAgICAgICBiaXJkaWUudXBkYXRlKClcbiAgICB9LFxuXG4gICAgcmVuZGVyU3ByaXRlRnJhbWUoY29vcmRpbmF0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g6IGFueTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3k6IGFueTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3c6IGFueTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2g6IGFueTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHg6IGFueTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHk6IGFueTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHc6IGFueTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGg6IGFueTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLnN4LFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMuc3ksXG4gICAgICAgICAgICBjb29yZGluYXRlcy5zdyxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLnNoLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMuZHgsXG4gICAgICAgICAgICBjb29yZGluYXRlcy5keSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmR3LFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMuZGgsXG4gICAgICAgIClcbiAgICB9LFxuXG4gICAgY2FuY2VsQW5pbWF0aW9uKCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0SWQpXG4gICAgfVxufVxuXG5nYW1lLmluaXQoKSJdLCJuYW1lcyI6WyJnYW1lIiwiZ3Jhdml0eSIsImhhc1N0YXJ0ZWQiLCJ0dWJlUGFpcnMiLCJmcmFtZUNvdW50ZXIiLCJmcmFtZUludGVydmFsIiwibWF4VHViZXNQYWlycyIsInJlcXVlc3RJZCIsImluaXQiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInNwcml0ZVNoZWV0U3JjIiwic3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZUNvbnRyb2xsZXJfMSIsIl90aGlzIiwiYmFja2dyb3VuZF8xIiwiZ3JvdW5kXzEiLCJiaXJkaWVfMSIsImFuaW1hdGUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInVwZGF0ZSIsInNwbGljZSIsInB1c2giLCJUdWJlc1BhaXJfMSIsImZvckVhY2giLCJ0dWJlUGFpciIsInJlbmRlclNwcml0ZUZyYW1lIiwiY29vcmRpbmF0ZXMiLCJkcmF3SW1hZ2UiLCJzeCIsInN5Iiwic3ciLCJzaCIsImR4IiwiZHkiLCJkdyIsImRoIiwiY2FuY2VsQW5pbWF0aW9uIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

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