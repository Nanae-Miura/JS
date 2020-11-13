
var random
$('.gu').click(function(){
        random=Math.floor(Math.random()*3);
        console.log(random);
        $(".result").html('<img src="img/gu.png">');
        if(random==0){
            $(".result2").html('<img src="img/gu.png">');
            $(".center").html("Draw");
        } else if(random==1){
            $(".result2").html('<img src="img/pa.png">');
            $(".center").html("You lose");
        }else{
            $(".result2").html('<img src="img/choki.png">');
            $(".center").html("You win!"); }
})

$('.pa').click(function(){
 random=Math.floor(Math.random()*3);
    console.log(random);
    $(".result").html('<img src="img/pa.png">');
    
    if(random==0){
        $(".result2").html('<img src="img/gu.png">');
        $(".center").html("You win!");
    } else if(random==1){
        $(".result2").html('<img src="img/pa.png">');
        $(".center").html("Draw");
    }else{
        $(".result2").html('<img src="img/choki.png">')
        $(".center").html("You lose!"); }
    })

$('.choki').click(function(){
 random=Math.floor(Math.random()*3);
    console.log(random);
    $(".result").html('<img src="img/choki.png">');

    if(random==0){
        $(".result2").html('<img src="img/gu.png">');
        $(".center").html("You lose!");
    } else if(random==1){
        $(".result2").html('<img src="img/pa.png">');
        $(".center").html("You win!");
    }else{
        $(".result2").html('<img src="img/choki.png">');
        $(".center").html("Draw"); }
    })

    const array=[
        '<img src="img/choki.png">',
        '<img src="img/gu.png">',
        '<img src="img/pa.png">'
    ];
   
    // ↑コンストをシャッフルしたい！
      const shuffle = ([...array]) => {
        for (let i = array.length - 1; i >= 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
       }
// こっちでは以下の機能を作るよ！とは宣言しているけど、この機能を使うよ！とは言ってない
       let shuffleId;
       const changeImg = () => {
        shuffleId = setInterval(function(){
            // bun2とは？
          for(let bun2 of shuffle(array)){//シャッフル後の配列の要素繰り返し
              $('.shuffle').html(bun2); }
        }, 80);
    }
    changeImg();
    // changeImgを表示させる
    
    $(".buttons").on('click',function(){
        clearInterval(shuffleId);
       $(".shuffle").hide();
      $(".shuffle").Toggle();
// toggleでdiv　shuffleをhideする切替をつけた
       
            
            })
            // シャッフルが止まる

        