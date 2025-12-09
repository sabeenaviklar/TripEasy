const mockData = {
    flights: [
        { id: 'f1', airline: 'IndiGo', code: '6E-204', from: 'Delhi', to: 'Mumbai', dep: '06:00', arr: '08:10', duration: '2h 10m', price: 4500 },
        { id: 'f2', airline: 'Air India', code: 'AI-887', from: 'Delhi', to: 'Mumbai', dep: '08:00', arr: '10:15', duration: '2h 15m', price: 5200 },
        { id: 'f3', airline: 'Vistara', code: 'UK-990', from: 'Delhi', to: 'Mumbai', dep: '10:30', arr: '12:40', duration: '2h 10m', price: 6100 },
        { id: 'f4', airline: 'IndiGo', code: '6E-554', from: 'Mumbai', to: 'Delhi', dep: '18:00', arr: '20:15', duration: '2h 15m', price: 4800 },
        { id: 'f5', airline: 'SpiceJet', code: 'SG-123', from: 'Bangalore', to: 'Delhi', dep: '07:00', arr: '09:45', duration: '2h 45m', price: 5500 },
    ],
    trains: [
        { id: 't1', name: 'Rajdhani Exp', code: '12951', from: 'Delhi', to: 'Mumbai', dep: '16:25', arr: '08:35', duration: '16h 10m', price: 2800 },
        { id: 't2', name: 'August Kranti', code: '12953', from: 'Delhi', to: 'Mumbai', dep: '17:00', arr: '10:00', duration: '17h 00m', price: 2400 },
        { id: 't3', name: 'Shatabdi Exp', code: '12002', from: 'Delhi', to: 'Agra', dep: '06:00', arr: '08:00', duration: '2h 00m', price: 1100 },
    ],
    buses: [
        { id: 'b1', operator: 'ZingBus', type: 'Volvo A/C Sleeper', from: 'Delhi', to: 'Manali', dep: '20:00', arr: '08:00', duration: '12h 00m', price: 1200 },
        { id: 'b2', operator: 'IntrCity', type: 'Scania Multi-Axle', from: 'Delhi', to: 'Jaipur', dep: '06:00', arr: '11:00', duration: '5h 00m', price: 800 },
        { id: 'b3', operator: 'RedBus', type: 'A/C Seater', from: 'Mumbai', to: 'Pune', dep: '07:00', arr: '10:00', duration: '3h 00m', price: 400 },
    ]
};

const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Jaipur', 'Manali', 'Agra'];

function searchData(type, from, to) {
    // Simple case-insensitive partial match
    const data = mockData[type];
    if (!data) return [];
    
    return data.filter(item => 
        item.from.toLowerCase().includes(from.toLowerCase()) && 
        item.to.toLowerCase().includes(to.toLowerCase())
    );
}

function getItemById(type, id) {
    return mockData[type].find(item => item.id === id);
}
