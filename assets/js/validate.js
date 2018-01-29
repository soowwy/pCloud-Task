$(function() {
    var flag_username = 0;
    var flag_email = 0;
    var flag_select = 0;
    var flag_textarea = 0;

    $("#username_error_message").hide();
    $("#email_error_message").hide();
    $("#select_error_message").hide();
    $("#textarea_error_message").hide();
    $("#alert-on-submit").hide();

    $("#form_username").focusout(function() {
        chek_username();
    });
    $("#form_email").focusout(function() {
        chek_email();
    });
    $("#form_select").focusout(function() {
        chek_select();
    });
    $("#form_textarea").focusout(function() {
        chek_textarea();
    });

    function chek_username() {

        var username_val = $("#form_username").val();
        var username_length = $("#form_username").val().length;
        var username_regex =  new RegExp(/^[a-zA-Z\s]+$/);

            if(!username_regex.test(username_val) || username_length < 3 || username_length > 100) {
                $("#username_error_message").html("3-100 characters and in letters only!");
                $("#username_error_message").show();
                $("#name_mark").attr("src", './assets/images/x-mark.png');
                
            } else {
                $("#username_error_message").hide();
                flag_username = 1;
                $("#name_mark").attr("src", './assets/images/tick_mark.png');
            }

    }


    function chek_email() {

        var email_val = $("#form_email").val();
        var email_regex = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

        if (!email_regex.test(email_val)) {
            $("#email_error_message").html("Please enter a valid email address!");
            $("#email_error_message").show();
            $("#email_mark").attr("src", './assets/images/x-mark.png');
        } else {
            $("#email_error_message").hide();
            flag_email = 1;
            $("#email_mark").attr("src", './assets/images/tick_mark.png');
        }

    }


    function chek_select() {
        var select_val = $("#form_select").val();

        if(select_val === null || select_val === '' || select_val == '0') {
            $("#select_error_message").html("Please select one of the options below!");
            $("#select_error_message").show();
            $("#select_mark").attr("src", './assets/images/x-mark.png');
        } else {
            $("#select_error_message").hide();
            flag_select = 1;
            $("#select_mark").attr("src", './assets/images/tick_mark.png');
        }
    }


    function chek_textarea() {
        var textarea_val = $("#form_textarea").val();
        var textarea_length = $("#form_textarea").val().length;
        var textarea_regex =  new RegExp(/\s/);

            if (textarea_regex.test(textarea_val) || textarea_length <= 10 || textarea_length > 500) {
                $("#textarea_error_message").html("Text should not have blank characters and should be between 10-500 letters!");
                $("#textarea_error_message").show();
                $("#textarea_mark").attr("src", './assets/images/x-mark.png');
            } else {
                $("#textarea_error_message").hide();
                flag_textarea = 1;
                $("#textarea_mark").attr("src", './assets/images/tick_mark.png');
            }
            
  
        }


        $("#registration_form").submit(function(e) {

            var form = this;

            chek_username();
            chek_email();
            chek_select();
            chek_textarea();


            

            if(flag_username === 1 && flag_email === 1 && flag_select === 1 && flag_textarea === 1) {
                console.log("success");
                $("#alert-on-submit").show();

                event.preventDefault();

                setTimeout( function () { 
                    form.submit();
                }, 2000);
                
            } else {
                console.log(flag_username, flag_email, flag_select, flag_textarea)
                console.log("nope");
                return false;
            }
        })


});