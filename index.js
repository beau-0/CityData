var fipsCode = {
  01: "Alabama",
  02: "Alaska",
  04: "Arizona",
  05: "Arkansas",
  06: "California",
  08: "Colorado",
  09: "Connecticut",
  10: "Delaware",
  11: "District of Columbia",
  12: "Florida",
  13: "Georgia",
  15: "Hawaii",
  16: "Idaho",
  17: "Illinois",
  18: "Indiana",
  19: "Iowa",
  20: "Kansas",
  21: "Kentucky",
  22: "Louisiana",
  23: "Maine",
  24: "Maryland",
  25: "Massachusetts",
  26: "Michigan",
  27: "Minnesota",
  28: "Mississippi",
  29: "Missouri",
  30: "Montana",
  31: "Nebraska",
  32: "Nevada",
  33: "New Hampshire",
  34: "New Jersey",
  35: "New Mexico",
  36: "New York",
  37: "North Carolina",
  38: "North Dakota",
  39: "Ohio",
  40: "Oklahoma",
  41: "Oregon",
  42: "Pennsylvania",
  44: "Rhode Island",
  45: "South Carolina",
  46: "South Dakota",
  47: "Tennessee",
  48: "Texas",
  49: "Utah",
  50: "Vermont",
  51: "Virginia",
  53: "Washington",
  54: "West Virginia",
  55: "Wisconsin",
  56: "Wyoming"
}

var state = '';

function listenSubmit() {
  $('.search-form').submit(event => {
    event.preventDefault();
    const searchEntry = $(event.currentTarget).find('.query-box');
    const searchTerm = searchEntry.val();
    state = Object.keys(fipsCode).find(key => fipsCode[key] === searchTerm);
    getStateData();
  });
}

function getStateData() {

  fetch(`https://api.census.gov/data/2017/pep/population?get=POP,GEONAME&for=us:*&key=a57b95a92b2d8258e380064424fa93c36bbd8465`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));

  fetch(`https://api.census.gov/data/2017/pep/population?get=POP,GEONAME&for=state:${state}&key=a57b95a92b2d8258e380064424fa93c36bbd8465`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));

  fetch(`https://api.census.gov/data/2017/pep/population?get=POP,GEONAME&for=place:*&in=state:${state}&key=a57b95a92b2d8258e380064424fa93c36bbd8465`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));

    
}


listenSubmit();