'use strict';

// vaninlla js

document.addEventListener('DOMContentLoaded', () => {
    console.log('vanilla js DOM content loaded');
    const button1 = document.querySelector('#button1');
    button1.addEventListener('click', () => {
        alert('Button 1 has been clicked!');
    });

    fetch(
        'https://api.chucknorris.io/jokes/random?=category=dev'
    ).then((response) => {
        return response.json();
    }).then((data) => {
        console.log("the data is: ", data);
        return data;
    }).catch((error) => {
        console.error("ERROR: ", error);
    })
});

// jQuery version
$(document).ready(() => {
    console.log("jQuery DOM content loaded");
    $('#button2').on('click', () => {
        alert('Button 2 has been clicked!');
    });

    $.ajax({
        url: 'https://api.chucknorris.io/jokes/random?=category=dev',
        type: 'GET',
        success: function(data) {
            console.log(data);
        },
        error: function(error) {
            console.error("ERROR: ", error);
        }
    });
});