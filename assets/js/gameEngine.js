var words = new Array(
    "r.u.n","b.u.n","d.o.g","f.o.g","f.i.t",
    "b.i.t","d.r.y","n.o.t","y.e.s","m.u.g",
    "d.o.g","c.a.t","r.a.t","b.a.t","p.i.g",
    "c.o.w","l.o.w","b.e.d","r.e.d","b.a.d",
    "k.e.y","w.h.y","f.l.y","d.r.y","l.e.g",
    "b.i.g","f.a.t","l.e.t","d.o.t","t.r.y"
);

var gameRound = {

    randomShot : Math.floor((Math.random() * 29) + 1),
    randomWord : words[this.randomShot],
    splitWord : this.randomWord.split('.'),

    randomTopOne : Math.floor((Math.random() * 300) + 80),
    randomLeftOne : Math.floor((Math.random() * 200) + 70),

    randomTopTwo : Math.floor((Math.random() * 300) + 80),
    randomLeftTwo : Math.floor((Math.random() * 200) + 70),

    randomTopThree : Math.floor((Math.random() * 300) + 80),
    randomLeftThree : Math.floor((Math.random() * 200) + 70),

    // getting each letter
    letter1 : this.splitWord[0],
    letter2 : this.splitWord[1],
    letter3 : this.splitWord[2]
};
    // TODO cache jQuery selectors using variables better in below code

    $("#hiddenInput").on("change", function(){

        var dock1 = $("#dock1").val();
        var dock2 = $("#dock2").val();
        var dock3 = $("#dock3").val();

        var initWordCount = $("#wordCount").text();

        if (dock1 == "" && dock2 == "" && dock3 == "") {
        $("#drag1").fadeIn().css({
            position: 'absolute',
            zIndex: 500,
            left: gameRound.randomLeftOne,
            top: gameRound.randomTopOne,
            padding: 5,
            background: "#ececec",
            border: "1px solid #333"
        }).html( gameRound.letter1 ).on("click", function(){
            $("#dock1").html( gameRound.letter1 );
            $(this).empty().hide();
            $("#drag2").fadeIn().css({
                position: 'absolute',
                zIndex: 500,
                left: gameRound.randomLeftTwo,
                top: gameRound.randomTopTwo,
                padding: 5,
                background: "#ececec",
                border: "1px solid #333"
            }).html( gameRound.letter2 ).on("click",function(){
                $("#dock2").html( gameRound.letter2 );
                $(this).empty().hide();
                $("#drag3").fadeIn().css({
                    position: 'absolute',
                    zIndex: 500,
                    left: gameRound.randomLeftThree,
                    top: gameRound.randomTopThree,
                    padding: 5,
                    background: "#ececec",
                    border: "1px solid #333"
                }).html( gameRound.letter3 ).on("click", function(){
                    $("#dock3").html( gameRound.letter3 );
                    $(this).empty().hide();

                    $("#wordCount").text(parseInt(initWordCount) + 1);
                    $("#dock1").empty();
                    $("#dock2").empty();
                    $("#dock3").empty();
                    $("#hiddenInput").val(parseInt(initWordCount) + 1);
                });
            });
        });
    }
    });



