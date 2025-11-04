// product1 js
const result=document.getElementById("result");
var num=1;
function increment(){
    num=num+1;
    result1.innerHTML=num+"";


}
function decrement(){
    if(num>=1){
        num=num-1;
        result1.innerHTML=num+"";
    }
    else
    {
        alert("Cannot decrement below 1");
    }
    
}

// product2 js
const result1=document.getElementsById("result1");
var num=1;
function increment(){
    num=num+1;
    result.innerHTML=num+"";


}
function decrement(){
    if(num>=1){
        num=num-1;
        result.innerHTML=num+"";
    }
    else
    {
        alert("Cannot decrement below 1");
    }
    
}

$(document).ready(function(){
    $("#search-btn").click(function(){
        var taskName = $("#taskName").val();
        var taskList = $("#taskList");
        taskList.empty();
        var ul = $('<ul></ul>');
        var li = $('<li></li>');
        li.text(taskName);
        ul.append(li);
        taskList.append(ul);
    });
    $("#taskName").on("keyup", function(event){
        if(event.keyCode === 13){
            $("#search-btn").click();
        }
    });
    $("#clear-btn").click(function(){
        $("#taskName").val("");
        $("#taskList").empty();
    });
    $("#sort-btn").click(function(){
        $("#taskList").children().sort(function(a, b){
            return $(a).text().localeCompare($(b).text());
        }).appendTo("#taskList");
    });
    $("#filter-btn").click(function(){
        var filterText = $("#filterText").val().toLowerCase();
        $("#taskList li").each(function(){
            var text = $(this).text().toLowerCase();
            if(text.indexOf(filterText) > -1){
                $(this).show();
            }
            else{
                $(this).hide();
            }
        });
    });
    $("#continueshopping").mouseenter(function(){
        $("h3").css("color","white").css('background-color','black');

    });
    $("#continueshopping").mouseleave(function(){
        $("#continueshopping").css("color","white").css('background-color','black');

    });
    

});
$(document).ready(function(){
    $("#continueshopping").click(function(){
      $("h3").css("color", "red")
        .slideUp(2000)
        .slideDown(2000);
    });
  });
  $(document).ready(function(){
    $("#continueshopping").on({
      mouseenter: function(){
        $(this).css("background-color", "lightgray");
      },  
      mouseleave: function(){
        $(this).css("background-color", "lightblue");
      }
       
    });
  });
