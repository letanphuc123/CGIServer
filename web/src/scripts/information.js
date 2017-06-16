//<editor-fold defaultstate="collapsed" desc="ELEMENT">
var _frmSendCGI = "#frm_send_cgi";
////</editor-fold>

var ContenSiteKeyword = function () {

    //<editor-fold defaultstate="collapsed" desc="HANDLE SEND CGI">
    var handleSendCGI = function () {
        $("_frmSendCGI").validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                txt_first_name: {
                    required: true
                }
            },
            onfocusout: function (element) {
                $(element).valid();
            },
            highlight: function (element) { // hightlight error inputs
                $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                $(element).closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label.closest('.form-group').removeClass('has-error'); // set success class to the control group
            },
            submitHandler: function () {
                sendCGI();
            }
        });
    };
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="INIT">
    return {
        init: function () {
            handleSendCGI();
        }
    };
    //</editor-fold>

}();

//<editor-fold defaultstate="collapsed" desc="SEND CGI">
var submitAction = function () {
    window.location.href = "CGIServer/cgi_bin/reply1.pl";
};
//</editor-fold>
