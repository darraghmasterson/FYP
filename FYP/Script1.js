
        
        var json = { "DataCollected" :{
                                        "usageInformation": [
                                            "How you interact\n with our services",
                                            "How you communicate\n with other Snapchatters"
                                        ],
                                        "contentInformation": [
                                            "Custom stickers",
                                            "Information about content you create"
                                        ],
                                        "deviceInformation": [
                                            "information about your hardware and software",
                                            "information from device sensors",
                                            "information about your wireless and mobile network"
                                        ],
                                        "LocationInformation": [
                                            "Current location"
                                        ],
                                        "CookiesInformation": [
                                            "activity",
                                            "browser",
                                            "Device"
                                        ],
                                        "LogInformation": [
                                            "how you've used services",
                                            "Device information",
                                            "Access time",
                                            "IP address",
                                            "Pages viewed",
                                            "Identifiers associated with cookies",
                                        ],
                                        "ThirdPartyInformation": [
                                            "If you link account to another service",
                                            "Information from advertisers",
                                            "If you appear in another user's contacts"
                                        ]
                                    }
                                   }
        
        var ThirdParties =  { "ThirdParties" :{
                                       "InformationWeCollect": [
                                       "Link account to another service",
                                       "Information from advertisers",
                                       "If you appear in another user's contacts"
                                       ],
                                       "InformationWeGive": [
                                        "Information collected by business partners who \n provide services on our services",
                                        "Device and usage information",
                                        "When needed to comply with valid legal process",
                                        "To investigate potential Terms of Service violations",
                                        "To protect the rights,\n property or safety of others",
                                        "As part of merger or aquistion"
									   ]
                                    }
                        }
        var Purposes = { "Purposes":{
                                        "ResearchAndDevelopment":[
                                        "develop, operate, improve, deliver, maintain, and protect our products and services.",
                                        "monitor and analyze trends and usage.",
                                        "use information we've collected from cookies and other technology to enhance our services and your experience with them."
                                        ],
                                        "Security":[
                                        "enhance the safety and security of our products and services.",
                                        "verify your identity and prevent fraud or other unauthorized or illegal activity.",

										],
                                        "CommercialInterest": [
                                        "provide and improve our advertising services, ad targeting, and ad measurement",
                                        "customizing the content we show you, including ads."

                                                  
										],
                                        "ServiceOptimisation":[
                                        "contextualize your experience by,\n among other things, tagging your Memories\n content using your precise location information",
                                        "send you communications, including by email",
                                        "use information we've collected from cookies and other technology to enhance our services",
                                        "personalize our services by, among other things, suggesting friends, profile information, or Bitmoji stickers"
										]




										
        
		}
        
		}

        var Consent = { "Consent":{
                                    "HowToWithdraw": [
                                    "Through device permissions"
                                    
									],
                                    "RightToObject": [
                                    "Ability to delete data",
                                    "Abililty to disable feature altogether"
									]
                                    }
        
		}

        var Processing = {"Processing":{
                                        "Storage": [
                                        "For detailed information about how long we store\n different types of content, check out our Support Site.",
                                        "We store your basic account information\n until you ask us to delete them.",
                                        "if you use the Map, we store information\n about your favorite places for up to 40 days",
                                        "If location information is associated with\n a Snap we'll retain that location as long as we store the Snap."

                                        
										],
                                        "Deletion": [
                                        "if for some reason you ever want to delete your\n account, just go here to learn how",
                                        "You can also delete some information in the app,\n like photos you've saved to Memories,\n Our Story submissions, and search history.",
                                        "There may be legal requirements to store your data\n and we may need to suspend those deletion practices"
										],
                                      
                                        "SharedWithOtherSnapchatters": [
                                        "Information about you, such as your username, name, and Bitmoji.",
                                        "the names of Snapchatters you are friends with",
                                        "any additional information you have directed us to share",
                                        "content you post or send"
                                        
										],
                                        "SharedWithAllSnapchatters": [
                                        "public information like your name,\n username, Snapcode and profile pictures",
                                        "Story submissions that are set to be viewable by Everyone",
                                        "any content that you submit to an inherently public service,\n like Our Story and other crowd-sourced services"
                                        ],
                                        "SharedWithThirdParties": [
                                        "We may share information about you with business partners that provide services",
                                        "We may share information about you, such as device and usage\n information, to help us and others prevent fraud.",
                                        "We may share information about you for legal, safety, and security reasons",
                                        "We may share information about you as part of a merger or acquisition."
                                        
										]


        
		}}

        function consent() {
            var array = ["HowToWithdraw", "RightToObject"];
            var string = "Consent.Consent.";
            var name = "Consent";
            change(network, array, string, name);
		}

        function processing() {
            var array = ["Storage", "Deletion", "SharedWithOtherSnapchatters", "SharedWithAllSnapchatters", "SharedWithThirdParties"];
            var string = "Processing.Processing."
            var name = "Processing";
            change(network, array, string, name);

		}

        function purposes() {
            var array = ["ResearchAndDevelopment",
                                    "Security",
                                    "CommercialInterest",
                                    "ServiceOptimisation"

            
			]  
            var string = "Purposes.Purposes.";
            var name = "Purposes";
            change(network, array, string, name);
		}
        
        function changeToTP()
        {
            var TP = ["InformationWeCollect",
                      "InformationWeGive"]
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
        var dataCollected = ["usageInformation",
                            "contentInformation",
                            "deviceInformation",
                            "LocationInformation",
                            "CookiesInformation",
                            "LogInformation",
                            "ThirdPartyInformation"]
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
            console.log(str);

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
        console.log(network.getPositions(2));
        
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
    
        



