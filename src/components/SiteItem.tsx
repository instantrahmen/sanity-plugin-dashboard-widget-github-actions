import React from 'react'
import DefaultButton from 'part:@sanity/components/buttons/default'
import styles from './SiteItem.css'
import { DeployAction, Site } from '../types'
import { v4 as uuid } from 'uuid'
interface Props {
  site: Site
  onDeploy: DeployAction
}

export default class SiteItem extends React.Component<Props> {
  state = {
    badgeSuffix: '',
    buttonDisabled: false,
    // buttonText: 'Deploy',
    imageUrl: '',
  }

  private imgInterval?: any

  async updateImage() {
    this.setState({ badgeSuffix: uuid() }, () => {
      this.updateImageUrl()
    })
  }

  componentDidMount() {
    this.updateImage()
    this.imgInterval = window.setInterval(() => {
      this.updateImage()
    }, 10000)
  }

  componentWillUnmount() {
    window.clearInterval(this.imgInterval)
  }

  handleDeployButtonClicked = (_: MouseEvent) => {
    this.props.onDeploy(this.props.site)

    this.setState({ buttonDisabled: true })
    setTimeout(() => {
      this.updateImage()
    }, 5000)

    setTimeout(() => {
      this.setState({ buttonDisabled: false })
    }, 20000)
  }

  private updateImageUrl() {
    const { site } = this.props
    this.setState({
      imageUrl: `https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/instantrahmen/19c87ce1f1083bf152221bdac86f1c7c/raw/tsukimoon-status-badge.json?random=${this.state.badgeSuffix}`,
    })
  }

  private renderLinks() {
    const { site } = this.props
    if (!site.url) {
      return null
    }
    return (
      <>
        {' ('}
        {site.url && (
          <span>
            <a href={site.url} target={'blank'}>
              view
            </a>
          </span>
        )}
        {')'}
      </>
    )
  }

  render() {
    const { site } = this.props
    const buttonProps = {
      disabled: this.state.buttonDisabled,
    }
    return (
      <li className={styles.root}>
        <div className={styles.status}>
          <h4 className={styles.title}>
            {site.title}
            {this.renderLinks()}
          </h4>
          <div>
            {/* <img src={this.state.imageUrl} /> */}
            <svg height="20">
              <image xlinkHref={this.state.imageUrl} height="20" />
            </svg>
          </div>
        </div>
        <div className={styles.actions}>
          <DefaultButton
            inverted
            onClick={this.handleDeployButtonClicked}
            {...buttonProps}
          >
            {this.state.buttonDisabled ? 'Deploying...' : 'Deploy'}
          </DefaultButton>
        </div>
      </li>
    )
  }
}
