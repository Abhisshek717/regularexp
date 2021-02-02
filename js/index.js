function validateEmail(){
   var message = document.querySelector("#message");

   var mobile = document.querySelector("#mobile").value;

   if(mobile.match("^[6-9]{1}[0-9]{9}$")!=null)
   {
       message.classList.remove("alert-warning");
       message.classList.add("alert","alert-info","mb-3");
       message.textContent="valid mobile number";
   }
   else 
   {
       message.classList.remove("alert-info");
       message.classList.add("alert","alert-warning","mb-3");
       message.textContent ="Invalid mobile number";
   }

}