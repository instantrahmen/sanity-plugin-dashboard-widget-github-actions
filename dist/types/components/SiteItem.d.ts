import React from 'react';
import { DeployAction, Site } from '../types';
interface Props {
    site: Site;
    onDeploy: DeployAction;
}
export default class SiteItem extends React.Component<Props> {
    componentWillUnmount(): void;
    handleDeployButtonClicked: (_: MouseEvent) => void;
    private renderLinks;
    render(): JSX.Element;
}
export {};
