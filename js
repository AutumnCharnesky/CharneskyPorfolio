function createButton(context, fun){
  var button=document.createElement("input");
  button.type="button";
  button.value="im a button";
  button.onclick=func;
  context.appendChild=(button);
}
