import {
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { NotFoundComponent } from './not-found.component';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NotFoundComponent
    ]}));

  it('true is true', () => {
    expect(true).toBe(true);
  });
});
