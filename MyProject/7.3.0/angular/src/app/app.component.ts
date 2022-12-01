import { Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { SignalRAspNetCoreHelper } from '@shared/helpers/SignalRAspNetCoreHelper';
import { LayoutStoreService } from '@shared/layout/layout-store.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  topbarTheme = 'light';

  menuTheme = 'dim';

  layoutMode = 'light';

  menuMode = 'static';

  isRTL = false;

  inputStyle = 'outlined';

  ripple: boolean;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
  }
}
