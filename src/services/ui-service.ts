import { Service, StatefulService } from "react-service-locator";

export interface IUiServiceState {
    // alerts: [];
}


@Service()
export class UiService extends StatefulService<IUiServiceState> {
    static readonly initialState: IUiServiceState = {
        // alerts: [],
    };

    constructor() {
        super(UiService.initialState);
    }

    public addRawAlert() {
       
    }
}