import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'https://localhost:9001/graphql' }),
      cache: new InMemoryCache()
    })
  }

  public getCatalogues()  {
    return this.apollo.query({
      query: gql`query {
        catalogue(id: "Merc01") {
          id
          merchantId
          name
          categories {
            id
            name
            items {
              id
              name
              description
              price
            }
          }
        }
      }`
    });
  }
}
