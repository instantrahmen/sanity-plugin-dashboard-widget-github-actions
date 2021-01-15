import { Site, WidgetOptions } from './types';
export declare const props$: (options: WidgetOptions) => import("rxjs").Observable<{
    title: string;
    sites: never[];
    isLoading: boolean;
    onDeploy: () => undefined;
} | {
    sites: {
        id: string;
        name: string | undefined;
        title: string;
        url: string | undefined;
        githubToken: string;
        githubRepo: string;
        githubRepoOwner: string;
        eventType: string;
        eventPayload: string | undefined;
    }[];
    title: string;
    description: string | undefined;
    isLoading: boolean;
    onDeploy: (event: Site) => void;
}>;
