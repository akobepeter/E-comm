
            $(function() {

                // toggler
            $('.navbar-toggler').click(function(){

                $('.navbar-toggler').toggleClass('change')
            });


              // sticky navbar with less padding
              $(window).scroll(function() {
                  let position = $(this).scrollTop();
                  if(position>=718){
                      $('.navbar').addClass('navbar-background');
                      $('.navbar').addClass('fixed-top')
                  }else{
                      $('.navbar').removeClass('navbar-background');
                      $('.navbar').removeClass('fixed-top');
                  }
              });

                // smooth scroll

                $('nav-item a, .header-link, #back-to-top').click(function(link){
                    link.preventDefault();

                    let target = $(this).attr('href');

                    $('html','body').stop().animate({
                        scrollTop: $(target).offset().top = '25px'
                    },3000)

                });

                // back to top

                $(window).scroll(function() {
                  let position = $(this).scrollTop();
                  if(position>=718){
                      $('#back-to-top').addClass('scrollTop');
                      
                  }else{
                      $('#back-to-top').removeClass('scrollTop');
                      
                  }
              });


                    //ripples
                    $("#header,.info").ripples({

                        dropRadius: 25,
                        perturbance:0.6,
                    });

                    // magnific popup

                    $(".parent-container").magnificPopup({
                        delegate: "a",
                        type: "image",
                        gallery:{
                            enabled:true
                        }
                    })
        })




    var myVar;

    function myFunction(){
        myVar = setTimeout(showPage,0.3);
    }

    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
    }

