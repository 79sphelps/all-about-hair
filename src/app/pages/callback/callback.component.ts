import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {
  constructor(private auth: AuthService) {
    // Check for authentication and handle if hash present
    console.log('---- here in the callback component ----')
    auth.handleAuth();
  }

  ngOnInit() {
    console.log('---- here in the callback component ngOnInit ----')
  }
}
