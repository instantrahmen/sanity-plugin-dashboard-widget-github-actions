import { Site } from './types';
interface Deployment {
    id: string;
}
interface Action {
    type: string;
    sites?: Site[];
    site?: Site;
    error?: Error;
    deployments?: Deployment[];
}
interface State {
    sites: Site[];
    action: Action;
}
export declare const stateReducer$: import("rxjs").OperatorFunction<Action, State | {
    error: Error | undefined;
    sites: Site[];
    action: Action;
} | {
    sites: (Site | {
        error: Error | undefined;
        id: string;
        title: string;
        name?: string | undefined;
        url?: string | undefined;
        githubToken: string;
        githubRepo: string;
        githubRepoOwner: string;
        eventType: string;
        eventPayload?: string | undefined;
    })[];
    requestSuccessful: boolean;
    action: Action;
}>;
export {};
