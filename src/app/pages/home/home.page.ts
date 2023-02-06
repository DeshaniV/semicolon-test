import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  qrString = 'https://www.youtube.com/';
  scannedResult: any = '';
  content_visibility: any = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  async checkPermission() {
    try {
      const status = await BarcodeScanner.checkPermission({ force: true });
      return Boolean(status.granted);
    } catch (e) {
      console.log(e);
      return false;
    }

  }

  async startScan() {
    try {
      const permission = await this.checkPermission();
      if (!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log('result------>', result);
      BarcodeScanner.showBackground();
      document.querySelector('body').classList.remove('scanner-active');
      this.content_visibility = '';
      if (result?.hasContent) {
        this.scannedResult = result.content;
        console.log(this.scannedResult);
      }
    } catch (e) {
      console.log(e);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility = '';
  }

  ngOnDestroy() {
    this.stopScan();
  }

  addSkill() {
    setTimeout(() => {
      this.router.navigate(['add-skill']);
    }, 500)
  }

  displayFullDetails() {
    setTimeout(() => {
      this.router.navigate(['full-details']);
    }, 500)
  }

}
