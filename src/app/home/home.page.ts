import { Component } from '@angular/core';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
const  { GoogleAuth } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public user = null;
  constructor() {}

  async googleSignup() {

    const googleUser = await GoogleAuth.signIn() as any;
    console.log('my user: ', googleUser);
    this.user = googleUser;
  }

  async signOut() {
    await GoogleAuth.signOut();
    this.user = null;
  }

  async refreshToken() {
    const response = await GoogleAuth.refresh();
    console.log( "refresh: ", response);
  }


}
