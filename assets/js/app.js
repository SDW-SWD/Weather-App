'use strict';

import { fetchData } from "./api";


/**
 *
 * @param {NodeList} elements
 * @param {string} eventType
 * @param {function} callback
 */

const addEventOnElements = function(elements, eventType, callback){
    for(const element of elements)element.addEventListener(eventType, callback);
}

const searchView = document.querySelector("[data-search-view]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");

const togglerSearch = () => searchView.classList.toggle("active");
addEventOnElements(searchTogglers, "click", togglerSearch);

const searchField  = document.querySelector("[data-search-field]");
const searchResult = document.querySelector("[data-search-result]");

let searchTimeout = null;
const searchTimeoutDuration = 500;

searchField.addEventListener("input", function(){
    searchTimeout ?? clearTimeout(searchTimeout);

    if (!searchField.value) {
        searchResult.classList.remove("active");
        searchResult.innerHTML = "";
        searchField.classList.remove("searching");
    }else{
        searchField.classList.add("searching");
    }
    if (searchField.value) {
        searchTimeout= setTimeout(() =>{
            fetchData(url.geo(searchField.value), function (location){
                searchField.classList.remove("searching");
                searchResult.classList.add("active");
                searchResult.innerHTML = ``
            });
        }, searchTimeoutDuration);
    }
});