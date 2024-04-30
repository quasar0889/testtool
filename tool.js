$.ajax({
    url: "https://ipinfo.io",
    dataType: "jsonp",
    success: function(res){
         $(".ip-address").text(res.ip);
    }
});
