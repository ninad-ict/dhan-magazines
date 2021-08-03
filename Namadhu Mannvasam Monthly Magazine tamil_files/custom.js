jQuery(document).ready(function () {
  // alert("Hey");

  const ROOT = "/";

  function createLoginBox() {
    $(
      "body"
    ).after(`<div class="modal fade" id="loginModal" role="dialog" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                        <div class="modal-header">
                        <button type="button" class="close" id='LoginModalClose' hidden data-dismiss="modal">&times;</button>
                                <h4 class="modal-title text-center" style='color:red'>E- Namadhu Mannvasam - Sign In</h4>

                        </div>
                        <div class="modal-body">
                        <div class="auto-container">
                        <div class="row">
                                <div class="col-sm-12">
                                        <form>

                                                <div class="form-group">
                                                        <label for="login">Email address</label>
                                                        <input type="email" class="form-control" id="login" aria-describedby="emailHelp" placeholder="Enter email" />
                                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with
                                                                anyone else.</small>
                                                </div>
                                                <div class="form-group">
                                                        <label for="password">Password</label><span style='margin-left:10px'><a href=''><small style='color:red'>Forgot Password?</small></a></span>
                                                        <input type="password" class="form-control" id="password" placeholder="Password" />
                                                </div>

                                                <button type="button" class='btn btn-danger' id='signinform'> Sign In</button>
                                               <span style="color:red;margin-left:10px;font-style: italic" id='signinerror' hidden>Incorrect Email or Password</span>
                            
                                        </form>
                                </div>
                        </div></div>
                        </div>
                        <div class="modal-footer text-center">

                              <center>  <a href='${ROOT}signup.php' style='color:red'>Click to Sign Up for New Account</a></center>
                        </div>
                </div>

        </div>
  </div>

      `);
  }

  // alert("Y");
  $("#UserSubscribeDiv").hide();

  function updateSubscriber() {
    if ($("#SubscribeName").length && $("#SubscribeDate").length) {
      // alert("Yaa");
      let jsonDetails = {
        option: "getUserDetails",
      };

      jsonDetails = JSON.stringify(jsonDetails);
      $.ajax({
        type: "POST",
        url: `${ROOT}verifysignup.php`,
        async :false,
        data: {
          mydata: jsonDetails,
        },
        success: function (result) {
          $("#clickLogout").hide();
          $("#clickLogin").show();
          //  alert (result);
           if(result=="NULL")
           {
            $("#UserSubscribeDiv").hide();
           }
           else
           {

            $("#UserSubscribeDiv").show();
            let userDetails = JSON.parse(result);
            let a = userDetails.name.length;
            // $("#SubscribeName").html(userDetails.name);
            $("#SubscribeName").html(userDetails.name);
            $("#SubscribeDate").html(userDetails.date);
            
           }
         

          // window.load(`${ROOT}`);
          // document.location.href = `${ROOT}`;
        },
      });
    }
  }
  updateSubscriber();
  
  $("#clickLogout").click(() => {
    //  alert("Het");

    $.ajax({
      type: "POST",
      url: `${ROOT}session-destroy.php`,
      async :false,
      success: function () {
        $("#clickLogout").hide();
        $("#clickLogin").show();
        $("#UserSubscribeDiv").hide();
        // window.load(`${ROOT}`);
        document.location.href = `${ROOT}`;
      },
    });
  });


  function triggerModalBox()
  {

  
  if ($(".paidarticle").length) {
    alert("Here");
    $.ajax({
      type: "POST",
      url: `${ROOT}settimer.php`,
      async :false,
      success: function (time) {
        // $("#div1").html(result);
        // alert(result);

        if (time == "notime") {
          $("#clickLogin").hide();
          $("#clickLogout").show();
          return;
        } else {
          $("#clickLogin").show();
          $("#clickLogout").hide();
        }

        let result = parseInt(time);

        //alert(result);

        if (result > 0) {
          let remainingTime = result * 1000 - 1000;
          //  alert(remainingTime);
          window.onload = setTimeout(function () {
            //loginModal.modal("show");
            //  createLoginBox();
            if(!$(".modal").is(':visible'))
            {
              createLoginBox();
              $(".modal").modal("show");
            }

            // alert("TImeUp");
          }, remainingTime);
        } else {
          //alert("TIme already Up");
          if(!$(".modal").is(':visible'))
          {
            createLoginBox();
            $(".modal").modal("show");
          }

        }

        // if (result == "No") {
        //   window.onload = setTimeout(function () {
        //     loginModal.modal("show");
        //   }, 500);
        // }

        // modaledit("Note", result);
        // $("#loginModal").modal("show");
      },
    });
  }

}

triggerModalBox();


$(document).on("click","#LoginModalClose",()=>{
 
 // alert("Asa");
  triggerModalBox();
  $("#LoginModalClose").hide();
})




  $("#clickLogin").click(() => {

    //------------
    let loginModal = $("#loginModal");

      let jsonDetails = {
        option: "checklogin",
      };

      jsonDetails = JSON.stringify(jsonDetails);

      $.ajax({
        type: "POST",
        url: `${ROOT}verifysignup.php`,
        async :false,
        data: {
          mydata: jsonDetails,
        },
        success: function (result) {
          // $("#div1").html(result);
          // alert("NN"+  result);

          if (result == "No") {

            if (!$(".modal").length) {
              createLoginBox();
            }
        
            $("#LoginModalClose").show();
        
            $(".modal").modal("show");

            // alert("DD");
            // window.onload = setTimeout(function () {
            //   loginModal.modal("show");
            // }, 500);
          }
          else
          {
            window.location = `${ROOT}enamadhu.php`;
            window.load("enamadhu.php");
            return;
          }

          // modaledit("Note", result);
          // $("#loginModal").modal("show");
        },
      });
    //------------


    //alert("d");
    // if(AddLoginModal.length)
    // {

    // }
    /// alert("Sd");
    // $("#loginModal").css('visibility', 'visible');
    // createLoginBox();
    // popLoginBox();
    //  alert("Hey");
  });

  $(document).ready(function () {
    let loginModal = $("#loginModal");

    if (loginModal.length) {
      let jsonDetails = {
        option: "checklogin",
      };

      jsonDetails = JSON.stringify(jsonDetails);

      $.ajax({
        type: "POST",
        url: `${ROOT}verifysignup.php`,
        async :false,
        data: {
          mydata: jsonDetails,
        },
        success: function (result) {
          // $("#div1").html(result);
           alert("NN"+  result);

          if (result == "No") {
           // alert("DD");
            window.onload = setTimeout(function () {
              loginModal.modal("show");
            }, 500);
          }

          // modaledit("Note", result);
          // $("#loginModal").modal("show");
        },
      });
    }
  });

  
  // $(document).on('click','#signinform',()=>{
  //   alert("PP");
  // })

  $(document).on("click", "#signinform", () => {
    // alert("Ninad");
    let email = $("#login").val();
    let password = $("#password").val();
    let jsonDetails = {
      option: "signin",
      email: email,
      password: password,
    };

    jsonDetails = JSON.stringify(jsonDetails);

    // alert(jsonDetails);

    $.ajax({
      type: "POST",
      url: `${ROOT}verifysignup.php`,
      async :false,
      data: {
        mydata: jsonDetails,
      },
      success: function (result) {
        // $("#div1").html(result);
        //alert(result);

        if (result == "expired") {
          //expiry page

          // $('body').append(`
          //             <div class="modalexpire fade" id="myExpireModal" role="dialog">
          //           <div class="modal-dialog">

          //                   <!-- Modal content-->
          //                   <div class="modal-content">
          //                           <div class="modal-header">
          //                                   <button type="button" class="close" data-dismiss="modalexpire">&times;</button>
          //                                   <h4 class="modal-title">Modal Header</h4>
          //                           </div>
          //                           <div class="modal-body">
          //                                   <p>Some text in the modal.</p>
          //                           </div>
          //                           <div class="modal-footer">
          //                                   <button type="button" class="btn btn-default" data-dismiss="modalexpire">Close</button>
          //                           </div>
          //                   </div>

          //           </div>
          //   </div>`);

          //   $('#myExpireModal').modal('show');

          window.location = `${ROOT}expiry.php`;
          window.load("expiry.php");
          return;
        }

        if (result == "signin-no") {
          $("#signinerror").show();
        } else {
          //   alert(result);

          //let userDetails = JSON.parse(result);

          //   alert(userDetails.name);

          // $("#SubscripeName").html(userDetails.name);
          // $("#SubscripeDate").html(userDetails.date);

          $("#UserSubscribeDiv").show();
          // $("#SubscribeName").html(userDetails.name);
          // $("#SubscribeName").html(userDetails.name);
          // $("#SubscribeDate").html(userDetails.date);

          updateSubscriber();

          $("#signinerror").hide();
          $("#loginModal").modal("hide");
          $("#clickLogin").hide();
          $("#clickLogout").show();

          window.location = `${ROOT}enamadhu.php`;
          window.load("enamadhu.php");
          return;


        }
        // modaledit("Note", result);
        // $("#loginModal").modal("show");
      },
    });
    //  alert("t");
  });

  // for hover dropdown menu
  $("ul.nav li.dropdown").hover(
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn(200);
    },
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut(200);
    }
  );
  // slick slider call
  $(".slick_slider").slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slide: "div",
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  });
  // latest post slider call
  $(".latest_postnav").newsTicker({
    row_height: 64,
    speed: 800,
    prevButton: $("#prev-button"),
    nextButton: $("#next-button"),
  });
  jQuery(".fancybox-buttons").fancybox({
    prevEffect: "none",
    nextEffect: "none",
    closeBtn: true,
    helpers: {
      title: {
        type: "inside",
      },
      buttons: {},
    },
  });
  // jQuery('a.gallery').colorbox();
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });
  //Click event to scroll to top
  $(".scrollToTop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
  $(".tootlip").tooltip();
  $("ul#ticker01").liScroll();
  //$( "#loginModal" ).modal('show').slideUp( 300 ).delay( 5000 ).fadeIn( 400 );
});

$(document).ready(function () {
  // alert("Hallo");
  // $("#loginModal").modal('show');
  //$( "#loginModal" ).slideUp( 300 ).delay( 5000 ).fadeIn( 400 );
});

wow = new WOW({
  animateClass: "animated",
  offset: 100,
});
wow.init();

// $("#UserSubscribeDiv").hide();

jQuery(window).load(function () {
  // makes sure the whole site is loaded
  $("#status").fadeOut(); // will first fade out the loading animation
  $("#preloader").delay(100).fadeOut("slow"); // will fade out the white DIV that covers the website.
  $("body").delay(100).css({
    overflow: "visible",
  });
});
