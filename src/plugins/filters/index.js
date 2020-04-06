import Vue from 'vue';
import number from './number';
import date from './date';

Vue.filter(
    number.name,
    number.filter,
);

Vue.filter(
    date.name,
    date.filter,
);