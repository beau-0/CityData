

function listenSubmit() {
  $('.search-form').submit(event => {
    event.preventDefault();
    const searchEntry = $(event.currentTarget).find('.query-box');
    const searchTerm = searchEntry.val();
    console.log(searchTerm);
  });

}

$(listenSubmit); 