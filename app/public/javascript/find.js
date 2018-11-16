var autos =
[   {   make:   "Chevrolet",
        model:  "Volt",
        year:   "2018",
        image:  "images/volt.jpg"
    },
    {   make:  "Chevrolet",
        model:  "Volt",
        year:   "2017",
        image:  "images/camaro.jpg"
    },
    {   make:  "Chevrolet",
        model:  "Camaro",
        year:   "2018",
        image:  "images/camaro.jpg"
    },
    {   make:  "Chevrolet",
        model:  "Camaro",
        year:   "2017",
        image:  "images/camaro.jpg"
    },
    {   make:  "Chevrolet",
        model:  "Camaro",
        year:   "2016",
        image:  "images/camaro.jpg"
    },
    {   make:  "Ford",
        model:  "Mustang",
        year:   "2017",
        image:  "images/mustang.jpg"
    },
    {   make:  "Ford",
        model:  "Mustang",
        year:   "2016",
        image:  "images/mustang.jpg"
    },
    {   make:  "Ford",
        model:  "Mustang",
        year:   "2015",
        image:  "images/mustang.jpg"
    },
    {   make:  "Ford",
        model:  "Focus",
        year:   "2018",
        image:  "images/focus.jpg"
    },
    {   make:  "Ford",
        model:  "Focus",
        year:   "2017",
        image:  "images/focus.jpg"
    },
    {   make:  "Dodge",
        model:  "Hellcat",
        year:   "2018",
        image:  "images/hellcat.jpg"
    },
]

var selectedAutos = [];

function selectMake()
{   // Build initial list of automanufacturers...this is the entry point.  model and model year will
    // be populated by a .change() event handler.

    var selectMaker = $("#model-make");

    var option = $("<option>")
    option
        .addClass("make-option")
        .attr("disabled", true)
        .attr("selected", true)
        .attr("value", "")
        .text("Select manufacturer");
            
    selectMaker
        .empty()
        .append(option)

    var makes = [];
    
    var aLength = autos.length;

    for (var i=0; i<aLength; i++)
    {   // We want the list to be unique.

        if (makes.indexOf(autos[i].make) === -1)
        {   
            makes.push (autos[i].make);

            option = $("<option>")
            option
                .addClass("make-option")
                .attr("value", autos[i].make)
                .text(autos[i].make);
            
            selectMaker
                .append(option);
        }
    }
}

function selectModel(make)
{   // Build the <options> list for available model for this manufacturer

    var selectModel = $("#model-model");

    var option = $("<option>")
    option
        .addClass("make-option")
        .attr("disabled", true)
        .attr("selected", true)
        .attr("value", "")
        .text("Select model");
            
    selectModel
        .empty()
        .append(option)

    var models = [];
    
    var makes = autos.filter(function(auto)
    {
        return auto.make === make
    })

    var mLength = makes.length;

    for (var i=0; i<mLength; i++)
    {   // We want the list to be unique.

        if (models.indexOf(makes[i].model) === -1)
        {   
            models.push (makes[i].model);

            option = $("<option>")
            option
                .addClass("model-option")
                .attr("value", makes[i].model)
                .text(makes[i].model);
            
            selectModel
                .append(option);
        }
    }
}

function selectYear(model)
{   // Build the <options> list for available model years

    var selectYear = $("#model-year");

    var option = $("<option>")
    option
        .addClass("make-option")
        .attr("disabled", true)
        .attr("selected", true)
        .attr("value", "")
        .text("Select year");
            
    selectYear
        .empty()
        .append(option);
        
    var years = [];
    
    var models = autos.filter(function(auto)
    {
        return auto.model === model
    })

    var mLength = models.length;

    for (var i=0; i<mLength; i++)
    {   // We want the list to be unique.

        if (years.indexOf(models[i].model) === -1)
        {   
            years.push (models[i].year);

            option = $("<option>")
            option
                .addClass("model-option")
                .attr("value", models[i].year)
                .text(models[i].year);
            
            selectYear
                .append(option);
        }
    }
}

function displayDetails(...selection)
{   // The make, model and year have been chosen, request data from the server and put it on the page.

//     $.get("api/auto/" + selection[0] + "/" + selection[1] + "/" + selection[2])
//     .then(function(results)
//     {
        var car =
        {   make:   selection[0],
            model:  selection[1],
            year:   selection[2],
            url:    "http://placehold.it/300x300",
            msrp:   Math.floor(Math.random() * 30) * 1000,
            passengers: Math.floor(Math.random() * 6),
            cargo:  Math.floor(Math.random() * 1000),
            tow:    Math.floor(Math.random() * 1000) + 1000
        }

        selectedAutos.push(car)

        var image = autos.find(function(data)
        {
            if ((data.make === selection[0]) &&
                (data.model === selection[1]) &&
                (data.year === selection[2]))
                return data;
        })

        var imageDiv = $("<div>");
        imageDiv
            .css({ "background": "url('" + image.image + "')",
                   "background-position": "center center",
                   "background-repeat": "no-repeat",
                   "background-size": "300px"
                 })
            .addClass("image-wrapper")

<<<<<<< HEAD
        var remove = $("<button>");
        remove
            .addClass("remove-button")
            .attr("value", 0)
            .text("Remove Selection");

        var textDiv = $("<div>");
        textDiv
            .addClass("text-wrapper")
=======
        var selectDiv = $("<div>");
        selectDiv
            .addClass("selected-auto")
>>>>>>> 70caee38df1a03766b904eaced45ba4a4aa91a77
            .attr("value", selection[3])
            .html("<br>" +
                  car.year + " " +
                  car.make + " " +
                  car.model + "<br>" +
                  "MSRP: $" + car.msrp + "<br>" +
                  "passengers: " + car.passengers + "<br>" +
                  "cargo capacity: " + car.cargo + "<br>" +
                  "towing capacity: " + car.tow + "<br>")
<<<<<<< HEAD
            .append(remove);

        var selectedDiv = $("<div>");
        selectedDiv
            .addClass("selected-auto")
            .append(imageDiv)
            .append(textDiv)

        $("#results")
            .prepend(selectedDiv)
=======
            .prepend(imageDiv)
            

        $("#results")
            .prepend(selectDiv)
>>>>>>> 70caee38df1a03766b904eaced45ba4a4aa91a77
//     })

}

$(document).ready(function()
{   var selections = 0;

    selectMake();

    $("#model-make").change(function()
    {   // change event handles for #select-maker.  Populate the models <select> with appropriate
        // values

        var make = $("#model-make option:selected").val()
        selectModel(make);
    })

    $("#model-model").change(function()
    {   // change event handles for #select-maker.  Populate the models <select> with appropriate
        // values

        var model = $("#model-model option:selected").val()

        selectYear(model);
    })

    $("#model-year").change(function()
    {   // change event handles for #select-maker.  The make, model and year have been chosen, now get
        // the details

console.log("selections: ", selections)
        if (selections > 0)
        {
console.log("selections: ", selections)
           $("#compare-button").css("display", "inline");
        }

        // max of 5 selections
        if (selections < 5)
        {   selections++;

            var make = $("#model-make option:selected").val()
            var model = $("#model-model option:selected").val()
            var year = $("#model-year option:selected").val()

            displayDetails(make, model, year, selections);

            selectMake();
            $("#model-model").empty()
            $("#model-year").empty()
        }
    })

    $("#compare-button").click(function(event)
    {   
        event.preventDefault();

        if ($(this).attr("value") === "compare")
        {
            $("#compare-button")
                .attr("value", "select")
                .text("Select More");

            chartIt();
        }
        else
        {
            $("#compare-button")
                .attr("value", "compare")
                .text("Compare Selections");

            $("#compare").css("display", "none");
            $("#results").css("display", "block");
        }

    })
})