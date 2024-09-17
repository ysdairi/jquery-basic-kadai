// 1.ボタンを押すと、文字色が変わる
// 2.ボタンを押すと、文字内容が変わる
// 3.ボタンを押すと、フェードアウトで文字が消える
// 4.ボタンを押すと、フェードインで文字が現れる
$(function(){
  $('#change-color').on('click',function(){
    $('#target').css('color','red');
  });
});

$(function(){
  $('#change-text').on('click',function(){
    $('#target').text('Hello!');
  });
});

$(function(){
  $('#fade-out').on('click',function(){
    $('#target').fadeOut();
  });
});

$(function(){
  $('#fade-in').on('click',function(){
    $('#target').fadeIn();
  });
});