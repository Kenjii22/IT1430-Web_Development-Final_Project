/* 
	IT 1430-Web Page Development Assignment 5
	Author: Omari Barrett
	Date: 11/11/2020
	Due: 11/12/2020
*/

//creates a list of city officials
function officials() {
	document.write("<ul> <li> Mayor Jue B. Life</li>");
	document.write("<li> Officer Jenny </li>");
	document.write("<li> Nurse Joy </li> </ul>");
}

//submits form if all elements are filled out
function submitEvents(e) {
	if(e.getElementById(rName).value && e.getElementById(rEmail).value && e.getElementById(eName).value && e.getElementById(eLoc).value && e.getElementById(eDate).value && e.getElementById(eAge).value != "") {
		alert("Thank you!");
	} else {
		alert("Please fill in all fields.");
		sButton.preventDefault();//I still cant get this function to work. I dont understand why it doesnt work
	}	
}

//shows the name of the point of interest when the img is clicked
function poi(img) {
	alert(img.alt);
}

//outputs the business info using loop
function business() {
	var name = [ "Pokémon Center", "Trainer School", "Global Trade Station*", "The Pokétch Company", "Jubilife TV", "Jubilife Condominiums", "Pokémon Market" ];
	
	var service = [ "Healthcare Facility", "Learning Facility", "Global Communications", "Electronics Manufacturer", "Entertainment Station", "Apartment Complex", "Retail Store" ];
	
	var descript = [ "The Pokémon Center, also known as the PokéCenter, is where trainers go to  get their pokémon healed from battle damage as well as access their PC to adjust their teams.",
					"The Trainer School is a place where both new and soon-to-be trainers can come together to learn about the basics of pokémon.",
					"The Global Trade Station, or GTS, is a place where trainers can come and trade their pokémon with other trainers far away in distant regions.",
					"The Pokétch Company HQ is the home of the creators of the illustrious pokémon watch, or pokétch for short, and where you can receive new apps and updates.",
					"Jubilife TV is were most if not all of Sinnoh's top shows are brodcated from and is open for trainers to either dress up their pokémon for all to see or to participate in the Pokémon Lottery Corner.",
					"Jubilife Condominiums is an apartment complex that is currently looking for new tenants to apply.",
					"The Pokémon Market, or PokéMart, is the shop for trainers to come and get supplies for their tavels such as pokéballs and medicine." ];
	
	var local = [ "The PokéCenter can be found in the south-eastern part of the city next to the Trainer School.",
					"The Trainer School can be found in the south-eastern part of the city next to the PokéCenter.",
					"The GTS can be found on the west side of Jubilife, past the Trainer School.",
					"The Pokétch Company is located in the north-western part of Jubilife, near the western exit of the city.",
					"Jubilife TV can be found on the northern end of the city next to the northern exit of the city.",
					"Jubilife Condominiums is located in the north-eastern corner of the city next to the eastern exit.",
					"The PokéMart is located in the western part of the city, right behind the PokéCenter." ];
	
	document.write("<table> <caption> *Access is restricted to trainers with at least 1 gym badge. </caption>");
	document.write("<tr> <th> Name </th>");
	document.write("<th> Service </th>");
	document.write("<th> Descripton </th>");
	document.write("<th> Locaton </th> </tr>");
	
	for(var i = 0; i < name.length; i++) {
		document.write("<tr> <th>" + name[i] + "</th>")
		document.write("<td>" + service[i] + "</td>")
		document.write("<td>" + descript[i] + "</td>")
		document.write("<td>" + local[i] + "</td> </tr>")
	}
	
	document.write("</table>");
}