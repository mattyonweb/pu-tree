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
    private outMatch: string;
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
        this.inMatchSetter = inMatchTuple[1];

        this.outMatch = outMatchTuple[0];
        this.outMatchSetter = outMatchTuple[1];

        this.inMatchActive = isInMatchActiveTuple[0];
        this.inMatchActiveSetter = isInMatchActiveTuple[1];

        this.outMatchActive = isOutMatchActiveTuple[0];
        this.outMatchActiveSetter = isOutMatchActiveTuple[1];

        [this.sortingMode, this.sortingModeSetter] = sortingModeTuple;
    }

    setter(object: SearchOption, value: any) {
        if (object === SearchOption.InMatch) {
            return this.inMatchSetter(value);
        } else if (object === SearchOption.OutMatch) {
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

    matchesOnOutput(recipe): boolean {
        if (this.outMatchActive) {
            return recipe["Outputs"].some(puOutput => puOutput["Ticker"] === this.outMatch);
        } else {
            return true;
        }
    }

    matchesOnInput(recipe): boolean {
        if (this.inMatchActive) {
            return recipe["Inputs"].some(puInput => puInput["Ticker"] === this.inMatch);
        } else {
            return true;
        }
    }

    matchableWords(): string[] {
        if (this.inMatchActive) {
            return [this.inMatch, this.outMatch];
        } else {
            return [this.outMatch];
        }
    }
}


