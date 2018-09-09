import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'flogo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/flogo_RGB_HEX-1024.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'ilogo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/IG_Glyph_Fill.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'slogo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/SC.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'splogo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/spotify.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'alogo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/apple-black.svg')
    );
  }

  ngOnInit() {
  }

}
