import { Component } from '@angular/core';
import { GraphqlService } from './graphql.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'graphql-integration';

  constructor(private service: GraphqlService) {
  }

  ngOnInit(): void {
    this.service.getCatalogues().subscribe(catelogus=>{
      console.log(catelogus);
    });
  }
}
