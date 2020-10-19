import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doument.DownloaderComponent } from './doument.downloader.component';

describe('Doument.DownloaderComponent', () => {
  let component: Doument.DownloaderComponent;
  let fixture: ComponentFixture<Doument.DownloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Doument.DownloaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Doument.DownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
