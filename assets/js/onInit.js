//GLOBALS
var words = [
    "r.u.n","b.u.n","d.o.g","f.o.g","f.i.t",
    "b.i.t","d.r.y","n.o.t","y.e.s","m.u.g",
    "d.o.g","c.a.t","r.a.t","b.a.t","p.i.g",
    "c.o.w","l.o.w","b.e.d","r.e.d","b.a.d",
    "k.e.y","w.h.y","f.l.y","d.r.y","l.e.g",
    "b.i.g","f.a.t","l.e.t","d.o.t","t.r.y"
];




$(document).ready(function(){
    $("#checkbox-1").on("click", function(){
        $("#page2 .toolbar").append('<a href="#page3" class="start button slideout">Start the game</a>');
    });

    $("#submitWord").on("click", function(){
        var initWordCount = $("#wordCount").text();
        $("#wordCount").text(parseInt(initWordCount) + 1);
        $("#dock1").empty();
        $("#dock2").empty();
        $("#dock3").empty();
        $(this).addClass("greenB");

        playLevelBeginner();
    });

    $("#timer").on("click", function() {
        $(this).addClass('start').fadeOut();
        countSeconds();
        playLevelBeginner();
    });

        // TODO cache jQuery selectors using variables better in below code

        var playLevelBeginner = function(){

            var chooseWordInArr = Math.floor((Math.random() * 29) + 1);
            var chooseWord = words[chooseWordInArr];
            var splitWord = chooseWord.split('.');

            var rndTopOne = Math.floor((Math.random() * 300) + 80);
            var rndLeftOne = Math.floor((Math.random() * 200) + 70);

            var rndTopTwo = Math.floor((Math.random() * 300) + 80);
            var rndLeftTwo = Math.floor((Math.random() * 200) + 70);

            var rndTopThree = Math.floor((Math.random() * 300) + 80);
            var rndLeftThree = Math.floor((Math.random() * 200) + 70);

            var letter1 = splitWord[0];
            var letter2 = splitWord[1];
            var letter3 = splitWord[2];

            var dock1 = $("#dock1").val();
            var dock2 = $("#dock2").val();
            var dock3 = $("#dock3").val();

            if (dock1 == "" && dock2 == "" && dock3 == "") {
                /*
                // semi-demo code below, just clicking
                $("#drag1").fadeIn().css({
                    position: 'absolute',
                    zIndex: 500,
                    left: rndLeftOne,
                    top: rndTopOne,
                    padding: 5,
                    background: "#ececec",
                    border: "1px solid #333"
                }).html( letter1 ).on("click", function(){
                    $("#dock1").html( letter1 );
                    $(this).empty().hide();
                    $("#drag2").fadeIn().css({
                        position: 'absolute',
                        zIndex: 500,
                        left: rndLeftTwo,
                        top: rndTopTwo,
                        padding: 5,
                        background: "#ececec",
                        border: "1px solid #333"
                    }).html( letter2 ).on("click",function(){
                        $("#dock2").html( letter2 );
                        $(this).empty().hide();
                        $("#drag3").fadeIn().css({
                            position: 'absolute',
                            zIndex: 500,
                            left: rndLeftThree,
                            top: rndTopThree,
                            padding: 5,
                            background: "#ececec",
                            border: "1px solid #333"
                        }).html( letter3 ).on("click", function(){
                            $("#dock3").html( letter3 );
                            $(this).empty().hide();
                        });
                    });
                });
                */

                // Drag-n-Drop code
                $(".dropzone").each(function(){

                   // var curEl = $(this);
                    this.addEventListener("dragstart",function(evt){
                       // this.style.opacity = '0.4';
                        evt.dataTransfer.setData('text/html', this.innerHTML);
                    },false);

                    function handleDragStart(e) {
                        this.style.opacity = '0.4';  // this / e.target is the source node.
                    }

                    function handleDragOver(e) {
                        if (e.preventDefault) {
                            e.preventDefault(); // Necessary. Allows us to drop.
                        }

                        e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

                        return false;
                    }

                    function handleDragEnter(e) {
                        // this / e.target is the current hover target.
                        this.classList.add('over');
                    }

                    function handleDragLeave(e) {
                        this.classList.remove('over');  // this / e.target is previous target element.
                    }

                    var cols = document.querySelectorAll('#columns .column');
                    [].forEach.call(cols, function(col) {
                        col.addEventListener('dragstart', handleDragStart, false);
                        col.addEventListener('dragenter', handleDragEnter, false);
                        col.addEventListener('dragover', handleDragOver, false);
                        col.addEventListener('dragleave', handleDragLeave, false);
                    });

                    $(this).fadeIn().css({
                        position: 'absolute',
                        zIndex: 500,
                        left: rndLeftOne,
                        top: rndTopOne,
                        padding: 5,
                        background: "#ececec",
                        border: "1px solid #333"
                    }).html( letter1 );
                    if (dock1 == "" && dock2 == "" && dock3 == "") {
                        this.break;
                    } else {
                        this.continue;
                    }

                });



                    // .on("click", function(){
                    //$("#dock1").html( letter1 );
                    //$(this).empty().hide();

/*
                        $("#drag2").fadeIn().css({
                            position: 'absolute',
                            zIndex: 500,
                            left: rndLeftTwo,
                            top: rndTopTwo,
                            padding: 5,
                            background: "#ececec",
                            border: "1px solid #333"
                        }).html( letter2 );

                        //.on("click",function(){
                        //$("#dock2").html( letter2 );
                        //$(this).empty().hide();
*/
/*

                        $("#drag3").fadeIn().css({
                            position: 'absolute',
                            zIndex: 500,
                            left: rndLeftThree,
                            top: rndTopThree,
                            padding: 5,
                            background: "#ececec",
                            border: "1px solid #333"
                        }).html( letter3 );


                          //  .on("click", function(){
                          //  $("#dock3").html( letter3 );
                          //  $(this).empty().hide();
*/
                  //      });
                //    });
              //  });

            }
        };

    });
