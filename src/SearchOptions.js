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
        this.inMatchWords = this.parseMatchText(this.inMatch);
        this.inMatchSetter = inMatchTuple[1];
        this.outMatch = outMatchTuple[0];
        this.outMatchWords = this.parseMatchText(this.outMatch);
        this.outMatchSetter = outMatchTuple[1];
        this.inMatchActive = isInMatchActiveTuple[0];
        this.inMatchActiveSetter = isInMatchActiveTuple[1];
        this.outMatchActive = isOutMatchActiveTuple[0];
        this.outMatchActiveSetter = isOutMatchActiveTuple[1];
        this.sortingMode = sortingModeTuple[0];
        this.sortingModeSetter = sortingModeTuple[1];
    }
    SearchParams.prototype.setter = function (object, value) {
        if (object === SearchOption.InMatch) {
            this.inMatchWords = this.parseMatchText(value);
            return this.inMatchSetter(value);
        }
        else if (object === SearchOption.OutMatch) {
            this.outMatchWords = this.parseMatchText(value);
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
    SearchParams.prototype.parseMatchText = function (s) {
        // only supports "AND"
        return s.replace(" ", "").split(",");
    };
    SearchParams.prototype.matchesOnOutput = function (recipe) {
        if (!this.outMatchActive) {
            return true;
        }
        // TODO: ricalcolare lo split ogni volta è costoso, potresti farlo una volta
        //  sola nel momento in cui aggiorni l'inputMatch, ma questo ti costringe a
        //  cambiare un po' di cose
        var recipeOutputs = recipe["Outputs"].map(function (i) { return i["Ticker"]; });
        for (var _i = 0, _a = this.outMatchWords; _i < _a.length; _i++) {
            var element = _a[_i];
            if (!recipeOutputs.includes(element)) {
                return false;
            }
        }
        return true;
        // return recipe["Outputs"].some(puOutput => puOutput["Ticker"] === this.outMatch);
    };
    SearchParams.prototype.matchesOnInput = function (recipe) {
        if (!this.inMatchActive) {
            return true;
        }
        // TODO: ricalcolare lo split ogni volta è costoso, potresti farlo una volta
        //  sola nel momento in cui aggiorni l'inputMatch, ma questo ti costringe a
        //  cambiare un po' di cose
        var recipeInputs = recipe["Inputs"].map(function (i) { return i["Ticker"]; });
        for (var _i = 0, _a = this.inMatchWords; _i < _a.length; _i++) {
            var element = _a[_i];
            if (!recipeInputs.includes(element)) {
                return false;
            }
        }
        return true;
    };
    SearchParams.prototype.matchableWords = function () {
        var out = [];
        if (this.outMatchActive) {
            out = out.concat(this.outMatchWords);
        }
        if (this.inMatchActive) {
            out = out.concat(this.inMatchWords);
        }
        return out;
    };
    return SearchParams;
}());
exports.SearchParams = SearchParams;
