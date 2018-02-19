function validate()
{ 
   if( document.StudentRegistration.firstname.value == "" )
   {
     alert( "Please provide your First Name!" );
     document.StudentRegistration.firstname.focus() ;
     return false;
   }
   if( document.StudentRegistration.lastname.value == "" )
   {
     alert( "Please provide your Last Name!" );
     document.StudentRegistration.lastname.focus() ;
     return false;
   }
   if( document.StudentRegistration.username.value == "" )
   {
     alert( "Please provide your User Name!" );
     document.StudentRegistration.username.focus() ;
     return false;
   }
   
   
}