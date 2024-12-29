// import { Component } from '@angular/core';
// import { SignupComponent } from '../signup/signup.component';
// import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
// import { trigger, style, animate, transition, query } from "@angular/animations";

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [SignupComponent, RouterOutlet],
//   templateUrl: './signup.component.html',
//   styles: ``,
//   animations: [
//     trigger('routerFadeIn', [
//       transition('* <=> *', [
//         query(':enter', [
//           style({ opacity: 0 }),
//           animate('1s ease-in-out', style({ opacity: 1 }))
//         ], { optional: true }),
//       ])
//     ])
//   ]
// })
// export class UserComponent {

//   constructor(private context: ChildrenOutletContexts) { }

//   getRouteUrl() {
//     return this.context.getContext('primary')?.route?.url;
//   }

// }
// // import { ComponentFixture, TestBed } from '@angular/core/testing';

// // import { SignupComponent } from './signup.component';

// // describe('SignupComponent', () => {
// //   let component: SignupComponent;
// //   let fixture: ComponentFixture<SignupComponent>;

// //   beforeEach(async () => {
// //     await TestBed.configureTestingModule({
// //       declarations: [SignupComponent]
// //     })
// //     .compileComponents();

// //     fixture = TestBed.createComponent(SignupComponent);
// //     component = fixture.componentInstance;
// //     fixture.detectChanges();
// //   });

// //   it('should create', () => {
// //     expect(component).toBeTruthy();
// //   });
// // });
