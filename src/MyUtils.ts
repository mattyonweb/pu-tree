enum SearchOption {
    InMatch, OutMatch, IsInMatchActive
}

class SearchParams {
    private inMatch: string;
    private outMatch: string;
    private isInMatchActive: boolean;

    private inMatchSetter: CallableFunction;
    private outMatchSetter: CallableFunction;
    private isInMatchActiveSetter: CallableFunction;

    constructor(inMatchTuple, outMatchTuple, isInMatchActiveTuple) {
        this.inMatch = inMatchTuple[0];
        this.inMatchSetter = inMatchTuple[1];

        this.outMatch = outMatchTuple[0];
        this.outMatchSetter = outMatchTuple[1];

        this.isInMatchActive = isInMatchActiveTuple[0];
        this.isInMatchActiveSetter = isInMatchActiveTuple[1];
    }

    setter(object: SearchOption, value: any) {
        if (object === SearchOption.InMatch) {
            return this.inMatchSetter(value);
        } else if (object === SearchOption.OutMatch) {
            return this.outMatchSetter(value);
        } else if (object === SearchOption.IsInMatchActive) {
            return this.isInMatchActiveSetter(value);
        }

        throw object;
    }

    getter(object: SearchOption) {
        if (object === SearchOption.InMatch) {
            return this.inMatch;
        } else if (object === SearchOption.OutMatch) {
            return this.outMatch;
        } else if (object === SearchOption.IsInMatchActive) {
            return this.isInMatchActive;
        }

        throw object;
    }
}