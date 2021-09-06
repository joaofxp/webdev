import { DebugElement } from '@angular/core';
import {
    ComponentFixture,
    fakeAsync,
    TestBed,
    tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AlertButtonComponent } from './alert-button.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { MessageService } from '../message.service';
import { of } from 'rxjs';

describe('AlertButtonComponent', () => {
    let component: AlertButtonComponent;
    let fixture: ComponentFixture<AlertButtonComponent>;
    let de: DebugElement;

    // let serviceStub: any;

    let service: MessageService;
    let spy: jasmine.Spy;

    beforeEach(async () => {
        // serviceStub = {
        //     getContent: () => of('You have been warned'),
        // };

        await TestBed.configureTestingModule({
            imports: [
                AngularFireModule.initializeApp(environment.firebaseConfig),
                AngularFireDatabaseModule,
            ],
            declarations: [AlertButtonComponent],
            providers: [MessageService],
            // providers: [{ MessageService, useValue: serviceStub }],
        }).compileComponents(); //compila template e css
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AlertButtonComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        service = de.injector.get(MessageService);
        spy = spyOn(service, 'getContent').and.returnValue(
            of('You have been warned')
        );

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('should have a message with `warn`', () => {
    //     component.content.subscribe((content) => {
    //         expect(component.content).toContain('warn');
    //     });
    // });

    it('should have a severity greater than 2', () => {
        expect(component.severity).toBeGreaterThan(2);
    });

    it('should have an H1 tag of `Alert Button`', () => {
        expect(de.query(By.css('h1')).nativeElement.innerText).toBe(
            'Alert Button'
        );
        // expect(
        //     fixture.nativeElement.querySelector('h1')?.textContent
        // ).toContain('Alert Button');
    });

    it('should toggle the message boolean', () => {
        expect(component.hideContent).toBeTruthy;
        component.toggle();
        expect(component.hideContent).toBeFalsy;
    });

    it('should toggle the message boolean asynchronously', fakeAsync(() => {
        expect(component.hideContent).toBeTruthy;
        component.toggleAsync();
        tick(500); //waitFor500MiliSeconds
        expect(component.hideContent).toBeFalsy;
    }));

    it('should have message content defined from an observable', () => {
        component.content.subscribe((content) => {
            expect(content).toBeDefined();
            expect(content).toBe('You have been warned');
        });
    });

    it('should call getContent one time and update the view', () => {
        expect(spy).toHaveBeenCalled();
        expect(spy.calls.all().length).toEqual(1);

        // expect(
        //     fixture.nativeElement.querySelector('.message-body')?.textContent
        // ).toContain('warn');

        expect(
            de.query(By.css('.message-body')).nativeElement.innerText
        ).toContain('warn');
    });
});
