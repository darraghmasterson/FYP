
        
        var json = { "DataCollected" :{
                                        "usageInformation": [
                                            "Information about your type\n of Spotify Service plan.",
                                            "Information about your interactions \nwith the Spotify Service",
                                            "Inferences drawn about your interests\n and preferences based \non your usage of the Spotify Service.",
                                            "User Content you post to Spotify,\n such as photos, playlist title\ns and interactions with the\n Spotify Customer Service Team",
                                            "URL information",
                                            "motion-generated or orientation-generated\n mobile sensor data"
                                        ],
                                        "contentInformation": [
                                            "Custom stickers",
                                            "Information about content you create"
                                        ],
                                        "deviceInformation": [
                                            "Types of devices you are\n using such as unique device IDs,\n network connection type",
                                            "provider",
                                            "network and device performance",
                                            "browser type",
                                            "language",
                                            "information enabling digital rights management",
                                            "operating system", 
                                            "Spotify application version",
                                            "device attributes of devices on\n your wifi network that are \navailable to connect to the Spotify Service"
                                        ],
                                        "LocationInformation": [
                                            "your non-precise location, \nwhich may be derived or inferred \nfrom certain technical data"
                                        ],
                                        "CookiesInformation": [
                                            "online identifiers including\n cookie data and IP addresses",
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
                                        ],
                                        "PaymentInformation": [
                                            "Name",
                                            "Date of birth",
                                            "Credit or debit card type, expiration\n date, and certain digits of your card number",
                                            "Postal code",
                                            "Mobile phone number", 
                                            "Details of your purchase and payment history."

										]
                                    }
                                   }
        
        var ThirdParties =  { "ThirdParties" :{
                                       "InformationWeCollect": [
                                       "Link account to another service",
                                       "Information from advertisers",
                                       "If you appear in another user's contacts"
                                       ],
                                       "InformationWeShare": [
                                        "Information collected by \nbusiness partners who \n provide services on our services",
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
                                        "develop, operate, improve, deliver, \nmaintain, and protect our products and services.",
                                        "monitor and analyze trends and usage.",
                                        "use information we've collected\n from cookies and other technology \nto enhance our services and your \nexperience with them."
                                        ],
                                        "Security":[
                                        "enhance the safety and security\n of our products and services.",
                                        "verify your identity and \nprevent fraud or other \nunauthorized or illegal activity.",

										],
                                        "CommercialInterest": [
                                        "provide and improve our advertising\n services, ad targeting, and ad measurement",
                                        "customizing the content we\n show you, including ads."

                                                  
										],
                                        "ServiceOptimisation":[
                                        "To provide and personalize the Spotify Service.",
                                        "To understand, diagnose, troubleshoot\n, and fix issues with the Spotify Service.",
                                        "To evaluate and develop new\n features, technologies, and \nimprovements to the Spotify Service.",

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
                                        "We keep your personal data only as\n long as necessary \nto provide you with the Spotify Service",
                                        "We keep some of your personal \ndata for as long as you are a user of the \nSpotify Service. For example, we keep your \nplaylists, song library, and account information"
                                        
										],
                                        "Deletion": [
                                        "If you request, we will\n delete or anonymise your personal \ndata so that it no longer identifies you",
                                        "If we learn that we have collected the\n personal data of a child under the age \nof 13 years, we will take reasonable \nsteps to delete the personal data.",
                                        
										],
                                      
                                        "SharedWithFollowers": [
                                        "Public playlists",
                                        "Private playlists"
                                        
										],
                                        "SharedWithArtists": [
                                        "You may choose to share personal data",
                                        "With artists, record labels, or other\n partners who may want to directly \nsend you news or promotional offers."
                                        ],
                                        "SharedWithThirdParties": [
                                        "If you connect your Spotify account\n to a third party application, \nSpotify shares technical data with \nthe operator of that third party application",
                                        "We will share your personal data wit\nh our payment processors as necessary",
                                        "We and our advertising partners may process\n certain personal data to help \nSpotify understand your interests or preferences",
                                        "We will share your personal data for activities\n such as statistical analysis and \nacademic study but only in a pseudonymised format.",
                                        "We will share your personal data with\n other Spotify group companies to carry \nout our daily business operations",
                                        "when we in good faith believe it is necessary\n for us to do so in order to \ncomply with a legal obligation",
                                        "in those cases where we sell or\n negotiate to sell our business to \na buyer or prospective buyer."
										],
                                        "AccessAndCorrection":[
                                            "'Download my data' button on Privacy Settings page",

										]
                                        }
        }

         var Deletion = { "Deletion":{
                                        "HowToDeleteAccount":[
                                        "To close your account permanently, you can visit our contact form and pick Account. \n https://support.spotify.com/contact-spotify-support"
                                        
										],
                                        "CantDelete":[
                                        "If there is an unresolved issue relating to your account such as outstanding credit",
                                        "Where we need to retain the personal data for our legal, tax, audit, and accounting obligations",
                                        "Where necessary for our legitimate business \ninterests such as fraud prevention or to maintain the security of our users."

										]
                              
        
		    }
        }

        var Storage = { "Storage":{
                                    "StoredForAsLongAsNecessary":[
                                    "Personal data"

									],
                                    "StoredAsLomgAsYouUseService":[
                                    "Playlists",
                                    "Song library",
                                    "Account information"
                                    
									]
        
		}
        }

        function storage(){
            var array =   ["StoredForAsLongAsNecessary",
                            "StoredAsLomgAsYouUseService"]
            var string = "Storage.Storage.";
            var name = "Storage";
            change(network, array, string, name);
		}


        function deletion() {
            var array = ["HowToDeleteAccount", "CantDelete"];
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
            var array = ["Storage", "Deletion", "SharedWithFollowers", "SharedWithArtists", "SharedWithThirdParties", "AccessAndCorrection"];
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
                      "InformationWeShare"];
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

        function dataCollected(){
         var array = ["usageInformation",
                            "contentInformation",
                            "deviceInformation",
                            "LocationInformation",
                            "CookiesInformation",
                            "LogInformation",
                            "ThirdPartyInformation"]
          var string = "json.DataCollected.";
          var name = "Data Collected";
          change(network, array, string, name);
		}

        var nodes = [];
        nodes.push({id : 1, label :"Select a category on the left to begin", fixed: true, level: 1});




        var edges = [];
        var count = 2;
        var parent = 0;
        var x = 0;

     

         
           

       


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
        shape:"text"
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
      //  cluster(dataCollected, nodes, network);
        setListeners(network);
      
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
    
        



