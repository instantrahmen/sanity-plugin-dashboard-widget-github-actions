import React from 'react';
import { DeployAction, Site } from '../types';
interface Props {
    site: Site;
    onDeploy: DeployAction;
}
export default class SiteItem extends React.Component<Props> {
    state: {
        badgeSuffix: number;
        buttonDisabled: boolean;
        imageUrl: string;
    };
    private imgInterval?;
    updateImage(): Promise<void>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleDeployButtonClicked: (_: MouseEvent) => void;
    private updateImageUrl;
    private renderLinks;
    render(): JSX.Element;
}
export {};
