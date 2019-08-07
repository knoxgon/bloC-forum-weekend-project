import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    const loginContainer = document.getElementById('login-modal-container');
    const closeButton = document.getElementsByClassName('login-cancel-button')[0];
    const loginButton = document.getElementById('loginBtn');

    window.onclick = (event) => {
      if (event.target === loginContainer || event.target === closeButton)
        loginContainer.style.display = 'none';
      else if (event.target === loginButton )
        loginContainer.style.display = 'block';
    };
  }
}
