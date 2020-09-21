export default {
    fetchAvatars: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                       url: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg'
                    },
                    {
                        url: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'
                    },
                    {
                        url: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg'
                    },
                    {
                        url: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg'
                    },
                ])
            }, 1000)
        })
    }
}