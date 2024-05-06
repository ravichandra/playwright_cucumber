const config = {
    paths: ['tests/features/*.feature'],
    require: ['tests/steps/*.steps.ts'],
    requireModule: ['ts-node/register'],
    format: [
        'summary',
        'progress-bar',
        'html:test-results/cucumber-report.html',
        //'json:test-results/cucumber-report.json'
    ]  
};

module.exports = {
    default: config
}