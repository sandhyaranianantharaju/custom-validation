import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
//import { UserInfo } from "os";
import { UserInfo } from "./user-info.model";
import { RxFormBuilder } from '@rxweb/reactive-form-validators';






@Component({
    selector: 'app-user-info-edit',
    templateUrl: './user-info-edit.component.html'
})
export class UserInfoEditComponent implements OnInit {

    userInfoFormGroup: FormGroup | undefined

    constructor(
        private formBuilder: RxFormBuilder,		private http: HttpClient

    ) { }

    ngOnInit() {
        this.http.get('assets/user-info-data.json').subscribe((userInfo: any) => {
            this.userInfoFormGroup = this.formBuilder.formGroup<UserInfo>(UserInfo,userInfo);
        })
    }
}
