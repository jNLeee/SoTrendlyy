// imports



// Twitter API



// Facebook API



// YouTube API
$(document).ready(function(){
    var API_KEY = "AIzaSyBQ4DlYn7wHADsOnnSIeTDDU7Wm5yoK6Uw"

    var video = ''

    videoSearch(API_KEY, "search", 10)

    // Function takes the search query and the number of results wanted to return the embedded videos to a location in our html
    function videoSearch(key, search, maxResults) {

        // empty out previous data
        $("#youtube-display").empty()

        // get request
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function(data) {
            console.log(data)
            // getting the video id for each of the videos
            data.items.forEach(item =>{
                video = `
                
                <iframe width="50" height="25" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                
                `
                
                // this places the video in the html inside the div with id "videos"
                $("#youtube-display").append(video)
            })
        })
    }

})



// Instagram API