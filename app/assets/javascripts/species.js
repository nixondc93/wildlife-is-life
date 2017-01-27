

		var newJson = [];

		function updateData() {
			species.forEach(function(ele, idx, arr) {

				var newObj = {}

//This is some fun ajax code/parsing!
				$.ajax({
					method: "GET",
					url: "http://apiv3.iucnredlist.org/api/v3/species/narrative/id/" + ele["taxonid"] + "?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee",
					success: onSucces
				});

				function onSucces(res) {
					newObj["taxonid"] = ele["taxonid"];
					newObj["scientific_name"] = ele["scientific_name"];
					newObj["taxonname"] = ele["taxonname"];
					newObj["assesments"] = ele["assesments"];
          newObj["taxonomicnotes"] = res["result"][0]["taxonomicnotes"]
          newObj["rationale"] = res["result"][0]["rationale"]
          newObj["geographicrange"] = res["result"][0]["geographicrange"]
          newObj["population"] = res["result"][0]["population"]
          newObj["populationtrend"] = res["result"][0]["populationtrend"]
          newObj["habitat"] = res["result"][0]["habitat"]
          newObj["threats"] = res["result"][0]["threats"]
          newObj["conservationmeasures"] = res["result"][0]["conservationmeasures"]

					console.log(newObj);
					newJson.push(newObj);
				}

			});

		}






		function createFile(json) {
			console.log("createfile", json);
			$('#textbox').val(JSON.stringify(json));
			var textFile = null,
				makeTextFile = function(text) {
					var data = new Blob([text], {
						type: "application/json"
					});

					if (textFile !== null) {
						window.URL.revokeObjectURL(textFile);
					}

					textFile = window.URL.createObjectURL(data);

					return textFile;
				};


			var create = document.getElementById('create'),
				textbox = document.getElementById('textbox');

			create.addEventListener('click', function() {
				var link = document.getElementById('downloadlink');
				link.href = makeTextFile(textbox.value);
				link.style.display = 'block';
			}, false);
		};

		updateData();
