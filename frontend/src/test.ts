// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { getTestBed } from '@angular/core/testing';

declare const require: {
  context(
    path: string, // eslint-disable-line no-unused-vars
    deep?: boolean, // eslint-disable-line no-unused-vars
    filter?: RegExp // eslint-disable-line no-unused-vars
  ): {
    <T>(id: string): T; // eslint-disable-line no-unused-vars
    keys(): string[];
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
