import React from 'react';
import getData from 'api/getData';
import '../css/styles.css';
import Policy from './Policy';

export default class PolicyList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      policies: [],
      policyHolders: [],
      policyType: 'HOME'

    };
  }

  componentDidMount() {
    getData().then((data) => {
      this.setState({
        policies: data.policies,
        policyHolders: data.policyHolders
      });
    });
  }

  showHomePolicies() {
    this.setState({policyType: 'HOME'});
  }

  showAutoPolicies() {
    this.setState({policyType: 'AUTO'});
  }

  render() {
    const { policies, policyType, policyHolders } = this.state;
    return (
      <div>
        <label><input type="radio" defaultChecked name="policyTypeRadio" onClick={ () => this.showHomePolicies() }/> Show Home Policies</label>
        <br />
        <label><input type="radio" name="policyTypeRadio" onClick={ () => this.showAutoPolicies() }/> Show Auto Policies</label>
        <h3>Policies: </h3>
        <div className="policy-list">
          <Policy policies={policies} policyType={policyType} policyHolders={policyHolders} />
        </div>
      </div>
    );
  }
}