import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  option1: boolean = false;
  option2: boolean = false;
  option3: boolean = false;
  rangeValue: number = 50;
  checkbox1: boolean = false;
  checkbox2: boolean = false;
  checkbox3: boolean = false;
  selectedRadio: string = 'radio1';

  constructor() {
    this.loadPreferences();
  }

  async savePreference(key: string, value: any) {
    await Preferences.set({
      key: key,
      value: JSON.stringify(value),
    });
  }

  async loadPreferences() {
    this.option1 = JSON.parse((await Preferences.get({ key: 'option1' })).value || 'false');
    this.option2 = JSON.parse((await Preferences.get({ key: 'option2' })).value || 'false');
    this.option3 = JSON.parse((await Preferences.get({ key: 'option3' })).value || 'false');
    this.rangeValue = JSON.parse((await Preferences.get({ key: 'rangeValue' })).value || '50');
    this.checkbox1 = JSON.parse((await Preferences.get({ key: 'checkbox1' })).value || 'false');
    this.checkbox2 = JSON.parse((await Preferences.get({ key: 'checkbox2' })).value || 'false');
    this.checkbox3 = JSON.parse((await Preferences.get({ key: 'checkbox3' })).value || 'false');

    const radioValue = (await Preferences.get({ key: 'selectedRadio' })).value;
    this.selectedRadio = radioValue ? JSON.parse(radioValue) : 'radio1';
  }

  async resetPreferences() {
    await Preferences.clear();
    this.option1 = false;
    this.option2 = false;
    this.option3 = false;
    this.rangeValue = 50;
    this.checkbox1 = false;
    this.checkbox2 = false;
    this.checkbox3 = false;
    this.selectedRadio = 'radio1';
  }
}

