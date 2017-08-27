export default function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        policies: [
          {
            type: 'HOME',
            policyNumber: 'AZ456',
            address: '1337 Main Street',
            enrollmentDate: '10/20/2016',
            amountDue: '123'
          },
          {
            type: 'AUTO',
            policyNumber: 'AZ123',
            vehicle: '2015 Hyundai Sonata',
            enrollmentDate: '08/02/2015',
            amountDue: '50'
          },
          {
            type: 'HOME',
            policyNumber: 'CA456',
            address: '6789 Peoria Drive',
            enrollmentDate: '05/15/2017',
            amountDue: '75'
          },
          {
            type: 'AUTO',
            policyNumber: 'CA123',
            vehicle: '1980 Geo Metro',
            enrollmentDate: '11/04/2015',
            amountDue: '200'
          },
          {
            type: 'HOME',
            policyNumber: 'NV456',
            address: '3721 Some Place',
            enrollmentDate: '07/13/2012',
            amountDue: '75'
          },
          {
            type: 'AUTO',
            policyNumber: 'NV123',
            vehicle: '2017 Toyota Tacoma',
            enrollmentDate: '01/04/2015',
            amountDue: '220'
          }
        ],
        policyHolders: [
          {
            name: 'John Smith',
            policies: ['AZ123', 'AZ456']
          },
          {
            name: 'Jane Doe',
            policies: ['CA123', 'CA456']
          },
          {
            name: 'Some Body',
            policies: ['NV123', 'NV456']
          }
        ]
      });
    }, 300);
  });
}