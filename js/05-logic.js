const isOnline = true;
const isFriend = true;
const isDnd = false;

//const canOpenChat = isOnline && isFriend;
//console.log('canOpenChat:' , canOpenChat);


//оператор не
const canOpenChat = isOnline && isFriend && !isDnd;
console.log('canOpenChat: ', canOpenChat);