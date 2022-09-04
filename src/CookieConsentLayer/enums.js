"use strict";
exports.__esModule = true;
exports.scriptsModeKeys = exports.preferenceStateEventKeys = exports.environmentTypeKeys = exports.preferenceEventKeys = void 0;
var preferenceEventKeys;
(function (preferenceEventKeys) {
    preferenceEventKeys["init"] = "init";
})(preferenceEventKeys = exports.preferenceEventKeys || (exports.preferenceEventKeys = {}));
var environmentTypeKeys;
(function (environmentTypeKeys) {
    environmentTypeKeys["development"] = "development";
    environmentTypeKeys["production"] = "production";
})(environmentTypeKeys = exports.environmentTypeKeys || (exports.environmentTypeKeys = {}));
var preferenceStateEventKeys;
(function (preferenceStateEventKeys) {
    preferenceStateEventKeys["all"] = "all";
    preferenceStateEventKeys["necessary"] = "necessary";
    preferenceStateEventKeys["custom"] = "custom";
})(preferenceStateEventKeys = exports.preferenceStateEventKeys || (exports.preferenceStateEventKeys = {}));
var scriptsModeKeys;
(function (scriptsModeKeys) {
    scriptsModeKeys["opt-in"] = "opt-in";
    scriptsModeKeys["opt-out"] = "opt-out";
})(scriptsModeKeys = exports.scriptsModeKeys || (exports.scriptsModeKeys = {}));
