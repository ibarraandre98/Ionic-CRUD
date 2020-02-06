import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl:NavController,
    private router:Router,

  ) {}

    crearUsuario(){
      this.navCtrl.navigateForward('crear-usuario');
    }

    verUsuarios(){
      this.navCtrl.navigateForward('ver-usuarios');
    }
}
