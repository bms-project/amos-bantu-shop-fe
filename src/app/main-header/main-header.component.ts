import {Component, OnInit} from '@angular/core';
import {MenuService} from '../services/navigation/menu.service';
import {MenuOption} from '../model/menu-option';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  aboutCompanyMenuOptionList: MenuOption[] = [];
  languagesMenuOptionList: MenuOption[] = [];
  counter = 0;

  constructor(private menuService: MenuService) {
    console.log('Menu servic test start');
    // this.menuService.getMenuConfig().subscribe((data) => {
    //  console.log(data);
    // });

    this.getMenuConfigurationList();

    console.log('Menu servic test end');
  }

  ngOnInit() {
  }

  clear() {
    this.aboutCompanyMenuOptionList = [];
  }

  getMenuConfigurationList() {
    this.menuService.getMenuConfig()
      .subscribe(data => {
        console.log('TestData');
        const response = JSON.parse(JSON.stringify(data));
        console.log('TestData name = ' + response.name);
        console.log('TestData type = ' + response.type);


        for (const configItem of (response.configurationList as any)) {
          console.log('configItem name = ' + configItem.name);
          console.log('configItem options = ' + configItem.menuOptions);

          if(this.counter == 0){
            console.log('Compare test OK');
            this.handleAboutCompanyMenuOptions(configItem.menuOptions);
          }else if(this.counter == 1){
            this.handleLanguagesMenuOptions(configItem.menuOptions);
          }

         

         // this.smartphone.push({
         //   name: d.name,
         //   price: d.price
         // });
         // Increment counter used to decide menu order
         this.counter++;
        }
        // console.log(this.smartphone);


      });
  }

  handleAboutCompanyMenuOptions(menuOptions){
    for (const menuOption of (menuOptions as any)) {
      let menuOptionObj: MenuOption = {
        name: menuOption.name,
        url: menuOption.url
      };
      this.aboutCompanyMenuOptionList.push(menuOptionObj);

    }
  }

  handleLanguagesMenuOptions(menuOptions){
    for (const menuOption of (menuOptions as any)) {
      let menuOptionObj: MenuOption = {
        name: menuOption.name,
        url: menuOption.url
      };
      this.languagesMenuOptionList.push(menuOptionObj);

    }
  }

}
