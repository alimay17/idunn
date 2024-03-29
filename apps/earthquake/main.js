/*=============================================
=        Main JS for Earthquake               =
= Author: Alice Smith                         =
=============================================*/
import { getJson, getLocation } from "./utilities.js";

const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';



const myData = getJson(baseUrl);