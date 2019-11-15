import { Component, OnInit, Input } from '@angular/core';
import {MenuOption} from '../../model/menu-option';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  aboutCompanyMenuOptionName = "About Bantu Medic";
  @Input() aboutCompanyMenuOptionList: MenuOption[];

  @Input() languagesMenuOptionList: MenuOption[];
  currentLanguage = 'EN';
  
  constructor() { }

  ngOnInit() {
  }

}
