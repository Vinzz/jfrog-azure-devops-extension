const testUtils = require('../../../testUtils');
const path = require('path');

const TEST_NAME = 'npm';

let inputs = {
    command: 'Download',
    fileSpec: JSON.stringify({
        files: [
            {
                pattern: testUtils.getRepoKeys().npmLocalRepo,
                target: path.join(testUtils.getLocalTestDir(TEST_NAME), '2', '/'),
                flat: 'true'
            }
        ]
    }),
    failNoOp: true,
    dryRun: false,
    insecureTls: false,
    validateSymlinks: false,
    specSource: 'taskConfiguration'
};

testUtils.runArtifactoryTask(testUtils.generic, {}, inputs);
