$(document).ready(function(){




  if ($('.modal-wrapper').hasClass('open')) {
    $(".top_section").css('z-index', '-1')
  }
  
  $('.video_trigger').click(function() {
    $('.modal-wrapper').toggleClass('open');
    $('iframe').attr('src', $('iframe').attr('src'));
    return false;
  });


  //check of iets in de vp is
  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  //add class als iets in de vp is (voor de animaties)
  $(window).scroll(function(){

    var scrollValue=$(document).scrollTop();

    if ( scrollValue >= 1 ) { $(".top_bar").css('box-shadow', '0 10px 12px -14px rgba(0,0,0,.29)')}
    else{ $(".top_bar").css('box-shadow', 'none')}

    //afval pagina - slide in rectangles
    if( $(".bar").isInViewport()){
        $(".bar").addClass('visible');
      } else{
        $(".bar").removeClass('visible');
      }

    })



  //navigatie weghalen on scroll en weer laten zien op scroll up
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("top_bar").style.top = "0";
      } else {
        document.getElementById("top_bar").style.top = "-150px";
      }
      prevScrollpos = currentScrollPos;
    }



    //counter om te checken hoeveel secondes je op de site bent
    var totalSeconds = 1;

    setInterval(function countTimer() {
        ++totalSeconds;
        document.getElementById("seconds").innerHTML = totalSeconds;
    },  1000)
   




  //rekenmachine 'hoeveel water heb je aan?'
  $("#waterButton").click(function(event){
    event.preventDefault();

    var values = [];
    const add = (a, b) => +a + +b

    $("#checkboxHolder input:checkbox:checked").map(function(){
        values.push($(this).val());
    });
    const sum = values.reduce(add)
    if (values.length === 0) {sum = 0 }

    document.getElementById("waterAmount").innerHTML = sum;
    document.getElementById("yearAmount").innerHTML = ((sum/730).toFixed(0));

  });



  //soort quiz waarbij de vraag is hoeveel bomen er elk jaar worden gekapt
  var quizButton = document.getElementsByClassName("quiz_button");

  $(quizButton).click(function(){

    $("#quiz_answer").addClass('visible');
    window.setTimeout(function(){
      $("#quiz_answer_text").addClass('visible');
    }, 2000);

    if($(this).hasClass('correct')){
      document.getElementById("quiz_answer_text").innerHTML = 'Klopt. Elk jaar worden er maar liefst 150 miljoen bomen gekapt. Hieronder kun je lezen hoe veel er dat wel niet zijn.';
    } else{
      document.getElementById("quiz_answer_text").innerHTML = 'Nee, was het maar zo. Elk jaar worden er maar liefst 150 miljoen bomen gekapt. Hieronder kun je lezen hoe veel er dat wel niet zijn.';
    }

  })


  //Check of je favoriete merk goed bezig is
  var arbeidButton = document.getElementsByClassName("arbeid_grid_item");

  $(arbeidButton).click(function(event){
    event.preventDefault();

    if($(this).hasClass('hm')){
      document.getElementById("brand_name").innerHTML = 'H&M';
      document.getElementById("brand_text").innerHTML = 'Het is een begin. Bijna geen enkel onderdeel van de toeleveringsketen is gecertificeerd door arbeidsnormen die de gezondheid en veiligheid van werknemers, leefbare lonen of andere arbeidsrechten garanderen. Het publiceert gedetailleerde informatie over zijn leveranciersbeleid, audit- en herstelprocessen en publiceert gedetailleerde informatie over dwangarbeid, gendergelijkheid of vrijheid van vereniging. H&M heeft een project om de lonen in zijn toeleveringsketen te verbeteren, maar er is geen bewijs dat het in het grootste deel van zijn toeleveringsketen de betaling van een leefbaar loon garandeert.';
    } else if($(this).hasClass('shein')){
      document.getElementById("brand_name").innerHTML = 'Shein';
      document.getElementById("brand_text").innerHTML = 'De arbeidsbeoordeling is zeer slecht. Er is geen bewijs dat het beschikt over initiatieven om werknemers te versterken, zoals collectieve onderhandelingen of het recht om een klacht in te dienen. Het haalt zijn laatste productiefase uit landen met een extreem risico op arbeidsmisbruik. Er is geen bewijs dat het de betaling van een leefbaar loon in zijn toeleveringsketen garandeert. Shein controleert een deel van zijn toeleveringsketen, maar specificeert niet welk percentage.';
    } else if($(this).hasClass('nike')){
      document.getElementById("brand_name").innerHTML = 'Nike';
      document.getElementById("brand_text").innerHTML = 'Het is een begin. Een deel van de toeleveringsketen is gecertificeerd door de FLA Workplace Code of Conduct, inclusief de hele laatste productiefase. Nike publiceert informatie over dwangarbeid, gendergelijkheid of vrijheid van vereniging maar er is geen bewijs dat het de betaling van een leefbaar loon in het grootste deel van zijn toeleveringsketen garandeert.';
    } else if($(this).hasClass('martens')){
      document.getElementById("brand_name").innerHTML = 'Dr. Martens';
      document.getElementById("brand_text").innerHTML = 'De arbeidsbeoordeling is zeer slecht. Geen van de toeleveringsketens is gecertificeerd door arbeidsnormen die de gezondheid en veiligheid van de werknemers, leefbare lonen of andere arbeidsrechten garanderen. Het kreeg een score van 0-10% in de Fashion Transparency Index. Dr. Martens. publiceert geen of zeer beperkte informatie over zijn leveranciersbeleid en audits en bevat geen informatie over dwangarbeid, gendergelijkheid of vrijheid van vereniging. ';
    } else if($(this).hasClass('nudie')){
      document.getElementById("brand_name").innerHTML = 'Nudie Jeans';
      document.getElementById("brand_text").innerHTML = 'De arbeidswaardering is geweldig. Het is een lid van de Fair Wear Foundation. Het traceert het grootste deel van zijn toeleveringsketen en zorgt voor de betaling van een leefbaar loon in een deel van zijn toeleveringsketen en heeft een project om de lonen verder te verbeteren. Ook controleren zij het grootste deel van de toeleveringsketen.';
    } else if($(this).hasClass('patagonia')){
      document.getElementById("brand_name").innerHTML = 'Patagonia';
      document.getElementById("brand_text").innerHTML = 'Het is een begin. Het behaalde een score van 51-60% in de Fashion Transparency Index. Het publiceert een gedetailleerde lijst van leveranciers in de laatste productiefase en enige informatie over de bevindingen van leveranciersaudits. Het publiceert informatie over dwangarbeid, gendergelijkheid of vrijheid van vereniging. Patagonia heeft een project om de lonen in zijn toeleveringsketen te verbeteren, maar er is geen bewijs dat het in het grootste deel van zijn toeleveringsketen de betaling van een leefbaar loon garandeert.';
    } else{
      document.getElementById("brand_text").innerHTML = 'Klik hiernaast op een logo om meer te lezen!';
    }

  })



})


