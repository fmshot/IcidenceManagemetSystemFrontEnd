import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { first } from "rxjs/operators";

// import { AuthenticationService } from '@app/_services';
import { AuthenticationService } from "../../_services";

@Component({
  selector: "app-icmlogin",
  templateUrl: "./icmlogin.component.html",
  styleUrls: ["./icmlogin.component.css"]
})
export class IcmloginComponent implements OnInit {
  loginFormGroup: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = "";

  static loginForm = () => {
    return {
      username: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl("")
    };
  };

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.loginFormGroup = this.formBuilder.group(IcmloginComponent.loginForm());

    // redirect to home if already logged in
    //    if (this.authenticationService.currentUserValue) {
    //     this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginFormGroup.controls;
  }

  onSubmit() {
    console.log("fff", this.f.username.value);
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginFormGroup.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          // this.router.navigate([this.returnUrl]);
          this.router.navigateByUrl("/home");
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );
    // this.router.navigateByUrl('/home');
    // this.currentUserSubject.next(user);
    console.log("usernammmm");
  }

  onSubmit4Register() {
    console.log("fff", this.f.username.value);
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginFormGroup.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .register(this.loginFormGroup.value)
      .pipe(first())
      .subscribe(
        data => {
          // this.router.navigate([this.returnUrl]);
          this.router.navigateByUrl("/home");
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );
    // this.router.navigateByUrl('/home');
    // this.currentUserSubject.next(user);
    console.log("usernammmm");
  }
}
