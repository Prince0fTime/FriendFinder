// Data structure that will store the friends data
var friendsArray = [
	{
		name: "Ahmed",
		photo: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
		scores: [
			"5",
			"1",
			"4",
			"4",
			"5",
			"1",
			"2",
			"5",
			"4",
			"1"
		]
	},
	{
		name: "Jacob Deming",
		photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
		scores: [
			"4",
			"2",
			"5",
			"1",
			"3",
			"2",
			"2",
			"1",
			"3",
			"2"
		]
	},
	{
		name: "Jeremiah Scanlon",
		photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
		scores: [
			"5",
			"2",
			"2",
			"2",
			"4",
			"1",
			"3",
			"2",
			"5",
			"5"
		]
	},
	{
		name: "Louis T. Delia",
		photo: "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
		scores: [
			"3",
			"3",
			"4",
			"2",
			"2",
			"1",
			"3",
			"2",
			"2",
			"3"
		]
	},
	{
		name: "Lou Ritter",
		photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
		scores: [
			"4",
			"3",
			"4",
			"1",
			"5",
			"2",
			"5",
			"3",
			"1",
			"4"
		]
	},
	{
		name: "Jordan Biason",
		photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
		scores: [
			"4",
			"4",
			"2",
			"3",
			"2",
			"2",
			"3",
			"2",
			"4",
			"5"
		]
	},
	{
		name: "david rose ",
		photo: "https://www.out.com/sites/out.com/files/2015/03/09/schitts_creek4.jpg",
		scores: [
			"5",
			"5",
			"1",
			"2",
			"1",
			"2",
			"3",
			"2",
			"3",
			"3"
		]
	},
	{
		name: "stoop",
		photo: "https://via.placeholder.com/200",
		scores: [
			"2",
			"3",
			"2",
			"2",
			"4",
			"3",
			"3",
			"3",
			"3",
			"2"
		]
	},
	{
		name: "agasdg",
		photo: "https://via.placeholder.com/200",
		scores: [
			"3",
			"3",
			"2",
			"5",
			"1",
			"4",
			"5",
			"4",
			"3",
			"1"
		]
	},
	{
		name: "sallyalrawi",
		photo: "https://via.placeholder.com/200",
		scores: [
			"2",
			"3",
			"4",
			"4",
			"2",
			"3",
			"3",
			"4",
			"4",
			"2"
		]
	},
	{
		name: "Hullaghan",
		photo: "https://via.placeholder.com/200",
		scores: [
			"2",
			"1",
			"3",
			"4",
			"4",
			"5",
			"5",
			"3",
			"2",
			"2"
		]
	},
	{
		name: "Hullaghan",
		photo: "https://via.placeholder.com/200",
		scores: [
			"2",
			"1",
			"3",
			"4",
			"4",
			"5",
			"5",
			"3",
			"2",
			"2"
		]
	},
	{
		name: "james",
		photo: "https://via.placeholder.com/200",
		scores: [
			"2",
			"1",
			"3",
			"4",
			"4",
			"5",
			"5",
			"3",
			"2",
			"2"
		]
	},
	{
		name: "abcde",
		photo: "https://via.placeholder.com/200",
		scores: [
			"3",
			"2",
			"3",
			"5",
			"3",
			"3",
			"3",
			"3",
			"2",
			"3"
		]
	},
	{
		name: "blah",
		photo: "https://via.placeholder.com/200",
		scores: [
			"2",
			"4",
			"2",
			"2",
			"3",
			"2",
			"3",
			"3",
			"3",
			"3"
		]
	},
	{
		name: "Kevin",
		photo: "https://www.thedailymash.co.uk/wp-content/uploads/40-something-man-2-1.jpg",
		scores: [
			"5",
			"2",
			"3",
			"1",
			"3",
			"2",
			"4",
			"2",
			"2",
			"3"
		]
	},
	{
		name: "eric ",
		photo: "https://via.placeholder.com/200",
		scores: [
			"4",
			"3",
			"3",
			"4",
			"4",
			"3",
			"4",
			"2",
			"5",
			"3"
		]
	},

	{
		name: "moviepicker",
		photo: "https://via.placeholder.com/200",
		scores: [
			"4",
			"3",
			"3",
			"4",
			"3",
			"5",
			"3",
			"5",
			"4",
			"3"
		]
	},
	{
		name: "moviepicker",
		photo: "https://via.placeholder.com/200",
		scores: [
			"4",
			"3",
			"3",
			"4",
			"3",
			"5",
			"3",
			"5",
			"4",
			"3"
		]
	},
	{
		name: "kelly",
		photo: "http://asportsplayers.com/wp-content/uploads/2018/04/Dwayne-Johnson-Images.jpg",
		scores: [
			"3",
			"4",
			"3",
			"2",
			"3",
			"4",
			"3",
			"4",
			"3",
			"3"
		]
	},
	{
		name: "kelly",
		photo: "http://asportsplayers.com/wp-content/uploads/2018/04/Dwayne-Johnson-Images.jpg",
		scores: [
			"3",
			"4",
			"3",
			"2",
			"3",
			"4",
			"3",
			"4",
			"4",
			"3"
		]
	},
	{
		name: "kelly",
		photo: "http://asportsplayers.com/wp-content/uploads/2018/04/Dwayne-Johnson-Images.jpg",
		scores: [
			"3",
			"4",
			"3",
			"2",
			"3",
			"4",
			"3",
			"4",
			"4",
			"3"
		]
	},
	{
		name: "Jack Donaghy",
		photo: "https://www.marketing-mojo.com/wp-content/uploads/2013/02/Jack-Donaghy.jpg",
		scores: [
			"5",
			"4",
			"2",
			"2",
			"1",
			"4",
			"4",
			"5",
			"2",
			"2"
		]
	},
	{
		name: "2",
		photo: "https://via.placeholder.com/200",
		scores: [
			"3",
			"4",
			"5",
			"5",
			"5",
			"4",
			"3",
			"4",
			"3",
			"4"
		]
	},


	{
		name: "john",
		photo: "https://www.cnn.com/2016/03/19/us/neanderthal-human-interbred-irpt/index.html",
		scores: [
			"5",
			"3",
			"3",
			"3",
			"3",
			"3",
			"3",
			"3",
			"3",
			"3"
		]
	},

	{
		name: "Armando Ochoa",
		photo: "https://www.pexels.com/photo/woman-bending-while-jumping-on-street-1959564/",
		scores: [
			"2",
			"2",
			"3",
			"3",
			"5",
			"5",
			"5",
			"1",
			"1",
			"1"
		]
	}
];

module.exports = friendsArray;