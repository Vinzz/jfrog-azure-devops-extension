const testUtils = require('../../../testUtils');

let inputs = {
    buildName: 'npm Test',
    buildNumber: '1',
    collectBuildInfo: true,
    workingFolder: 'npm',
    command: 'pack and publish',
    targetRepo: testUtils.getRepoKeys().npmLocalRepo,
    arguments: ''
};

testUtils.runArtifactoryTask(testUtils.npm, {}, inputs);
