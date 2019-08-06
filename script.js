

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
    //save button
    const saveButton        = document.createElement('button');
    saveButton.innerText    = 'Save';
    saveButton.className    = 'save';
    saveButton.onclick      = saveclick;
    // saveButton.disabled  = 'disable';


    // const editCheckBox = document.createElement('input');
    // editCheckBox.disabled='disable';
    // editCheckBox.type='checkbox';
    // editCheckBox.id='1';

    const editInputName     = document.createElement('input');
    editInputName.value     = inputName.value;
    editInputName.disabled  = 'disable';
    editInputName.type      = 'text';
    editInputName.id        = '1';

    const editInputPosition     = document.createElement('input');
    editInputPosition.value     = inputPosition.value;
    editInputPosition.disabled  = 'disable';
    editInputPosition.type      = 'text';
    editInputPosition.id        = '2';

    const editInputSalary     = document.createElement('input');
    editInputSalary.value     = inputSalary.value;
    editInputSalary.disabled  = 'disable';
    editInputSalary.type      = 'number';
    editInputSalary.id        = '3';

    const editInputExperience     = document.createElement('input');
    editInputExperience.value     = inputExperience.value;
    editInputExperience.disabled  = 'disable';
    editInputExperience.type      = 'number';
    editInputExperience.id        = '4';
    
    list.append(checkBox);
    list.append(editInputName);
    list.append(position);
    list.append(editInputPosition);
    list.append(salary);
    list.append(editInputSalary);
    list.append(experience);
    list.append(editInputExperience);
	list.append(editButton);
    list.append(deleteButton);
    list.append(saveButton);
    

    editButton.innerText    = 'Edit';
    editButton.className    = 'edit';
    editButton.onclick      = editclick;
	deleteButton.innerText  = 'Delete';
    deleteButton.className  = 'delete';
    deleteButton.onclick    = deleteclick;
    
    checkBox.type           ='checkbox';

	// เอา list ไปโชว์ใน ul 
    listParent.appendChild(list);
    
    document.getElementById('nameInput').value  = '';
    document.getElementById('position').value   = '';
    document.getElementById('salary').value     = '';
    document.getElementById('experience').value = '';
}

function deleteclick(){
    const listParent    = this.parentNode;
	const ul            = listParent.parentNode;
	//Remove the parent list item from the ul.
	ul.removeChild(listParent);

}

function editclick(){
    const ableInputName             = document.getElementById('1');
    ableInputName.disabled          = undefined;

    const ableInputPosition         = document.getElementById('2');
    ableInputPosition.disabled      = undefined;

    const ableInputSalary           = document.getElementById('3');
    ableInputSalary.disabled        = undefined;
    
    const ableInputExperience       = document.getElementById('4');
    ableInputExperience.disabled    = undefined;
    
    

    
}

 function saveclick(){
    const ableInputEdit         = document.getElementById('1');
    ableInputEdit.disabled      = 'disable';

    const ableInputPosition     = document.getElementById('2');
    ableInputPosition.disabled  = 'disable';

    const ableInputSalary       = document.getElementById('3');
    ableInputSalary.disabled    = 'disable';

    const ableInputExperience     = document.getElementById('4');
    ableInputExperience.disabled  = 'disable';
}