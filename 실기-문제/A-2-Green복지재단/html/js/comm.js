//준비이벤트
//(html 코드를 다읽고나서 실행해줘)

//일반형
//$(document).ready(function(){});

// 축약형
$(function () {
  // modal
  // .lst-bbs li:first-child 를 클릭했을때
  $(".lst-bbs li:first-child").click(function (e) {
    //a태그의 링크값 없애기
    e.preventDefault();
    //#modal 을 찾아서 display를 flex로 변경해줘
    $("#modal").css("display", "flex");
  });
  // .btn-close 를 클릭했을때
  $(".btn-close").click(function () {
    //#modal 을 찾아서 display를 flex로 변경해줘
    $("#modal").css("display", "none");
  });
});

//  // .btn-close 를 클릭했을때
//$(".modal-box .btn-close").on("click focus", function () {
//#modal 을 찾아서 display를 none로 변경해줘
//$("#modal").hide();
//});
