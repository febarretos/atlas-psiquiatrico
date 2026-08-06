import { phq9 } from "./phq9";
import { gad7 } from "./gad7";
import { ymrs } from "./ymrs";
import { audit } from "./audit";
import { ciwaAr } from "./ciwa-ar";
import { mdq } from "./mdq";
import { asrs6 } from "./asrs6";
import { asrs18 } from "./asrs18";
import { aq10 } from "./aq10";
import { cssrs } from "./cssrs";
import { ybocs } from "./ybocs";
import { pcl5 } from "./pcl5";
import { madrs } from "./madrs";
import { barnes } from "./barnes";
import { aims } from "./aims";
import { scoff } from "./scoff";
import { msiBpd } from "./msi-bpd";
import { epds } from "./epds";
import { isi } from "./isi";
import { meem } from "./meem";
import { moca } from "./moca";

export const escalas = [
  meem,
  moca,
  cssrs,
  phq9,
  gad7,
  ymrs,
  audit,
  ciwaAr,
  mdq,
  asrs6,
  asrs18,
  aq10,
  msiBpd,
  ybocs,
  pcl5,
  madrs,
  barnes,
  aims,
  scoff,
  epds,
  isi,
];

export * from "./types";
