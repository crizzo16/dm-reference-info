let reference = {
    story: "",
    parseStory: function () {
        $.ajax({
            url: "https://crizzo16.github.io/dm-reference-info/assets/story.json",
            dataType: "json"
        }).done(function(result) {
            reference.story = result;
            reference.loadStory();
        });
    },
    loadStory: function () {

    }
}

$(document).ready(function () {
    $(".tabs").tabs();
});