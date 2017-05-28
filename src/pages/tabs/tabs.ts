import { Component } from '@angular/core';

import { ModelPage } from '../model/model';
import { FunctionsPage } from '../functions/functions';
import { ElementsPage } from '../elements/elements';
import { SystemsPage } from '../systems/systems';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ModelPage;
  tab2Root = FunctionsPage;
  tab3Root = ElementsPage;
  tab4Root = SystemsPage;
  constructor() {

  }
}
