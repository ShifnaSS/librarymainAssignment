
let name_book = document.getElementById("name_book");
let name_author = document.getElementById("name_author");
let genre_book = document.getElementById("genre_book");
let book_year = document.getElementById("book_year");
let image_book = document.getElementById("image_book");
let check_book = document.getElementById("check_book");
 let form = document.getElementById("form");

function validateBook() {
   
    // prevent the form from submitting
	let isnameValid = checkName(),
		isauthornameValid = checkAuthorName(),
        isgenreValid = checkBookGenre(),
        isBookYearValid = checkBookYear(),
        isImageBook = imageBook();
        let isFormValid = isnameValid && isauthornameValid && isBookYearValid && isImageBook && isgenreValid;
        if (isFormValid) {
            if(!check_book.checked)
            {
                alert('You must agree to the terms first.');
                return false;
            }
            else{
                alert("Added Successfully");
                return true;
            }
        }
        else{
            return false;
        }
}

const checkName=()=>{
    let valid = false;
    if(name_book.value.trim()==""){
        name_book.style.border = "1px solid red";
        return valid
    }
    else{
        name_book.style.border = "1px solid green";
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
const checkBookGenre=()=>{
    let valid = false;
    if(genre_book.value=="-- Genre --"){
        genre_book.style.border = "1px solid red";
        return valid
    }
    else{
        genre_book.style.border = "1px solid green";
        valid = true;
        return valid;
    }
}
const checkBookYear = ()=>{
    let valid = false;
    if(book_year.value=="Published Year"){
        book_year.style.border = "1px solid red";
        return valid
    }
    else{
        book_year.style.border = "1px solid green";
        valid = true;
        return valid;
    }
}
const imageBook=()=>{
    let valid = false;
    if(image_book.value==""){
        image_book.style.border = "1px solid red";
        return valid
    }
    else{
        image_book.style.border = "1px solid green";
        valid = true;
        return valid;
    }
}
form.addEventListener('input',function(e){
    e.preventDefault();
    switch (e.target.id) {
        case 'name_book':
            checkName();
            break;
		case 'name_author':
			checkAuthorName();
			break;
		case 'genre_book':
			checkBookGenre();
			break;
		case 'book_year':
			checkBookYear();
			break;
        case 'image_book':
            imageBook();
            break;
        // case 'image_book':
        //     checkConfirmPassword();
        //     break;   
	}
});