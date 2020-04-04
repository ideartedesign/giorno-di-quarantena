import Vue from 'vue';
import number from './filters/number';
import date from './filters/date';

Vue.filter(
    number.name,
    number.filter,
);

Vue.filter(
    date.name,
    date.filter,
);