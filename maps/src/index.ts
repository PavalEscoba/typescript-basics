/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { Map } from './customMap';

const user = new User();
const company = new Company();
console.log(user);
console.log(company);

new Map('map');
