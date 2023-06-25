"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchParams = exports.SortingMode = exports.SearchOption = void 0;
var SearchOption;
(function (SearchOption) {
    SearchOption[SearchOption["InMatch"] = 0] = "InMatch";
    SearchOption[SearchOption["OutMatch"] = 1] = "OutMatch";
    SearchOption[SearchOption["InMatchActive"] = 2] = "InMatchActive";
    SearchOption[SearchOption["OutMatchActive"] = 3] = "OutMatchActive";
    SearchOption[SearchOption["CurrentSortingMode"] = 4] = "CurrentSortingMode";
})(SearchOption = exports.SearchOption || (exports.SearchOption = {}));
var SortingMode;
(function (SortingMode) {
    SortingMode[SortingMode["ETA_ASC"] = 0] = "ETA_ASC";
    SortingMode[SortingMode["ETA_DEC"] = 1] = "ETA_DEC";
})(SortingMode = exports.SortingMode || (exports.SortingMode = {}));
var SearchParams = /** @class */ (function () {
    function SearchParams(inMatchTuple, outMatchTuple, isInMatchActiveTuple, isOutMatchActiveTuple, sortingModeTuple) {
        this.inMatch = inMatchTuple[0];
        this.inMatchSetter = inMatchTuple[1];
        this.outMatch = outMatchTuple[0];
        this.outMatchSetter = outMatchTuple[1];
        this.inMatchActive = isInMatchActiveTuple[0];
        this.inMatchActiveSetter = isInMatchActiveTuple[1];
        this.outMatchActive = isOutMatchActiveTuple[0];
        this.outMatchActiveSetter = isOutMatchActiveTuple[1];
        this.sortingMode = sortingModeTuple[0], this.sortingModeSetter = sortingModeTuple[1];
    }
    SearchParams.prototype.setter = function (object, value) {
        if (object === SearchOption.InMatch) {
            return this.inMatchSetter(value);
        }
        else if (object === SearchOption.OutMatch) {
            return this.outMatchSetter(value);
        }
        else if (object === SearchOption.InMatchActive) {
            return this.inMatchActiveSetter(value);
        }
        else if (object === SearchOption.OutMatchActive) {
            return this.outMatchActiveSetter(value);
        }
        else if (object === SearchOption.CurrentSortingMode) {
            return this.sortingModeSetter(value);
        }
        throw object;
    };
    SearchParams.prototype.getter = function (object) {
        if (object === SearchOption.InMatch) {
            return this.inMatch;
        }
        else if (object === SearchOption.OutMatch) {
            return this.outMatch;
        }
        else if (object === SearchOption.InMatchActive) {
            return this.inMatchActive;
        }
        else if (object === SearchOption.OutMatchActive) {
            return this.outMatchActive;
        }
        else if (object === SearchOption.CurrentSortingMode) {
            return this.sortingMode;
        }
        throw object;
    };
    SearchParams.prototype.matchesOnOutput = function (recipe) {
        var _this = this;
        if (this.outMatchActive) {
            return recipe["Outputs"].some(function (puOutput) { return puOutput["Ticker"] === _this.outMatch; });
        }
        else {
            return true;
        }
    };
    SearchParams.prototype.matchesOnInput = function (recipe) {
        var _this = this;
        if (this.inMatchActive) {
            return recipe["Inputs"].some(function (puInput) { return puInput["Ticker"] === _this.inMatch; });
        }
        else {
            return true;
        }
    };
    SearchParams.prototype.matchableWords = function () {
        if (this.inMatchActive) {
            return [this.inMatch, this.outMatch];
        }
        else {
            return [this.outMatch];
        }
    };
    return SearchParams;
}());
exports.SearchParams = SearchParams;
