import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

const USERS = gql`
  query Users {
    users {
      id
      username
      city
    }
  }
`;
const USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      username
      city
    }
  }
`;
const ADD_USER = gql`
  mutation addUser($id: ID!, $username: String!, $city: String!) {
    addUser(id: $id, username: $username, city: $city) {
      id
      username
      city
    }
  }
`;
const LOGIN = gql`
  query Login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor(private apollo: Apollo) {}

  getUsers(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: USERS,
    }).valueChanges;
  }

  getUser(id: any): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: USER,
      variables: {
        id: id,
      },
    }).valueChanges;
  }

  addUser(id: any, username: string, city: string): Observable<any> {
    return this.apollo.mutate({
      mutation: ADD_USER,
      variables: {
        id: id,
        username: username,
        city: city,
      },
    });
  }
  login(username: string, password: string): Observable<any> {
    return this.apollo.watchQuery({
      query: LOGIN,
      variables: {
        username: username,
        password: password,
      },
    }).valueChanges;
  }
}
