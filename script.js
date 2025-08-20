function getFormvalue(event) {
    //Write your code here
	 event.preventDefault();

      // Get values from form fields
      let firstName = document.querySelector("input[name='fname']").value;
      let lastName = document.querySelector("input[name='lname']").value;

      // Show full name in alert
	
		
	
      alert(firstName + " " + lastName);
	
	

}
