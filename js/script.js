$(document).ready(function(){
	$('.modal-container').hide();

	const url = `https://randomuser.me/api/?results=12`;
	  
	getInfo();

	async function getInfo(){
		const data = await fetch(url)
		.then((response) => response.json())
		.then(data =>{
			employees = data.results;
        console.log(employees);
        let divhtml = '';
        let divModalHTML = '';

		$.each(employees, function (i, employee) {

			divhtml += '<div id=' + i + ' class="card"> <div class="card-img-container"> <img class="card-img"';
			divhtml += 'src=' + data.results[i].picture.large + ' alt="profile picture">'
			divhtml += '</div>'
			divhtml += '<div class="card-info-container">';
			divhtml += '<h3 id="name' + i + ' class="card-name cap">' + data.results[i].name.first + ' ' + data.results[i].name.last + '</h3>';
			divhtml += '<p class="card-text">' + data.results[i].email + '</p>';
			divhtml += '<p class="card-text cap">' + data.results[i].location.city + ', ' + data.results[i].location.state + '</p>';
			divhtml += '</div> </div>'
  
		  });
		  $('#gallery').html(divhtml);
		  $('.card').on("click", function(){
			divModalHTML = '';
			let i = this.id;
  
			divModalHTML += '<div class="modal">';
			divModalHTML += '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>';
			divModalHTML += '<div id="modal' + i + '" class="modal-info-container">';
			divModalHTML += '<img class="modal-img" src="' + data.results[i].picture.large + '" alt="profile picture">';
			divModalHTML += '<h3 id="name' + i + ' class="modal-name cap">' + data.results[i].name.first + ' ' + data.results[i].name.last + ' </h3>';
			divModalHTML += '<p class="modal-text">' + data.results[i].email + ' </p>';
			divModalHTML += '<p class="modal-text cap">' + data.results[0].location.city + ' </p>';
			divModalHTML += '<hr>';
			divModalHTML += '<p class="modal-text">' + data.results[i].phone + ' </p>';
			divModalHTML += '<p class="modal-text">' + data.results[i].location.street.number + ' ' + data.results[i].location.street.name + ', ' + data.results[0].location.city + ', ' + data.results[0].location.state + ' ' + data.results[0].location.postcode + ' </p>';
			divModalHTML += '<p class="modal-text"> BirthDay: ' + data.results[i].dob.date.substring(0, 10) + ' </p>'
			divModalHTML += '</div>'
			divModalHTML += '</div>'
			//add the html for the modal to the modal id
			$('#modal').html(divModalHTML);

			// openning modal container when click on card
			$('.card').on("click", function () {
			  $('.modal-container').show();
			});
  
			// closing the modal container by clicking on the cross
			$('.modal-close-btn').on("click", function () {
			  $('.modal-container').hide();
			});
		  });
		})
		.catch((error) => console.log(error));
	}




});