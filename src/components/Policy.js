import React from 'react';

export default class Policy extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: []
    }
  }

  toggleDetails (index) {
    let selected = this.state.selected.slice();
    selected[index] = !selected[index];
    this.setState({ selected });
  }

  renderMappedPolicy () {
    let { policyHolderName, policies, policyType, policyHolders } = this.props;
    return policies.filter((policy) =>
      policy.type === policyType
    ).map((policy, i) =>
      <div className="policy-item" key={i} onClick={() => this.toggleDetails(i)}>
        <div className="policy-holder">Policy Holder: <span>
            {
            policyHolderName = policyHolders.map(function (policyHolder) {
                let policyHolderArr = [];
                policyHolderArr.push(policyHolder);
                for (let i = 0; i < policyHolderArr.length; i++) {
                  if (policyHolderArr[i].policies.includes(policy.policyNumber)) {
                    return policyHolderArr[i].name;
                  }
                }
              }
            )}
          </span>
        </div>
        <div className="policy-number">Policy Number: <span>{policy.policyNumber}</span></div>
        <div className="policy-type">Policy Type: <span>{policy.type}</span></div>
        <div className={`policy-${policyType === 'HOME' ?
          'address' :
          'vehicle'}`}>
              <span>
              {policyType === 'HOME' ?
                ('Address: ' + policy.address) :
                ('Vehicle: ' + policy.vehicle)}
              </span>
        </div>
        {(this.state.selected[i]) ? <div className="policy-details">
          <div className="policy-enrollment">Enrollment Date: <span>{policy.enrollmentDate}</span></div>
          <div className="policy-amount-due">Amount Due: <span>${policy.amountDue}</span></div>
        </div> : null}
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.renderMappedPolicy()}
      </div>
    )
  }
}



