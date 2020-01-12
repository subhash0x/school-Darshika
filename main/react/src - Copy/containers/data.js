import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
// import Localix from "./localix";

const data = new LocalizedStrings({
  en:{
    how:"How do you want your egg today?",
    boiledEgg:"Boiled egg",
    softBoiledEgg:"Soft-boiled egg",
    choice:"How to choose the egg",
    name:"Name"
  },
  hi: {
    how:"Come vuoi il tuo uovo oggi?",
    boiledEgg:"Uovo sodo",
    softBoiledEgg:"Uovo alla coque",
    choice:"Come scegliere l'uovo",
    name:"नाम"
  }
});
export {data};