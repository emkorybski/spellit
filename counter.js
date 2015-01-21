function countSeconds() {
      var seconds = 39;
      var runTimer = setInterval(
        function(){
          if (seconds == 0) {
            console.log("GAME OVER!");
            // alert() or confirm() could be used in the hybrid app
            clearInterval(runTimer);
            var gameOver = '<div id="gameOver"><a id="startOver" class="button slideout" href="#page1">Start over!</a></div>';
            $("#page3.current").append(gameOver);
            $("#startOver").on("click", function(){
                  console.log("clicked!");
                  window.location.reload();
              });
          }
          else {
            document.getElementById('counterSec').innerHTML = --seconds;
          }
          return true;
        },
        1000
      );
}