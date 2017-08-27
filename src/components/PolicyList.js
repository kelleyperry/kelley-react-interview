import React from 'react';
import getData from 'api/getData';
import '../css/styles.css';

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

  showPolicyHolder(policyNumber) {

    this.state.policyHolders.map((policy) => {
      console.log(policy.name);
      console.log(policy.policies);

      if(typeof policy.policies.includes(policyNumber)) {
        console.log("here's my policy number: " + policyNumber);
        console.log(policy.policies);
        console.log(policy.name);
        this.setState({policyHolder: policy.name});
      }
    })
  }

  render() {
    return (
      <div>
        <label><input type="radio" name="policyTypeRadio" onClick={ () => this.showHomePolicies() }/> Show Home Policies</label>
        <br />
        <label><input type="radio" name="policyTypeRadio" onClick={ () => this.showAutoPolicies() }/> Show Auto Policies</label>
        <h3>Policies: </h3>
        <div className="policy-list">
          {
            this.state.policies.filter((policy) =>
                policy.type === this.state.policyType
            ).map((policy) =>
              <div className="policy-item" key={policy.policyNumber}>
                <div className="policy-holder">Policy Holder: <span>{ () => this.showPolicyHolder('NV123') }</span></div>
                <div className="policy-number">Policy Number: <span>{policy.policyNumber}</span></div>
                <div className="policy-type">Policy Type: <span>{policy.type}</span></div>
                <div className={`policy-${this.state.policyType === 'HOME' ?
                  'address' :
                  'vehicle'}`}>
                    <span>
                      {this.state.policyType === 'HOME' ?
                      ('Address: ' + policy.address) :
                      ('Vehicle: ' + policy.vehicle)}
                    </span>
                  </div>
                <div className="policy-details">
                  <div className="policy-enrollment">Enrollment Date: <span>{policy.enrollmentDate}</span></div>
                  <div className="policy-amount-due">Amount Due: <span>${policy.amountDue}</span></div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}