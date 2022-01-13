import { createRouter, createWebHashHistory } from "vue-router";
import Login from '../views/Login';
import CreateAccount from '../views/CreateAccount';
import Home from '../views/Home';
import BarbersList from '../views/Home/BarbersList';
import SearchBarber from '../views/Home/SearchBarber';
import Booking from '../views/Home/Booking';
import FavBarbersList from '../views/Home/FavBarbersList';
import UserAccount from '../views/Home/UserAccount';

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'create-account',
    component: CreateAccount
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '',
        name: 'barbers-list',
        component: BarbersList
      },
      {
        path: 'pesquisa',
        name: 'search-barber',
        component: SearchBarber
      },
      {
        path: 'agenda',
        name: 'booking',
        component: Booking
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
