var validate = require("../validate");

var _login = new validate({
    username: {
        required: true,
        minlength: 2,
        maxlength: 10
    },
    userpwd: {
        required: true
    },
}, {
    username: {
        required: '请输入账号/手机号'
    },
    userpwd: {
        required: '请输入密码'
    }
});

function data(Ee, uname, $, done) {
    var _formData = $.getData("formData");
    var checkVali;
    if (uname) {
        if ("login" == uname) {
            checkVali = _login;
        }
    }
   if(!$.isUndefined(Ee["detail"]) ){
        if (!checkVali.checkForm(Ee)) {
            const error = checkVali.errorList;
            var _id = "",_msg = "";
            if (error.length > 1) {
                $.each(error, function(msk, item) {
                    _id = item['param'], _msg = item['msg'];
                    _formData[_id + "MSG"] = _msg;
                })
            } else {
                _id = error[0]['param'], _msg = error[0]['msg'];
                _formData[_id + "MSG"] = _msg;
            }
            $.setData({ "formData": _formData });
        }else{
            var valiForm = checkVali.form;
            $.each(valiForm, function(msk, item) {
                _formData[msk + "MSG"] = false;
            })
            $.setData({ "formData": _formData });
            $.isFunction(done) && done(data);
        }
   }else{
        console.log(checkVali.checkParam(Ee))
   }

}

module.exports = data;