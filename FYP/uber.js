
        
        var json = { "DataCollected" :{
                                        "UsageInformation": [
                                        "access dates and times",
                                        "app features or pages viewed",
                                        "app crashes and other system activity",
                                        "type of browser",
                                        "third-party sites or services used before interacting with our services"
                                            
                                            
                                        ],
                                        "ContentInformation": [
                                        "Profile picture",
                                        "Vehicle make, model and vehicle photo",

                                         
                                        ],
                                        "DeviceInformation": [
                                            "hardware models",
                                            "device IP address",
                                            "operating systems and versions",
                                            "software",
                                            "preferred languages",
                                            "unique device identifiers",
                                            "advertising identifiers",
                                            "serial numbers",
                                            "device motion data",
                                            "mobile network data."
                                            
                                        ],
                                        "LocationInformation": [
                                           "Approximate location if enabled by the user",
                                           "pickup and/or dropoff locations",

                                        ],
                                        "CookiesInformation": [
                                           " In some cases, we collect this data through\n cookies, pixels, tags, and similar tracking technologies",

                                        ],
                                        "LogInformation": [
                                        "trips",
                                        "length of use of the Uber app",

                                        
                                           
                                        ],
                                        "ThirdPartyInformation": [
                                        "demographic data from third parties",

                                           
                                        ],
                                        "TransactionInformation": [
                                                "Type of services requested or provided",
                                                "Order details",
                                                "Delivery information",
                                                "Date and time",
                                                "amount charged",
                                                "distance traveled",
                                                "payment method",
                                                "Promotion code referral information"
										],
                                        "UserProvidedInformation": [
                                            "name ",
                                            "email",
                                            "Phone number",
                                            "Address",
                                            "Profile picture",
                                            "Payment information",

										]
                                    }
                                   }
        
        var ThirdParties =  { "ThirdParties" :{
                                       "InformationWeCollect": [
                                       "we may receive demographic data about users from third parties."
                                       ],
                                       "InformationWeShare": [
                                        " if a user requests a service through a partnership or\n promotional offering made by a third party, \nUber may share certain data with those third parties",
                                        "Uber does not sell or share user personal data with third parties for their direct marketing"
									   ]
                                    }
                        }
        var Deletion = { "Deletion":{
                                        "HowToDeleteAccount":[
                                        "Riders and delivery recipients can through\n the Settings > Privacy menus in the Uber app",
                                        "Riders and delivery recipients can go to\n https://help.uber.com/h/24010fe7-7a67-4ee5-9938-c734000b144a",
                                        "Drivers and delivery partners can go to\n https://help.uber.com/h/55ae2bb5-b102-4ab0-9ed3-32f4db95f0e5"


                                        
										],
                                        "CantDeleteWhen":[
                                        "Uber keeps data that might be used for \nthe purposes of regulatory, tax, \ninsurance, litigation, or other legal requirements",
                                        "When there's an outstanding\n credit on the account",
                                        "the account is infvoled in\n an unresolved claim or dispute"
                                        
                                        
										]
                                       
        
		}
                        
		}
        var Purposes = { "Purposes":{
                                        "ResearchAndDevelopment":[
                                        "to improve and enhance the safety\n and security of our services",
                                        "improve our ability to prevent the\n use of our services for illegal or improper purposes",
                                        " develop new features and products",
                                        "facilitate insurance and finance\n solutions in connection with our services"

                                            
                                        ],
                                        "Security":[
                                        "Screening riders, drivers,\n and delivery partners",
                                        " to help identify unsafe\n driving behavior",
                                        "To identify driver",
                                        "to prevent, detect, and combat\n fraud or unsafe activities"
										],
                                        "CommercialInterest": [
                                        "Uber may use the data we collect to\n market our services to our users",
                                        "We may use the data we collect to\n personalize the marketing communications",

										]




										
        
		}
        
		}

        var Consent = { "Consent":{
                                    "HowToWithdraw": [
                                        "Through in-app settings and device permissions"
                                    
									],
                                    "RightToObject": [
                                        "Riders, delivery recipients, and renters may use\n the Uber apps without enabling Uber\n to collect location data from their mobile devices"
									]
                                    }
        
		}

        var Processing = {"Processing":{
                                        "Storage": [
                                        "Uber retains user profile, transaction,\n and other information for as long \nas a user maintains their Uber account.",

                                        
										],
                                        "Deletion": [
                                        "Riders and delivery recipients may \nrequest deletion of their account\n through the Settings > Privacy menus in the Uber app",
                                        "Riders and delivery recipients may request\n deletion of their account through Uber's Help Center.",
                                        "Following such requests, Uber deletes the \ndata that it is not required to retain"
                                        
										],
                                      
                                        "SharedWithOtherUsers": [
                                        "Riders' first name, rating, and pickup\n and/or dropoff locations with drivers.",
                                        "Riders' first name with other\n riders in a carpool trip.",

                                        "Riders who have enabled Uber to collect\n location data from their mobile device \nmay also enable Uber to \nshare their location with their driver",
                                        "Delivery recipients' first name, \ndelivery address, and order information",

                                        
                                        
										],
                                        "SharedByDrivers": [
                                        "name and photo",
                                        "vehicle make, model, color, \nlicense plate, and vehicle photo",
                                        "location (before and during trip)",
                                        "average rating provided by users",
                                        "total number of trips",
                                        "length of use of the Uber app",
                                        "contact information \n(depending upon applicable laws)",
                                        "driver or delivery partner \nprofile, including compliments and \nother feedback submitted by past users"
                                       
                                       ],
                                        "SharedWithThirdParties": [
                                        "Uber may also share data \nwith law enforcement regarding \ncriminal acts or threats to public safety",

                                        
										]


        
		}}

        function deletion(){
            var array = ["HowToDeleteAccount", "CantDeleteWhen"];
            var string = "Deletion.Deletion.";
            var name = "Deletion";
            change(network, array, string, name);
		}

        function consent() {
            var array = ["HowToWithdraw", "RightToObject"];
            var string = "Consent.Consent.";
            var name = "Consent";
            change(network, array, string, name);
		}

        function processing() {
            var array = ["Storage", "Deletion", "SharedWithOtherUsers", "SharedByDrivers", "SharedWithThirdParties"];
            var string = "Processing.Processing."
            var name = "Processing";
            change(network, array, string, name);

		}

        function purposes() {
            var array = ["ResearchAndDevelopment",
                                    "Security",
                                    "CommercialInterest",
                                    

            
			]  
            var string = "Purposes.Purposes.";
            var name = "Purposes";
            change(network, array, string, name);
		}
        
        function changeToTP()
        {
            var TP = ["InformationWeCollect",
                      "InformationWeShare"]
            var string = "ThirdParties.ThirdParties.";
            var name = "Third Parties"
            change(network, TP, string, name);

        }

        function change(network, array, string, name){
            
            
            nodes = [];
            nodes.push({id : 1, label : name, fixed: true, level: 1});

            var edges = [];
        var count = 2;
        var parent = 0;
        var x = 0;

        for(i = 0; i < array.length; i++)
        {
            var str = array[i].split(/(?=[A-Z])/).join(" ");
            console.log(str);
            nodes.push({id : count, label: str, fixed : true, cid: count, level: 2});
            edges.push({from: 1, to: count, arrows: {
                                to: {
                                    enabled: true,
                                    type: 'arrow'}}});
            parent = count;
            count++;
            var y = string + array[i] + ".length" ;
            string +=  array[i];
            console.log(y);
            for (x = 0; x < eval(y); x++)
                {
                    console.log(x);
                    nodes.push({id : count, label: eval(string)[x], fixed: true, cid: parent, level: 3});
                    edges.push({from: parent, to: count, arrows: {
                                to: {
                                    enabled: true,
                                    type: 'arrow'}}});
                    count++;
                    
                }
                console.log(string.substring(0, (string.lastIndexOf("."))+1));

                string= string.substring(0, (string.lastIndexOf("."))+1);
        }
        var group = new vis.DataSet(nodes);
        var count = 2;

        // create an array with edges
        var lines = new vis.DataSet(edges);

        // create a network
        var container = document.getElementById('mynetwork');

        // provide the data in the vis format
        var data = {
        nodes: group,
        edges: lines
        };
        var options = {
        autoResize:false,
        
        layout:{
        hierarchical:{
        enabled:true,
        direction: 'LR',
        sortMethod:'directed',
        nodeSpacing: 100,
        levelSeparation: 400
}
        },
        interaction: {
         hover: true,
         navigationButtons: true,
         keyboard: true
         },
        nodes:{
      //  size: 1000,
        fixed: true,
        color: {
         border: '#4c595c',
         background: '#c2dfff'
         },
        },
        
        
        edges:{
        smooth:true
        }
        };

        // initialize your network!
        //network.destroy();

        console.log(options);

        network = new vis.Network(container, data, options);
       // network.setData(data);
        var cid;
        console.log("not yet");
        cluster(array, nodes, network);
        setListeners(network);
        var options = {
                                position: {x:0 ,y:0},
                                animation: true,
                                scale: .6
                
                            }
                            
              //  network.moveTo(options);
		}

        // create an array with nodes
        var dataCollected = ["UsageInformation",
                            "ContentInformation",
                            "DeviceInformation",
                            "LocationInformation",
                            "CookiesInformation",
                            "LogInformation",
                            "ThirdPartyInformation",
                            "TransactionInformation",
                            "UserProvidedInformation"]
        console.log(dataCollected.length);
        var nodes = [];
        nodes.push({id : 1, label :"Data Collected", fixed: true, level: 1});




        var edges = [];
        var count = 2;
        var parent = 0;
        var x = 0;

        for(i = 0; i < dataCollected.length; i++)
        {
            //spacing between words in strings
            var str = dataCollected[i].split(/(?=[A-Z])/).join(" ");
            

            nodes.push({id : count, label: str, fixed : true, cid: count, level: 2});
            edges.push({from: 1, to: count, arrows: {
                                to: {
                                    enabled: true,
                                    type: 'arrow'}}});
            parent = count;
            count++;
            var string = "json.DataCollected." + dataCollected[i];
            var y = "json.DataCollected." + dataCollected[i] + ".length" ;
            for (x = 0; x < eval(y); x++)
                {
                    console.log(x);
                    nodes.push({id : count, label: eval(string)[x], fixed: true, cid: parent, level: 3});
                    edges.push({from: parent, to: count, arrows: {
                                to: {
                                    enabled: true,
                                    type: 'arrow'}}});
                    count++;
                    
                }

        }

       


        var group = new vis.DataSet(nodes);

        var count = 2;


        // create an array with edges
        var lines = new vis.DataSet(edges);

        // create a network
        var container = document.getElementById('mynetwork');

        // provide the data in the vis format
        var data = {
        nodes: group,
        edges: lines
        };
        var options = {
        autoResize:false,
        
        layout:{
        hierarchical:{
        enabled:true,
        direction: 'LR',
        sortMethod:'directed',
        nodeSpacing: 100,
        levelSeparation: 400
}
        },
        interaction: {
          hover: true,
          navigationButtons: true,
          keyboard: true
        },
        nodes:{
      //  size: 1000,
        fixed: true,
         color: {
        border: '#4c595c',
         background: '#c2dfff'
        }
        },
        edges:{
        smooth:true
        },

       // physics:{ stabilization:{ enabled: false}}
              
		
        };
  

        // initialize your network!
        var network;

        
        network = new vis.Network(container, data, options);
        network.setData(data);
        var cid;
        cluster(dataCollected, nodes, network);
        setListeners(network);
        var options = {
                                position: {x:0 ,y:0},
                                animation: true,
                                scale: .6
                
                            }
                            
           //     network.moveTo(options);
        
        //iterate through all data headings

        // changeTP(network);
        
      
        network.on("hoverNode", function(){
       //   console.log("hover");
          document.body.style.cursor = "pointer";
        });

        network.on("blurNode", function(){
      //    console.log("hover");
          document.body.style.cursor = "default";
        });
  
        function cluster(array, nodes, network)
        {
        for(x=0; x< array.length; x++)
        {
                array[x] = array[x].replace(/([A-Z])/g, ' $1').trim();
                for(y=0; y<nodes.length; y++)
                {
                    //find cid for data heading
                    if (array[x] == nodes[y].label)
                    cid = nodes[y].cid;
                 }

                var options = {
                                 joinCondition:function(nodeOptions) {
                                 return nodeOptions.cid === cid ;
                               },
                                clusterNodeProperties:{
                                                        label: array[x],
                                                        color: {
                                                        border: '#4c595c',
                                                        background: '#c2dfff'
														},
                                                        level: 2,
                                                        shape: 'square'
                                                       }
                        }

                network.clustering.cluster(options);
                
            
            }
            }
        
        
        function setListeners(network)
        {

         network.on("hoverNode", function(){
       //   console.log("hover");
          document.body.style.cursor = "pointer";
        });

        network.on("blurNode", function(){
      //    console.log("hover");
          document.body.style.cursor = "default";
        });

        network.on("selectNode", function(params) {

        

        
        
  if (params.nodes.length == 1) {
        console.log(params);
    if (network.isCluster(params.nodes[0]) == true) {
     
    // console.log(network.clustering.clusteredNodes["2"].clusterId);
     var i = 0;
     var node = 0;
     var done = false;
     console.log(network);
     for(var key in network.clustering.clusteredNodes)
        {
           var string = key.toString();
           if(network.clustering.clusteredNodes[string].clusterId == params.nodes[0] && !done)
           {
           node = key;
           done = true;
           }
           
           
		};

     console.log(params.nodes[0]);
      network.openCluster(params.nodes[0]);
      console.log(nodes);
      var string = node.toString();
      var obj = network.getPositions(node);
      console.log(obj[string].x, obj[string].y);
      var options = {
       position:{x: (obj[string].x + 200), y: obj[string].y},
       animation: true,
       scale: .7
	  }
      network.moveTo(options);
     // network.releaseNode();
      

       var options = {
        autoResize:false,
        
        layout:{
        hierarchical:{
        enabled:true,
        direction: 'LR',
        sortMethod:'directed',
        nodeSpacing: 100,
        levelSeparation: 400
}
        },
        interaction:{
        hover:true
        },
        nodes:{
        fixed: true,
        },
        edges:{
        smooth:true
        }};
     // network.setOptions(options);
    //  network.fit();

        var options = {
                                position: {x:params.pointer.canvas.x,y:params.pointer.canvas.y},
                                easingFunction: "linear"
                            
                
                            };
              // network.focus(params.nodes[0],options);
              //  network.releaseNode()
             //  network.fit();
            // network.startStabilizing();
       
        }
   
         else if(network.isCluster(params.nodes[0]) == false){
         

                    console.log(params);
                    console.log(nodes[params.nodes -1].label);

                    var matches = nodes[params.nodes -1].label.match(/\bhttps?:\/\/\S+/gi);
                    console.log(matches);
                    if(matches != null) window.open(matches[0]);
                    


                    var int = params.nodes[0] -1;
                    console.log(int);

                    var label = nodes[int].label;
                    if(nodes[int].level == 2)
                    {

                   var options = {
                                  joinCondition:function(nodeOptions) {
                                 return nodeOptions.cid === nodes[params.nodes[0]].cid;
                               },
                                clusterNodeProperties:{
                                                        label: label,
                                                        level: 2,
                                                        color: {
                                                        border: '#4c595c',
                                                        background: '#c2dfff'

														},
                                                     //   size: 100,
                                                        shape: 'square'
                                                       }
                        }

                network.clustering.cluster(options);
                
                var options = {
                                position: {x:0 ,y:0},
                                animation: true,
                                //scale: .6
                
                            }
                            
               network.moveTo(options);
               network.fit();
                
                

                    }
            
                
        }

       
        
        }

         
       })
    
};
    
        



