$(document).ready(function(){
            $("#main-btn-1").click(function(){
                $("#form-1").toggleClass("hidden");
                $("#form-2").addClass("hidden");
                $("#form-3").addClass("hidden");
                $("#form-4").addClass("hidden");
                
                $("#other-feature-section").addClass("hidden");
            });
    
            $("#main-btn-2").click(function(){
                $("#form-1").addClass("hidden");
                $("#form-2").toggleClass("hidden");
                $("#form-3").addClass("hidden");
                $("#form-4").addClass("hidden");
                
                $("#other-feature-section").addClass("hidden");
            });
    
            $("#main-btn-3").click(function(){
                $("#form-1").addClass("hidden");
                $("#form-2").addClass("hidden");
                $("#form-3").toggleClass("hidden");
                $("#form-4").addClass("hidden");
                
                $("#other-feature-section").addClass("hidden");
            });
    
            $("#main-btn-4").click(function(){
                $("#form-1").addClass("hidden");
                $("#form-2").addClass("hidden");
                $("#form-3").addClass("hidden");
                $("#form-4").toggleClass("hidden");
                
                $("#other-feature-section").addClass("hidden");
            });
        
            $("#other-section-heading").click(function(){
                $("#form-1").addClass("hidden");
                $("#form-2").addClass("hidden");
                $("#form-3").addClass("hidden");
                $("#form-4").addClass("hidden");
                
                $("#other-feature-section").removeClass("hidden");
            });
    
            $("#btn-1").click(function(){
                $("#list-1").toggleClass("hidden");
                $("#list-2").addClass("hidden");
                $("#list-3").addClass("hidden");
                $("#list-4").addClass("hidden");
                $("#list-5").addClass("hidden");
                $("#list-6").addClass("hidden");
            });
    
            $("#btn-2").click(function(){
                $("#list-1").addClass("hidden");
                $("#list-2").toggleClass("hidden");
                $("#list-3").addClass("hidden");
                $("#list-4").addClass("hidden");
                $("#list-5").addClass("hidden");
                $("#list-6").addClass("hidden");
            });
    
            $("#btn-3").click(function(){
                $("#list-1").addClass("hidden");
                $("#list-2").addClass("hidden");
                $("#list-3").toggleClass("hidden");
                $("#list-4").addClass("hidden");
                $("#list-5").addClass("hidden");
                $("#list-6").addClass("hidden");
            });
    
            $("#btn-4").click(function(){
                $("#list-1").addClass("hidden");
                $("#list-2").addClass("hidden");
                $("#list-3").addClass("hidden");
                $("#list-4").toggleClass("hidden");
                $("#list-5").addClass("hidden");
                $("#list-6").addClass("hidden");
            });
    
            $("#btn-5").click(function(){
                $("#list-1").addClass("hidden");
                $("#list-2").addClass("hidden");
                $("#list-3").addClass("hidden");
                $("#list-4").addClass("hidden");
                $("#list-5").toggleClass("hidden");
                $("#list-6").addClass("hidden");
            });
    
            $("#btn-6").click(function(){
                $("#list-1").addClass("hidden");
                $("#list-2").addClass("hidden");
                $("#list-3").addClass("hidden");
                $("#list-4").addClass("hidden");
                $("#list-5").addClass("hidden");
                $("#list-6").toggleClass("hidden");
            });
});
