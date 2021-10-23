
let name_author = document.getElementById("name_author");
let nation = document.getElementById("nation");
let genre_author = document.getElementById("genre_author");
let work = document.getElementById("work");
let img_file = document.getElementById("img_file");
let check = document.getElementById("check");
 let form = document.getElementById("form");

function validateAuthor() {
   
    // prevent the form from submitting
	let isauthornameValid = checkAuthorName(),
        isNationValid = checkNation(),
        isgenreValid = checkAuthorGenre(),
        isWorkValid = checkWork(),
        isImageAuthor = imageAuthor();
        let isFormValid = isNationValid && isauthornameValid && isWorkValid && isImageAuthor && isgenreValid;
        if (isFormValid) {
            if(!check.checked)
            {
                alert('You must agree to the terms first.');
                return false;
            }
            else{
                alert("Added Succefully");
                return true;
            }
        }
        else{
            return false;
        }
}

const checkNation=()=>{
    let valid = false;
    if(nation.value=="Nationality"){
        nation.style.border = "1px solid red";
        return valid
    }
    else{
        nation.style.border = "1px solid green";
        valid = true;
        return valid;
    }
}
const checkAuthorName=()=>{
    let valid = false;
    if(name_author.value.trim()==""){
        name_author.style.border = "1px solid red";
        return valid
    }
    else{
        name_author.style.border = "1px solid green";
        valid = true;
        return valid;
    }
}
const checkAuthorGenre=()=>{
    let valid = false;
    if(genre_author.value=="-- Genre --"){
        genre_author.style.border = "1px solid red";
        return valid
    }
    else{
        genre_author.style.border = "1px solid green";
        valid = true;
        return valid;
    }
}
const checkWork = ()=>{
    let valid = false;
    if(work.value.trim()==""){
        work.style.border = "1px solid red";
        return valid
    }
    else{
        work.style.border = "1px solid green";
        valid = true;
        return valid;
    }
}
const imageAuthor=()=>{
    let valid = false;
    if(img_file.value==""){
        img_file.style.border = "1px solid red";
        return valid;
    }
    else{
        img_file.style.border = "1px solid green";
        valid = true;
        return valid;
    }
}
form.addEventListener('input',function(e){
    e.preventDefault();
    switch (e.target.id) {
        case 'nation':
            checkNation();
            break;
		case 'name_author':
			checkAuthorName();
			break;
		case 'genre_author':
			checkAuthorGenre();
			break;
		case 'work':
			checkWork();
			break;
        case 'img_file':
            imageAuthor();
            break;
        // case 'image_book':
        //     checkConfirmPassword();
        //     break;   
	}
});