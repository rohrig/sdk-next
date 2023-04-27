import { initSDK, buildModule } from '@vsf-enterprise/sdk';
import { boilerplateModule, BoilerplateModuleType } from '../../../src';

const sdkConfig = {
  boilerplate: buildModule<BoilerplateModuleType>(boilerplateModule, {
    apiUrl: 'http://localhost:8181/boilerplate',
  }),
};

export const sdk = initSDK<typeof sdkConfig>(sdkConfig);
