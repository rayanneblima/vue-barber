import { createRouter, createWebHashHistory } from "vue-router";
import Login from '../views/Login';
import CreateAccount from '../views/CreateAccount';

import Home from '../views/Home';
import BarbersList from '../views/Home/BarbersList';
import SearchBarber from '../views/Home/SearchBarber';
import FavBarbersList from '../views/Home/FavBarbersList';
import UserAccount from '../views/Home/UserAccount';

import Profile from '../views/Profile';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'create-account',
    component: CreateAccount
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'home',
        name: 'barbers-list',
        component: BarbersList
      },
      {
        path: 'pesquisa',
        name: 'search-barber',
        component: SearchBarber
      },
      {
        path: 'favoritos',
        name: 'fav-barbers-list',
        component: FavBarbersList
      },
      {
        path: 'conta',
        name: 'user-account',
        component: UserAccount
      }
    ]
  },
  {
    path: '/perfil/:id',
    name: 'profile',
    component: Profile
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
