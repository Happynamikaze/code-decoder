
   var ctx = document.getElementById('myChart').getContext('2d');

   var data = {
	 labels: ['Current', '1-30', '31-60' , '61-90', '91+'],
	 datasets: [
	   {
		 label: 'Accounts Receivable',
		 data: [19, 15, 10,7,1],
		 backgroundColor: 'rgba(255, 99, 132, 0.5)', 
	   },
	   {
		 label: 'Accounts Receivable',
		 data: [17, 10, 8 , 8 ,2],
		 backgroundColor: 'rgba(75, 192, 192, 0.5)', 
		},
	 ],
   };
 
   var options = {
	type: 'bar',
	data: data,
	options: {
	  plugins: {
		title: {
		  display: true,
		},
	  },
	  responsive: true,
	  interaction: {
		intersect: false,
	  },
	  scales: {
		x: {
		  stacked: true,
		},
		y: {
		  stacked: true
		}
	  }
	}
   };
 
   var stackedBarChart = new Chart(ctx, {
	 type: 'bar',
	 data: data,
	 options: options,
   });



   

 var ctx = document.getElementById('lineChart').getContext('2d');

 var data = {
	 labels: ['January', 'February', 'March', 'April', 'May', 'June','July' ,'August' , 'September','October','November','December'],
	 datasets: [
		 {
			 label: 'Gross Working Capital',
			 data: [0, 2, 18, 30,40,32 ,20,17,25, 60,58,8],
			 borderColor: 'rgba(75, 192, 192, 1)',
			 fill: false,
		 },
		 {
			label: 'Net Working Capital',
			data: [0, 2, 22, 19, 11, 39, 30,44,33, 45,38,11 ],
			borderColor: 'rgba(	255, 255, 0)',
			fill: false,
		  },
	 ],
 };

 var options = {
	 scales: {
		 x: {
			 type: 'category',
		 },
		 y: {
			 suggestedMin: 0,  
			 suggestedMax: 35, 
		 },
	 },
 };

 var lineChart = new Chart(ctx, {
	 type: 'line',
	 data: data,
	 options: options,
 });


   var ctx = document.getElementById('stackedBarChart').getContext('2d');

   var data = {
	   labels: ['Jan', 'Feb', 'Mar','Apr','May','jun','Jul','Jun','Aug','Sep','Oct','Nov','Dec',],
	   datasets: [
		   {
			   label: 'Group 1',
			   data: [50, 15, 5, 30,44,50, 60,70,82, 12,14,20,22],
			   backgroundColor: '#2960ff',
			   stack: 'Stack 0',
		   },
		   {
			   label: 'Group 2',
			   data: [5, 10, 15,30,50,52,32,20, 60,70,82, 12,40],
			   backgroundColor: '#e6ff31',
			   stack: 'Stack 0',
		   },
		   {
			label: 'Group 3',
			data: [5, 10, 15,17,30,24,20, 60,70,82, 12,40,18],
			backgroundColor: '#51bd6f',
			stack: 'Stack 0',
		},
		   
		   {
			label: 'Group 4',
			data: [5, 10, 15,13,22,20, 60,70,82, 12,40,18,12],
			backgroundColor: '#c92861',
			stack: 'Stack 1',
		},
	   ],
   };

   var options = {
	   scales: {
		   x: {
			   stacked: true,
		   },
		   y: {
			   stacked: true,
			   suggestedMin: 0, 
			   suggestedMax: 40,
		   },
	   },
	   plugins: {
		   legend: {
			   position: 'top', 
		   },
		   tooltip: {
			   mode: 'index', 
		   },
	   },
   };

   var stackedBarChart = new Chart(ctx, {
	   type: 'bar',
	   data: data,
	   options: options,
   });


   