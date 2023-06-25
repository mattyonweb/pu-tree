export enum SearchOption {
    InMatch, OutMatch,
    InMatchActive, OutMatchActive
}

export class SearchParams {
    private inMatch: string;
    private outMatch: string;
    private inMatchActive: boolean;
    private outMatchActive: boolean;

    private inMatchSetter: CallableFunction;
    private outMatchSetter: CallableFunction;
    private inMatchActiveSetter: CallableFunction;
    private outMatchActiveSetter: CallableFunction;

    constructor(inMatchTuple, outMatchTuple, isInMatchActiveTuple, isOutMatchActiveTuple) {
        this.inMatch = inMatchTuple[0];
        this.inMatchSetter = inMatchTuple[1];

        this.outMatch = outMatchTuple[0];
        this.outMatchSetter = outMatchTuple[1];

        this.inMatchActive = isInMatchActiveTuple[0];
        this.inMatchActiveSetter = isInMatchActiveTuple[1];

        this.outMatchActive = isOutMatchActiveTuple[0];
        this.outMatchActiveSetter = isOutMatchActiveTuple[1];
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


