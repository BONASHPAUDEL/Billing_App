import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class SignupComponent {
  email: string | undefined;
  password: string | undefined;

  onSignup() {
    console.log('Signup form submitted', { email: this.email, password: this.password });
  }
}


// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent {
// onSignup() {
// throw new Error('Method not implemented.');
// }
//   signupForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.signupForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
//     });
//   }

//   onSubmit() {
//     if (this.signupForm.valid) {
//       console.log('Form Submitted!', this.signupForm.value);
//     }
//   }
// }