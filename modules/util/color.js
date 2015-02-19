var color = require('color');

module.exports = {};

// The darken method exposed by `color` darkens by relatively adjusting
// the lightness by a percentage. For example, if a color `foo` has a
// lightness of `50%`, `color(foo).darken(0.5)` converts the lightness to
// `25%`. This function darkens by adjusting absolute darkness, like LESS
// and Sass. Given the same color `foo`, `absoluteDarken(foo, 10)` will
// convert the lightness to `40%`.
module.exports.absoluteDarken = function (colorValue, amount) {
  var colorObj = color(colorValue);
  var darkenedColor = colorObj.lightness(colorObj.hsl().l - amount);

  return darkenedColor.hexString();
};

// The lighten method exposed by `color` lightens by relatively adjusting
// the lightness by a percentage. For example, if a color `foo` has a
// lightness of `50%`, `color(foo).lighten(0.5)` converts the lightness to
// `75%`. This function darkens by adjusting absolute darkness, like LESS
// and Sass. Given the same color `foo`, `absoluteLighten(foo, 10)` will
// convert the lightness to `60%`.
module.exports.absoluteLighten = function (colorValue, amount) {
  var colorObj = color(colorValue);
  var lightenedColor = colorObj.lightness(colorObj.hsl().l + amount);

  return lightenedColor.hexString();
};
