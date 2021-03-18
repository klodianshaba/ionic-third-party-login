import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private googlePlus: GooglePlus) {}

  onGoogleLogin(): void {
    this.googlePlus.login({webClientId: googleWebClientId} // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
    ).then(res => {
      console.log(res);
    }).catch(err => console.error(err));
  }
}
