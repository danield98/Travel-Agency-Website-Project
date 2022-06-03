$(`.readmore-btn`).on(`click`, function() {
  
    $(this).parent(".tab-container").toggleClass(`showContent`);
    let replaceText = $(this).parent().hasClass(`showContent`) ? "Read Less" : "Read More";
    $(this).text(replaceText);

});