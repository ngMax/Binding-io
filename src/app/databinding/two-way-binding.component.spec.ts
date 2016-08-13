/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TwoWayBindingComponent } from './two-way-binding.component';

describe('Component: TwoWayBinding', () => {
  it('should create an instance', () => {
    let component = new TwoWayBindingComponent();
    expect(component).toBeTruthy();
  });
});
