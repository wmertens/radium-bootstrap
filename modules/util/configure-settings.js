/**
 * Usage:
 *
 * RadiumBootstrap.configureSettings({
 *   grayBase: "#333",
 *   brandPrimary: "#f390bc"
 * });
 *
 * Updates all computed setting values if dependent setting changes.
 *
 * Computed values can be overwritten by passing in a hardcoded value for that setting.
 */

var merge = require('lodash/object/merge');
var computeSettings = require('./compute-settings.js');
var settings = require('../settings.js');

module.exports = function (userSettings) {
  if (!settings || typeof settings !== "object") {
    return;
  }

  // Overwrite defaults with userSettings
  // Pass in userSettings as possible overrides to computeSettings
  // Compute settings requires the current list of settings to calculate dependent settings
  // So we have to merge twice
  merge(settings, computeSettings(merge(settings, userSettings), userSettings));
};