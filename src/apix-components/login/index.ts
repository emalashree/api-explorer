/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Type } from "@angular/core";
import { LoginComponent } from './login.component';

export * from './login.component';
export * from "./apix-auth.service";

export const LOGIN_DIRECTIVES: Type<any>[] = [
    LoginComponent,
];
