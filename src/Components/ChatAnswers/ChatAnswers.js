const date = new Date();
const hour = date.getHours();
const min = date.getMinutes();
export const getTime = () => {
    return (hour < 10 ? '0' + hour : '' + hour) + ' : ' + (min < 10 ? '0' + min : '' + min);
}
export const ChatsAnswer = {
    chatRobot: [
        {
            id: `id-${Date.now()}`,
            author: 'Robot',
            text: 'Здравствуйте! Дождитесь ответа оператора!',
            time: getTime()
        }
    ],
    chatAmir: [
        {
            id: `id-${Date.now()}`,
            author: 'Amir',
            text: 'Привет от Амира!',
            time: getTime()
        }
    ]
    ,
    chatRoman: [
        {
            id: `id-${Date.now()}`,
            author: 'Roman',
            text: 'Привет от Романа!',
            time: getTime()
        }
    ],
    chatIvan: [
        {
            id: `id-${Date.now()}`,
            author: 'Ivan',
            text: 'Привет от Ивана!',
            time: getTime()
        }
    ]
}