const date = new Date();
const hour = date.getHours();
const min = date.getMinutes();
export const getTime = () => {
    return (hour < 10 ? '0' + hour : '' + hour) + ' : ' + (min < 10 ? '0' + min : '' + min);
}

export const chats = [
    {
        id: 'chatRobot',
        name: 'Robot'
    },
    {
        id: 'chatRoman',
        name: 'Roman'
    },
    {
        id: 'chatAmir',
        name: 'Amir'
    },
    {
        id: 'chatIvan',
        name: 'Ivan'
    }
];