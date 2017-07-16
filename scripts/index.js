var app=new Vue({
	el:"#app",
	data:{
		list:new Array(),
	},
	mounted:function(){
		var _this=this;
		this.$nextTick(function(){
			axios.get('/data/data.json')
			.then(
				function(retObj){
					if(retObj.status == 200){
						app.list = retObj.data.result.list;
					}
				}
			)
			.catch(function(errorObj){
				console.log("get data error...");
			})
		});

	},
	methods:{
	},
	watch:{
	},
	computed:{	
	},
	filters:{
	}
})