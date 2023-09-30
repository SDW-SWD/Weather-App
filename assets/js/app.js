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
            fetchData(url.geo(searchField.value), function (locations){
                searchField.classList.remove("searching");
                searchResult.classList.add("active");
                searchResult.innerHTML = `
                    <ul class="view-list" data-search-list></ul>
                `;

                const items = [];

                for(const {name, lat, lon, country, state} of locations){
                    const searchItem = document.createElement("li");
                    searchItem.classList.add("view-item");

                    searchItem,innerHTML = `
                        <span class="m-icon">location_on</span>

                        <div>
                            <p class="item-title">${name}</p>

                            <p class="label-2 item-subtitle">${state || ""} ${country}</p>
                        </div>


                        <a href="#/weather?lat=${lat}&lon=${lon}" class="item-link has-state" aria-label="${name} weather" data-search-toggler></a>
                    `;

                    searchResult.querySelector("[data-search-list]");appendChild(searchItem);
                    items.push(searchItem.querySelector("[data-search-toggler]"));
                }
            });
        }, searchTimeoutDuration);
    }
});