'use strict';

const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter(employer => employer.length > 0).map(employer => employer.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const { cash, eu, rus } = sponsors;

const calcCash = (own = 0) => own.reduce((sum, current) => sum + current);
const money = calcCash(cash);
const sumSponsors = [...eu, ...rus, 'unexpected sponsor']

const makeBusiness = ({ owner = 'Sam', director = 'Victor', cash, emp }) => {
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
And we have a sponsors: ${sumSponsors}
Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness({ cash: money, emp: employersNames });