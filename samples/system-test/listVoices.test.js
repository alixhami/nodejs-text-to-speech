/**
 * Copyright 2018, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable */

'use strict';

const path = require(`path`);
const test = require(`ava`);
const tools = require(`@google-cloud/nodejs-repo-tools`);

const cmd = `node listVoices.js`;
const cwd = path.join(__dirname, `..`);

test.before(tools.checkCredentials);

test(`should list voices`, async t => {
  const output = await tools.runAsync(`${cmd} list-voices`, cwd);
  t.true(output.includes(`SSML Voice Gender: FEMALE`));
  t.true(output.includes(`Natural Sample Rate Hertz: 24000`));
});
