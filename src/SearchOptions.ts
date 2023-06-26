export enum SearchOption {
    InMatch, OutMatch,
    InMatchActive, OutMatchActive,
    CurrentSortingMode
}

export enum SortingMode {
    ETA_ASC, ETA_DEC
}


export class SearchParams {
    private inMatch: string;
    private inMatchWords: string[];
    private outMatch: string;
    private outMatchWords: string[];
    private inMatchActive: boolean;
    private outMatchActive: boolean;
    private sortingMode: SortingMode;

    private inMatchSetter: CallableFunction;
    private outMatchSetter: CallableFunction;
    private inMatchActiveSetter: CallableFunction;
    private outMatchActiveSetter: CallableFunction;
    private sortingModeSetter: CallableFunction;

    constructor(inMatchTuple, outMatchTuple, isInMatchActiveTuple, isOutMatchActiveTuple, sortingModeTuple) {
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

    setter(object: SearchOption, value: any) {
        if (object === SearchOption.InMatch) {
            this.inMatchWords = this.parseMatchText(value)
            return this.inMatchSetter(value);
        } else if (object === SearchOption.OutMatch) {
            this.outMatchWords = this.parseMatchText(value);
            return this.outMatchSetter(value);
        } else if (object === SearchOption.InMatchActive) {
            return this.inMatchActiveSetter(value);
        } else if (object === SearchOption.OutMatchActive) {
            return this.outMatchActiveSetter(value);
        } else if (object === SearchOption.CurrentSortingMode) {
            return this.sortingModeSetter(value);
        }

        throw object;
    }

    getter(object: SearchOption) {
        if (object === SearchOption.InMatch) {
            return this.inMatch;
        } else if (object === SearchOption.OutMatch) {
            return this.outMatch;
        } else if (object === SearchOption.InMatchActive) {
            return this.inMatchActive;
        } else if (object === SearchOption.OutMatchActive) {
            return this.outMatchActive;
        } else if (object === SearchOption.CurrentSortingMode) {
            return this.sortingMode;
        }

        throw object;
    }

    parseMatchText(s: string): any[] {
        // only supports "AND"
        return s.replace(" ", "").split(",")
    }
    
    matchesOnOutput(recipe): boolean {
        if (!this.outMatchActive) {
            return true;
        }

        let recipeOutputs: string[] = recipe["Outputs"].map(i => i["Ticker"]);
        for (const element of this.outMatchWords) {
            if (!recipeOutputs.includes(element)) {
                return false;
            }
        }
        return true;

    }

    matchesOnInput(recipe): boolean {
        if (!this.inMatchActive) {
            return true;
        }

        let recipeInputs: string[] = recipe["Inputs"].map(i => i["Ticker"]);
        for (const element of this.inMatchWords) {
            if (!recipeInputs.includes(element)) {
                return false;
            }
        }
        return true;
    }

    matchableWords(): string[] {
        let out: string[] = [];
        if (this.outMatchActive) {
            out = out.concat(this.outMatchWords);
        }
        if (this.inMatchActive) {
            out = out.concat(this.inMatchWords);
        }
        return out;
    }
}


