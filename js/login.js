$(document).ready(function(){
 $('button').on('click',function(){
    var username =$('#user').val();
    var password =$('#pass').val();
    var email =$('#email').val();
  username == "" ? setError('#user','#u-label') : setSuccess('#user','#u-label');
  password == "" ? setError('#pass','#p-label') : setSuccess('#pass','#p-label');
  email == "" ? setError('#email','#e-label') : setSuccess('#email','#e-label');

 })
})
function setSuccess (success,icon){
  $(success).addClass('border-success').removeClass('border-danger');
  $(icon).addClass('text-success').removeClass('text-danger');
}
function setError(error,icon){
  $(error).addClass('border-danger').removeClass('border-success');
  $(icon).addClass('text-danger').removeClass('text-success');
}