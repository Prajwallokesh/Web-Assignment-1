$(function(){
    const currentPage=window.location.pathname.split("/").pop()||"index.html";
    $(".nav-link").each(function(){
        const page=$(this).data("page");
        if((currentPage===""&&page==="home")||(currentPage==="index.html"&&page==="home")||(currentPage.includes(page)&&page!=="home")){
            $(this).addClass("active");
        }
    });
    $("#year").text(new Date().getFullYear());
    const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                $(entry.target).addClass("visible");
            }
        });
    },{threshold:0.15});
    $(`[data-animate]`).each(function(){
        observer.observe(this);
    });
    $(".nav-link").on("mouseenter focus",function(){
        $(this).css("transform","translateY(-2px)");
    }).on("mouseleave blur",function(){
        $(this).css("transform","translateY(0)");
    });
});