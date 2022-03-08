export const holdings = [
    {
        id: "anxiety",
        qty: 888
    },
    {
        id: "stress",
        qty: 188
    },
    {
        id: "happiness",
        qty: 88888
    }
]

export const profile = {
    id: 8888888,
    email: "byprogrammers@gmail.com",
}

export const settings = {
    launchScreen: "Home",
    currency: "USD",
    appearance: "Dark",
    language: "English",
    faceId: true,
}



export const trendingCurrencies = [
    {
        id: 1,
        currency: "anxiety",
        code: "AXC",
        amount: "29,455.74",
        changes: "+7.24%",
        type: "I",      // I - Increased, D - Decreased
        description: "anxiety is when one is in an unsettled state",
        chartData: [
            { x: 1, y: 2.5 },
            { x: 1.5, y: 2 },
            { x: 2, y: 2.3 },
            { x: 2.5, y: 1.4 },
            { x: 3, y: 1.5 },
            { x: 3.5, y: 2.3 },
            { x: 4, y: 2.8 }
        ],
        state: {
            value: "170435.86",
            anxiouness: "5.1"
        },
        
    },
    {
        id: 2,
        currency: "Inactivity",
        code: "INA",
        amount: "919.03",
        changes: "-0.73%",
        type: "D",
        description: "inactivity is a state of minimal to zero physical movements, as we know this has a major impact of moods and physical well being.",
        chartData: [
            { x: 1, y: 2 },
            { x: 1.5, y: 2.3 },
            { x: 2, y: 2 },
            { x: 2.5, y: 2.2 },
            { x: 3, y: 1.5 },
            { x: 3.5, y: 2.1 },
            { x: 4, y: 2.5 }
        ],
        wallet: {
            value: "18409.24",
            crypto: "13.7"
        },
        
    },
    {
        id: 3,
        currency: "Sadness",
        code: "SAD",
        amount: "118.33",
        changes: "+1.73%",
        type: "I",
        description: "sadness is a state of non positive contemplation, that results is generally dark thoughts",
        chartData: [
            { x: 1, y: 2.6 },
            { x: 1.5, y: 2.2 },
            { x: 2, y: 2 },
            { x: 2.5, y: 2.2 },
            { x: 3, y: 1.6 },
            { x: 3.5, y: 2.1 },
            { x: 4, y: 2.5 }
        ],
        wallet: {
            value: "13139.23",
            saddness: "100.2"
        },
        
    },
    {
        id: 4,
        currency:"happiness",
        code: "HAP",
        amount: "0.24",
        changes: "-0.51%",
        type: "D",
        description: "Happiness is a state of elation and good mood.",
        chartData: [
            { x: 1, y: 2.3 },
            { x: 1.5, y: 2.3 },
            { x: 2, y: 2.5 },
            { x: 2.5, y: 2.1 },
            { x: 3, y: 2.2 },
            { x: 3.5, y: 1.8 },
            { x: 4, y: 2.5 }
        ],
        wallet: {
            value: "2000.0",
            happiness: "6000.0"
        },

        
    },
]



const chartOptions = [
    {
        id: 1,
        label: "1 hr"
    },
    {
        id: 2,
        label: "3 Days"
    },
    {
        id: 3,
        label: "1 Week"
    },
    {
        id: 4,
        label: "1 Month"
    },
    {
        id: 5,
        label: "3 Months"
    }
]

const dummyData = { trendingCurrencies, chartOptions ,holdings, profile,settings};

export default dummyData;


