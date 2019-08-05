

function addButton(){
    const inputName         = document.getElementById('nameInput');
    const inputPosition     = document.getElementById('position');
    const inputSalary       = document.getElementById('salary');
    const inputExperience   = document.getElementById('experience');
    const listParent        = document.getElementById('listOn');
    const list              = document.createElement('div');
    list.id='listId';
	const checkBox          = document.createElement('input');
	const editButton        = document.createElement('button');
    const deleteButton      = document.createElement('button');
    const position          = ' [Position] : ';
    const salary            = ' [Salaly] : ';
    const experience        = ' [Experience] : ';

    // const editCheckBox = document.createElement('input');
    // editCheckBox.disabled='disable';
    // editCheckBox.type='checkbox';
    // editCheckBox.id='1';

    const editInputName = document.createElement('input');
    editInputName.value=inputName.value;
    editInputName.disabled='disable';
    editInputName.type='input';
    editInputName.id='1';
    
    list.append(checkBox);
    list.append(editInputName);
    list.append(position);
    list.append(inputPosition.value);
    list.append(salary);
    list.append(inputSalary.value);
    list.append(experience);
    list.append(inputExperience.value);
	list.append(editButton);
    list.append(deleteButton);
    

    editButton.innerText    = 'Edit';
    editButton.className    = 'edit';
    editButton.onclick      = editclick;
	deleteButton.innerText  = 'Delete';
    deleteButton.className  = 'delete';
    deleteButton.onclick    = deleteclick;
    
    checkBox.type           ='checkbox';

	// เอา list ไปโชว์ใน ul 
    listParent.appendChild(list);
    
    document.getElementById('nameInput').value  ='';
    document.getElementById('position').value   ='';
    document.getElementById('salary').value     ='';
    document.getElementById('experience').value ='';
}

function deleteclick(){
    const listParent    = this.parentNode;
	const ul            = listParent.parentNode;
	//Remove the parent list item from the ul.
	ul.removeChild(listParent);

}

function editclick(){
    const ableInputName = document.getElementById('1');
    ableInputName.disabled=undefined;

    const saveButton        = document.createElement('button');
    saveButton.innerText  = 'Save';
    saveButton.className  = 'save';
    saveButton.onclick    = saveclick;
    const editList = document.getElementById('listId')
    console.log(editList);
    editList.append(saveButton);

    
}

 function saveclick(){
    const ableInputEdit = document.getElementById('1');
    ableInputEdit.disabled='disable';
}