import React from 'react';

export default class Policy extends React.Component {
  render() {
    let policyItem, policyHolderName;
    policyItem = this.props.policies.filter((policy) =>
        policy.type === this.props.policyType
      ).map((policy) =>
        <div className="policy-item" key={policy.policyNumber}>
          <div className="policy-holder">Policy Holder: <span>{
            policyHolderName = this.props.policyHolders.map(function(policyHolder) {
              let policyHolderArr = [];
              policyHolderArr.push(policyHolder);
              for (let i = 0; i < policyHolderArr.length; i++) {
                if (policyHolderArr[i].policies.includes(policy.policyNumber)) {
                  return policyHolderArr[i].name;
                }
              }
            }
          )}</span></div>
          <div className="policy-number">Policy Number: <span>{policy.policyNumber}</span></div>
          <div className="policy-type">Policy Type: <span>{policy.type}</span></div>
          <div className={`policy-${this.props.policyType === 'HOME' ?
            'address' :
            'vehicle'}`}>
            <span>
            {this.props.policyType === 'HOME' ?
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
    return (
      <div>
        {policyItem}
      </div>
    )
  }
}