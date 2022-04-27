import {By} from '@angular/platform-browser';
import {async, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {SpinnerService} from './spinner.service';
import {SpinnerComponent} from './spinner.component';

describe('Spinner Component', () => {

  let spinnerService: SpinnerService;

  beforeEach(function () {
    TestBed.configureTestingModule({
      declarations: [SpinnerComponent],
      providers: [SpinnerService]
    }).compileComponents();

  });

  it(' should not show the spinner div it is not active ', async(() => {
    const fixture = TestBed.createComponent(SpinnerComponent);
    const spinnerDiv = fixture.debugElement.query(By.css('.loading-indicator'));
    expect(null).toEqual(spinnerDiv);
  }));

  it(' should show the spinner div when start called ', fakeAsync(() => {
    const waitText = 'Load';
    const fixture = TestBed.createComponent(SpinnerComponent);
    spinnerService = fixture.debugElement.injector.get(SpinnerService);
    spinnerService.start(waitText);
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const spinnerDiv = fixture.debugElement.query(By.css('#msg')).nativeElement.textContent;
      expect(waitText).toEqual(spinnerDiv);
    });
  }));

  it(' should not show the spinner div when stop called ', fakeAsync(() => {
    const fixture = TestBed.createComponent(SpinnerComponent);
    spinnerService = fixture.debugElement.injector.get(SpinnerService);
    spinnerService.stop();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const spinnerDiv = fixture.debugElement.query(By.css('.loading-indicator'));
      expect(null).toEqual(spinnerDiv);
    });
  }));

  it(' should return false spinner active if stop called ', fakeAsync(() => {
    const fixture = TestBed.createComponent(SpinnerComponent);
    spinnerService = fixture.debugElement.injector.get(SpinnerService);
    spinnerService.stop();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const activeStatus = spinnerService.getActive();
      expect(false).toEqual(activeStatus);
    });
  }));

  it(' should return true of spinner active if stop called ', fakeAsync(() => {
    const fixture = TestBed.createComponent(SpinnerComponent);
    spinnerService = fixture.debugElement.injector.get(SpinnerService);
    spinnerService.start('Load');
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const activeStatus = spinnerService.getActive();
      expect(true).toEqual(activeStatus);
    });
  }));


});
