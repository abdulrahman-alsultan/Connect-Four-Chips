var nameOfPlayerOne = prompt("Player One: Enter Youe Name, you will be Blue")
var nameOfPlayerTwo = prompt("Player Two: Enter Youe Name, you will be Red")

player = 1
var win = 0

function Player_One() {
  $('h1').text(nameOfPlayerOne+" has won! Refresh your browser to play again!")
  $('h2').fadeOut('fast')
  $('h3').fadeOut('fast')
  win =1
}

function Player_Two() {
  $('h1').text(nameOfPlayerTwo+" has won! Refresh your browser to play again!")
  $('h2').fadeOut('fast')
  $('h3').fadeOut('fast')
  win =1
}



function iswin1() {
  for (var i = 0; i <5; i++) {
    for (var q = 0; q < 4; q++) {
      if($('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i).find('td').eq(q+1).css('background-color')&&
        $('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i).find('td').eq(q+2).css('background-color')&&
        $('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i).find('td').eq(q+3).css('background-color')
       &&$('tr').eq(i).find('td').eq(q).css('background-color')=='rgb(0, 0, 255)'){

         Player_One()
      }
      else if($('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i).find('td').eq(q+1).css('background-color')&&
        $('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i).find('td').eq(q+2).css('background-color')&&
        $('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i).find('td').eq(q+3).css('background-color')
       &&$('tr').eq(i).find('td').eq(q).css('background-color')=='rgb(255, 0, 0)'){

         Player_Two()
      }
    }
  }
}


function iswin2(){
  for(var i=0;i<2;i++){
    for(var q=0;q<7;q++){
      if($('tr').eq(i).find('td').eq(q).css('background-color')===$('tr').eq(i+1).find('td').eq(q).css('background-color')&&
        $('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i+2).find('td').eq(q).css('background-color')&&
        $('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i+3).find('td').eq(q).css('background-color')
        &&$('tr').eq(i).find('td').eq(q).css('background-color')=="rgb(0, 0, 255)"){
          Player_One()
        }
        else if($('tr').eq(i).find('td').eq(q).css('background-color')===$('tr').eq(i+1).find('td').eq(q).css('background-color')&&
          $('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i+2).find('td').eq(q).css('background-color')&&
          $('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i+3).find('td').eq(q).css('background-color')
          &&$('tr').eq(i).find('td').eq(q).css('background-color')=="rgb(255, 0, 0)"){
            Player_Two()
          }
    }
  }
}

function iswin3(){
  for(var i=0;i<3;i++){
    for(var q=0;q<4;q++){
      if($('tr').eq(i).find('td').eq(q).css('background-color')===$('tr').eq(i+1).find('td').eq(q+1).css('background-color')&&
        $('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i+2).find('td').eq(q+2).css('background-color')&&
        $('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i+3).find('td').eq(q+3).css('background-color')
        &&$('tr').eq(i).find('td').eq(q).css('background-color')=="rgb(0, 0, 255)"){
          Player_One()
        }
        else if($('tr').eq(i).find('td').eq(q).css('background-color')===$('tr').eq(i+1).find('td').eq(q+1).css('background-color')&&
          $('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i+2).find('td').eq(q+2).css('background-color')&&
          $('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i+3).find('td').eq(q+3).css('background-color')
          &&$('tr').eq(i).find('td').eq(q).css('background-color')=="rgb(255, 0, 0)"){
            Player_Two()
          }
    }
  }
}
function iswin4(){
  for(var i=0;i<3;i++){
    for(var q=6;q>2;q--){
      if($('tr').eq(i).find('td').eq(q).css('background-color')===$('tr').eq(i+1).find('td').eq(q-1).css('background-color')&&
        $('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i+2).find('td').eq(q-2).css('background-color')&&
        $('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i+3).find('td').eq(q-3).css('background-color')
        &&$('tr').eq(i).find('td').eq(q).css('background-color')=="rgb(0, 0, 255)"){
          Player_One()
        }
        else if($('tr').eq(i).find('td').eq(q).css('background-color')===$('tr').eq(i+1).find('td').eq(q-1).css('background-color')&&
          $('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i+2).find('td').eq(q-2).css('background-color')&&
          $('tr').eq(i).find('td').eq(q).css('background-color')==$('tr').eq(i+3).find('td').eq(q-3).css('background-color')
          &&$('tr').eq(i).find('td').eq(q).css('background-color')=="rgb(255, 0, 0)"){
            Player_Two()
          }
    }
  }
}



$('td').click( function() {
  if(win===0){
    var col = $(this).closest('td').index()
    for (var i = 4; i > -1; i--) {
      if($('tr').eq(i).find('td').eq(col).css('background-color') =='rgb(128, 128, 128)'){
        if (player ==1) {
          $('tr').eq(i).find('td').eq(col).css('background-color','rgb(0, 0, 255)')
          player*=-1
          $('h3').text(nameOfPlayerTwo+" it's your turn")
          iswin1()
          iswin2()
          iswin3()
          iswin4()
          break
        }
        else {
          $('tr').eq(i).find('td').eq(col).css('background-color','rgb(255, 0, 0)')
          player*=-1
          $('h3').text(nameOfPlayerOne+" it's your turn")
          iswin1()
          iswin2()
          iswin3()
          iswin4()
          break
        }
      }
    }
  }
})
