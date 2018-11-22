import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete'
import typeAhead from './modules/typeAhead'
import makeMap from './modules/map'
import ajaxHeart from './modules/heart'

autocomplete( $('#address'), $('#lat'), $('#lng') )
// document.querySelector.bind(document) actually, it's done briefly by bling.js helper

typeAhead( $('.search'))

makeMap( $('#map') )

const heartForms = $$('form.heart')
heartForms.on('submit', ajaxHeart)