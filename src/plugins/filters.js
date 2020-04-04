import Vue from 'vue';
import number from './filters/number';

Vue.filter(
    number.name,
    number.filter,
);