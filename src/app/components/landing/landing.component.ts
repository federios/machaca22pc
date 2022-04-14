import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { SubscribeService } from 'src/app/services/subscribe.service';
import Swal from 'sweetalert2';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { ModalComponent } from 'src/app/services/modal/modal.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  menuClick = 0;
  subscribeData: any = <any>{};
  modalRef: MDBModalRef = new MDBModalRef;

  constructor( private meta: Meta, private title: Title, private subscribeService: SubscribeService, private modal: MDBModalService) { 

    this.title.setTitle('Machaca');

    this.meta.updateTag({ property: 'og:title', content: 'MACHACA' });
    this.meta.updateTag({ property: 'og:image', content: '/assets/images/logo.webp' }); 
    this.meta.updateTag({ property: 'og:description', content: 'Machaca Festival 2022' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.machaca.mx/' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'description', content: 'Machaca Festival 2022' }); 
    this.meta.updateTag({ name: 'robots', content: 'index, follow' }); 
  }

  ngOnInit(): void {
  }

  openNav() {
    this.menuClick++;

    if (this.menuClick%2==0) {
      document.getElementById("myNav")!.style.height = "0%";
      document.getElementById("contentId")!.style.overflow = "inherit";
      document.getElementById("footerId")!.style.overflow = "inherit";
      document.getElementById("contentId")!.style.height = "auto";
    } else {
      document.getElementById("myNav")!.style.height = "100%";
      document.getElementById("contentId")!.style.overflow = "hidden";
      document.getElementById("footerId")!.style.overflow = "hidden";
      document.getElementById("contentId")!.style.height = "0vh";
    }
  }

  subscribe(subscribeForm: NgForm) {
    if (subscribeForm.invalid) {
      return;
    }
    this.subscribeService.subscribeToList(this.subscribeData)
      .subscribe(res => {
        Swal.fire({
          title: '¡Te enviaremos todas las noticias de Machaca!',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#ff6d00',
          confirmButtonText: 'Aceptar',
          color: '#fff',
          background: '#e35aaa',
          iconColor: '#fed62a'
        });
      }, err => {
        console.log(err);
      })
      subscribeForm.reset();
  }

  menu1() {
    document.getElementById('song-1')!.style.transform = "translatex(0) scale(1)";
    document.getElementById('song-1')!.style.opacity = "1";
    document.getElementById('song-1')!.style.zIndex = "1";

    document.getElementById('song-2')!.style.transform = "translatex(40%) scale(.8)";
    document.getElementById('song-2')!.style.opacity = ".4";
    document.getElementById('song-2')!.style.zIndex = "0";

    document.getElementById('song-3')!.style.transform = "translatex(-40%) scale(.8)";
    document.getElementById('song-3')!.style.opacity = ".4";
    document.getElementById('song-3')!.style.zIndex = "0";

    document.getElementById('tc1')!.style.backgroundColor = "#fff";
    document.getElementById('tc2')!.style.backgroundColor = "transparent";
    document.getElementById('tc3')!.style.backgroundColor = "transparent";
  }

  menu2() {
    document.getElementById('song-1')!.style.transform = "translatex(-40%) scale(.8)";
    document.getElementById('song-1')!.style.opacity = ".4";
    document.getElementById('song-1')!.style.zIndex = "0";

    document.getElementById('song-2')!.style.transform = "translatex(0) scale(1)";
    document.getElementById('song-2')!.style.opacity = "1";
    document.getElementById('song-2')!.style.zIndex = "1";

    document.getElementById('song-3')!.style.transform = "translatex(40%) scale(.8)";
    document.getElementById('song-3')!.style.opacity = ".4";
    document.getElementById('song-3')!.style.zIndex = "0";

    document.getElementById('tc1')!.style.backgroundColor = "transparent";
    document.getElementById('tc2')!.style.backgroundColor = "#fff";
    document.getElementById('tc3')!.style.backgroundColor = "transparent";
  }

  menu3() {
    document.getElementById('song-1')!.style.transform = "translatex(40%) scale(.8)";
    document.getElementById('song-1')!.style.opacity = "1";
    document.getElementById('song-1')!.style.zIndex = "1";

    document.getElementById('song-2')!.style.transform = "translatex(-40%) scale(.8)";
    document.getElementById('song-2')!.style.opacity = ".4";
    document.getElementById('song-2')!.style.zIndex = "0";

    document.getElementById('song-3')!.style.transform = "translatex(0) scale(1)";
    document.getElementById('song-3')!.style.opacity = "1";
    document.getElementById('song-3')!.style.zIndex = "1";

    document.getElementById('tc1')!.style.backgroundColor = "transparent";
    document.getElementById('tc2')!.style.backgroundColor = "transparent";
    document.getElementById('tc3')!.style.backgroundColor = "#fff";
  }

  openSuc() {
    this.modalRef = this.modal.show(ModalComponent);
  }

}
