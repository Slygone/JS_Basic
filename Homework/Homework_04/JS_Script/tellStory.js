//static way
function tellStory(arr = [firstName, mood, activity]) {
    //return the values of tellStory array with a string and concatenation
    return console.log(`This is ${arr[0]}. ${arr[0]} is a nice person. 
    Today they are ${arr[1]}.
    They are ${arr[2]} all day. The End.`);
}

tellStory(["Nikola", "great", "coding"]);



//dynamic way
function tellMoreDynamicStory(storyArr) {
    //prompt user to enter variables for storyArr 3 times
    let firstName = prompt("Please enter your name: ")
    let mood = prompt("Please enter your mood: ")
    let activity = prompt("Please enter your activity: ")
    //fill storyArr with inputed values from user
    storyArr = [firstName, mood, activity];
    //print storyArr to make sure its filled
    console.log(storyArr)
    //return value as a string with inputed variables
    return alert(`This is ${storyArr[0]}. ${storyArr[0]} is a nice person. 
    Today they are ${storyArr[1]}.
    They are ${storyArr[2]} all day. The End.`)
}

tellMoreDynamicStory();
