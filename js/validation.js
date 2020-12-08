/* Form Validation Example */
/* Personal Web Site-Visitor Form Validation */
/* See comments with TODO for code you need to implement */
const stateAbbreviations = [
  'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
  'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
  'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
  'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
  'VT','VI','VA','WA','WV','WI','WY'
 ];
         
function initValidation(formName) {

  let $form = $(formName);

  $(':input').change(function(ev){
    validateForm();
    if(!this.checkValidity())
      $(this).addClass("was-validated")

    //NOTE: we use 'was-validated' class so that you show the error indications only for the single field rather
    //than the whole form at once
  });
  
  $("#myform").submit(function(event){
    $form = $("#myform");
    formEl=$form.get(0);

    event.preventDefault();  //prevent default browser submit
    event.stopPropagation(); //stop event bubbling

    validateForm();

    if (!formEl.checkValidity()){
      $(":input").addClass("was-validated")
    }
    else{
      //hide form
      $("#myform").hide();
      //show thank you message
      $("#successMsg").show();
    }
  });
}

function validateForm() {
  validateState("#state", "You must enter a valid two character state code, e.g., UT");
  //note, to validate the group, just passing in id of one of them, we will use name to check status of group
  validateCheckboxGroup("#newspaper", "you must select at least one!");
}

function validateState(id, msg){
  $el = $(id);
  let valid=false;
  //get value from $el, and convert to upper case
  var stateCode = ($el.val()).toUpperCase();
  //check whether the value is in the stateAbbreviations array
  if (stateAbbreviations.includes(stateCode)) {
    valid=true;
  }
  setElementValidity(id, valid, msg);
}

function validateCheckboxGroup(fieldName, message) {
  let valid=false;
  //Validate whether any of the checkboxes are checked. set 'valid' to true if checked
  // Get the "name" attr that the "#newspaper" belongs to.
  $name = $(fieldName).attr("name");
  // use that name to query the number of checkboxes with that name that area also in a checked state.
  if ($('input[name=' + $name +']:checked').length >= 1) {
    // If 1 or more box is selected then submission is valid.
    valid=true;
  }
  setElementValidity(fieldName, valid, message);
  return valid;
}

function setElementValidity(fieldName, valid, message){
  let $field=$(fieldName);
  let el = $field.get(0);
  if (valid) {  //it has a value
    el.setCustomValidity('');  //sets to no error message and field is valid
  } else {
    el.setCustomValidity(message);   //sets error message and field gets 'invalid' stat
  }
}