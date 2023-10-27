const cl = console.log;

const data = document.getElementById("data");

let stddata = [
    {
	    Name:"Robert",
		Batch:"1",
		Nickname:"rob",
		Contact:"1234567890",
		Email:"robert@gmail.com"
    },
    {
		Name:"Rolex",
		Batch:"5",
		Nickname:"rox",
		Contact:"0987654321",
		Email:"rolex@gmail.com"
	},
	{
		Name:"Robeen",
		Batch:"5",
		Nickname:"roob",
		Contact:"1122334455",
		Email:"robeen@gmail.com"
	},
	{
		Name:"Raaj",
		Batch:"1",
		Nickname:"raju",
		Contact:"6677889900",
		Email:"raaj@gmail.com"
	},
	{
		Name:"Ramesh",
		Batch:"2",
		Nickname:"ram",
		Contact:"5544332211",
		Email:"ramesh@gmail.com"
	},
	{
		Name:"Rahul",
		Batch:"4",
		Nickname:"rohx",
		Contact:"0099887766",
		Email:"rahul@gmail.com"
	},
	{
		Name:"Ravindra",
		Batch:"3",
		Nickname:"ravi",
		Contact:"1100229933",
		Email:"ravindra@gmail.com"
	}

]

let result = ``;

stddata.forEach((std, i) => {
	result += `
	            <tr>
					<td class="table-primary">${i + 1}</td>
					<td class="table-secondary">${std.Name}</td>
					<td class="table-success">${std.Batch}</td>
					<td class="table-warning">${std.Nickname}</td>
					<td class="table-danger">${std.Contact}</td>
					<td class="table-light">${std.Email}</td>
				</tr>
	             `
})
data.innerHTML = result;