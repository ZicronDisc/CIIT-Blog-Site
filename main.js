$(document).ready(function(){
    $('#checkbox').click(function(){
        var element = document.body;         
        element.classList.toggle("dark"); 
    });
});    

$(document).ready(function(){
    $("#input").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#blog #result").not(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

//1//
$(document).ready(function() {
  $(".Copernican_Overview").click(function() {
  $("#blog_proper").replaceWith($("#Copernican"))
  });
});

//2
$(document).ready(function() {
  $(".Stonehenge_Overview").click(function() {
  $("#blog_proper").replaceWith($("#Stonehenge"))
  });
});

//3
$(document).ready(function() {
  $(".Annecdote_Overview").click(function() {
  $("#blog_proper").replaceWith($("#Annecdote"))
  });
});

//4
$(document).ready(function() {
  $(".Programmer_Overview").click(function() {
  $("#blog_proper").replaceWith($("#Programmer"))
  });
});

//5
$(document).ready(function() {
  $(".OnlineStudent_Overview").click(function() {
  $("#blog_proper").replaceWith($("#OnlineStudent"))
  });
}); 

//6
$(document).ready(function() {
  $(".Inside_Overview").click(function() {
  $("#blog_proper").replaceWith($("#Inside"))
  });
});

//7
$(document).ready(function() {
  $(".CIITshs_Overview").click(function() {
  $("#blog_proper").replaceWith($("#CIITshs"))
  });
});  

//8
$(document).ready(function() {
  $(".CIIT_Overview").click(function() {
  $("#blog_proper").replaceWith($("#CIIT"))
  });
});

//9

$(document).ready(function() {
  $(".Gardening_Overview").click(function() {
  $("#blog_proper").replaceWith($("#Gardening"))
  });
});

//10
$(document).ready(function() {
  $(".Web_Overview").click(function() {
  $("#blog_proper").replaceWith($("#Web"))
  });
});

//authors
$(document).ready(function() {
  $(".Web_Overview").click(function() {
  $("#blog_proper").replaceWith($("#Web"))
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
  $("#toSee1").slideDown(2000).delay(5000).fadeIn(200);
  $("#toSee2").slideDown(2000).delay(5000).fadeIn(200);
  });
});

$(document).ready(function() {
  $("#submit").click(function(){
      $("#input").replaceWith(
          '<div class="alert alert-success" role="alert">' +
              '<center><h4 class="alert-heading">Thank you for your response</h4>' +
              '<p>If you still have reports, comments, suggestions, and etc. please just drop it by</p></center>' +
          '</div>'
      )
  });
});
